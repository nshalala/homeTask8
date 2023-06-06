let strength = document.getElementById("strength");
let passVis = document.getElementById("visibility");
let container = document.getElementById("container");
let inp = document.getElementById("password");
let icon = document.getElementById("icon");

passVis.addEventListener("click", () => {
    if (container.className == "hide") {
        container.className = "show";
        icon.className = "fa-solid fa-eye";
        password.type = "text";
    } else {
        container.className = "hide";
        icon.className = "fa-solid fa-eye-slash";
        password.type = "password";
    }
});

inp.addEventListener("keydown", () => {
    if (inp.value.length < 8) {
        strength.innerText = "Weak";
        strength.className = "invalid";
    }else{
        strength.innerText = "Strong";
        strength.className = "valid";
    }
});
