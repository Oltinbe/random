let random_number = document.getElementById('random_number');
let random_button = document.getElementById('random_button');

random_button.addEventListener('click', function() {
    let first = +document.getElementById('first_number').value;
    let last = +document.getElementById('last_number').value;
    let rand = Math.floor(first + Math.random() * (last - first + 1));
    
    random_number.textContent = rand;
});