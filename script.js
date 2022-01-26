// Получаем input range 
const topLeftRange = document.getElementById('top-left-range');
const topRightRange = document.getElementById('top-right-range');
const bottomLeftRange = document.getElementById('bottom-left-range');
const bottomRightRange = document.getElementById('bottom-right-range');

// Получаем все input range
const inputRange = document.querySelectorAll('.input');

// Получаем span который будет двигаться за rangre
const slideValue = document.querySelectorAll('.result');

// inputRange.addEventListener('input', () => {
//     let value = topLeftRange.value;
//     e.textContent = value;
//     e.style.left = (value / 1.14) + '%';
// });