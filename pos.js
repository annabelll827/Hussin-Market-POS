let cart = [];

const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const addCart = document.getElementById("addCart");
const cartTable = document.getElementById("cartTable");
const total = document.getElementById("total");
const checkout = document.getElementById("checkout");


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


addCart.addEventListener("click", () => {

    if(productName.value === "" || productPrice.value === "") {
        alert("تکایە ناوی کاڵا و نرخ بنووسە");
        return;
    }


    cart.push({
        name: productName.value,
        price: productPrice.value
    });


    productName.value = "";
    productPrice.value = "";

    showCart();

});


function removeItem(index){

    cart.splice(index, 1);
    showCart();

}


checkout.addEventListener("click", () => {

    if(cart.length === 0){
        alert("هیچ کاڵایەک نییە");
        return;
    }

    alert("فرۆشتن بە سەرکەوتوویی تەواو بوو");

    cart = [];
    showCart();

});


showCart();
