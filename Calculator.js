let calculation=localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation',calculation);
}
function displayCalculation() {
    document.querySelector('.js-calculation').value=calculation;
    console.log(inputBox.value);

}
