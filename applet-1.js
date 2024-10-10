//Event Function 1

function updateDisplay() {
    var textbox = document.getElementById('textbox');
    var displayText = document.getElementById('displayText');
    displayText.textContent = textbox.value;
}
function showAlert() {
    var textbox = document.getElementById('textbox');
    alert("Hi  " + textbox.value);
}