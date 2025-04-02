let calculation=localStorage.getItem('calculation') || '';

displayCalculation();

function updateCalculation(value) {
    calculation += value;
    displayCalculation();
    localStorage.setItem('calculation',calculation);
}
function displayCalculation() {
    // document.querySelector('.js-calculation').innerHTML=calculation;
    // let inputBox = document.querySelector('.js-calculation');
    // inputBox.value = calculation;
    document.querySelector('.js-calculation').value=calculation;
    console.log(inputBox.value);

}