function addMenu() {
    var popup = document.getElementById('add-menu');
    
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}
function closeAddMenu() {
    var popup = document.getElementById('add-menu');
    
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}

function increment() {
    var numberField = document.getElementById('numberField');
    var currentValue = parseInt(numberField.value, 10);
    if (currentValue < parseInt(numberField.max, 10)) {
        numberField.value = currentValue + 1;
    }
}

function decrement() {
    var numberField = document.getElementById('numberField');
    var currentValue = parseInt(numberField.value, 10);
    if (currentValue > parseInt(numberField.min, 10)) {
        numberField.value = currentValue - 1;
    }
}

function change(button) {
    if (button.textContent === 'ADD') {
        button.style.width = '80px';
        button.textContent = 'REMOVE';
    } else {
        button.textContent = 'ADD';
        button.style.width = '50px';
    }
}