// Получаем input range 
const topLeftRange = document.getElementById('top-left-range');
const topRightRange = document.getElementById('top-right-range');
const bottomLeftRange = document.getElementById('bottom-left-range');
const bottomRightRange = document.getElementById('bottom-right-range');

// Получаем результат input range 
const topLeftResult = document.querySelector('top-left-result');
const topRightResult = document.querySelector('top-right-result');
const bottomLeftResult = document.querySelector('bottom-left-result');
const bottomRightResult = document.querySelector('bottom-right-result');

// Получаем все input range
const inputsRange = document.querySelectorAll('.input');

// Получаем квадрат
const cube = document.querySelector('.cube');

// Получаем результат
const totalResult = document.getElementById('totalResult');


// Связываем результаты и range
const changeRadius = () => {
    topLeftResult.innerHTML = topLeftRange.value;
    topRightResult.innerHTML = topRightRange.value;
    bottomLeftResult.innerHTML = bottomLeftRange.value;
    bottomRightResult.innerHTML = bottomRightRange.value;
};

inputsRange.forEach((node) => {
    node.addEventListener('input', changeRadius)
});
