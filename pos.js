let cart = [];

let products = JSON.parse(localStorage.getItem("products")) || [];

const productSelect = document.getElementById("productSelect");
const addCart = document.getElementById("addCart");
const cartTable = document.getElementById("cartTable");
const total = document.getElementById("total");
const checkout = document.getElementById("checkout");


// پیشاندانی کاڵاکان لە لیست
function loadProducts() {

    products.forEach((product) => {

        let option = document.createElement("option");

        option.value = product.price;
        option.textContent = `${product.name} - $${product.price}`;

        productSelect.appendChild(option);

    });

}


// پیشاندانی سەبەتە
function showCart() {

    let rows = `
        <tr>
            <th>کاڵا</th>
            <th>نرخ</th>
            <th>کردار</th>
        </tr>
    `;

    let sum = 0;

    cart.forEach((item, index) => {

        sum += Number(item.price);

        rows += `
        <tr>
            <td>${item.name}</td>
            <td>$${item.price}</td>
            <td>
                <button onclick="removeItem(${index})">🗑️</button>
            </td>
        </tr>
        `;
    });

    cartTable.innerHTML = rows;
    total.innerHTML = sum;
}


// زیادکردنی کاڵا بۆ سەبەتە
addCart.addEventListener("click", () => {

    let selected = productSelect.options[productSelect.selectedIndex];

    if(selected.value === ""){
        alert("تکایە کاڵایەک هەڵبژێرە");
        return;
    }

    cart.push({
        name: selected.textContent.split(" - ")[0],
        price: selected.value
    });

    showCart();

});


// سڕینەوەی کاڵا
function removeItem(index){

    cart.splice(index,1);
    showCart();

}


// تەواوکردنی فرۆشتن
checkout.addEventListener("click", () => {

    if(cart.length === 0){
        alert("سەبەتەکە بەتاڵە");
        return;
    }

    alert("فرۆشتن تەواو بوو ✅");

    cart = [];
    showCart();

});


loadProducts();
showCart();
