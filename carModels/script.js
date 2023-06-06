let brandS = document.getElementById("brand");
let modelS = document.getElementById("model");

let cars = {
    chevrolet: ["Camaro", "Impalo", "Tahoe", "Corvette"],
    kia: ["Rio", "Sorento", "Carnival", "Soul"],
};

brandS.addEventListener("change", () => {
    let code = "";
    let selectedC = brandS.value;
    modelS.disabled = false;
    for (let model of cars[selectedC]) {
        code += `<option>${model}</option>`;
    }
    modelS.innerHTML = code;
});
