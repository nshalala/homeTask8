let textarea = document.getElementById("text");
let count = document.getElementById("count");

function countWords() {
    if (textarea.value == "") {
        count.textContent = 0;
    } else {
        let text = textarea.value.trim().split(" ");
        count.textContent = text.length;
    }
}
