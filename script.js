function showPassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "admin" && password === "123456") {
        message.style.color = "green";
        message.textContent = "✅ Login Successful";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.style.color = "red";
        message.textContent = "❌ Username or Password is incorrect";
    }
}
