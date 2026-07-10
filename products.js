let products = JSON.parse(localStorage.getItem("products")) || [];

const nameInput = document.querySelector('input[placeholder="ناوی کاڵا"]');
const priceInput = document.querySelector('input[placeholder="نرخ"]');
const qtyInput = document.querySelector('input[placeholder="ژمارە"]');
const button = document.querySelector("button");
const table = document.querySelector("table");

function showProducts() {
    let rows = `
        <tr>
            <th>ناو</th>
            <th>نرخ</th>
            <th>ژمارە</th>
            <th>کردار</th>
        </tr>
    `;

    products.forEach((product, index) => {
        rows += `
        <tr>
            <td>${product.name}</td>
            <td>$${product.price}</td>
            <td>${product.qty}</td>
            <td>
                <button onclick="deleteProduct(${index})">🗑️</button>
            </td>
        </tr>
        `;
    });

    table.innerHTML = rows;
}

button.addEventListener("click", () => {

    let product = {
        name: nameInput.value,
        price: priceInput.value,
        qty: qtyInput.value
    };

    if(product.name === "" || product.price === "" || product.qty === ""){
        alert("تکایە هەموو خانەکان پڕ بکەوە");
        return;
    }

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    nameInput.value = "";
    priceInput.value = "";
    qtyInput.value = "";

    showProducts();
});


function deleteProduct(index){
    products.splice(index,1);
    localStorage.setItem("products", JSON.stringify(products));
    showProducts();
}


showProducts();
