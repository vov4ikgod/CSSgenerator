// Получаем input range 
const topLeftRange = document.getElementById('top-left-range');
const topRightRange = document.getElementById('top-right-range');
const bottomLeftRange = document.getElementById('bottom-left-range');
const bottomRightRange = document.getElementById('bottom-right-range');

// Получаем результат input range 
const topLeftResult = document.querySelector('.top-left-result');
const topRightResult = document.querySelector('.top-right-result');
const bottomLeftResult = document.querySelector('.bottom-left-result');
const bottomRightResult = document.querySelector('.bottom-right-result');

// Получаем все input range
const inputsRange = document.querySelectorAll('.input');

// Получаем кнопку
const btnResult = document.querySelector('.btn-result');

// Получаем квадрат
const cube = document.querySelector('.cube');

// Получаем input color
const inputColor = document.querySelector('.input-color');

// Получаем результат border-radius
const result = document.getElementById('totalResultRadius');

// Получаем результат background-color
const resultBackgroundColor = document.getElementById('total-result-background-color');
console.log(resultBackgroundColor);
// Связываем результаты и range
const changeRadius = () => {
    let valueTopLeft = topLeftRange.value;
    topLeftResult.textContent = valueTopLeft;
    topLeftResult.style.left = (valueTopLeft / 1.14) + '%';

    let valueTopRight = topRightRange.value;
    topRightResult.textContent = valueTopRight;
    topRightResult.style.left = (valueTopRight / 1.14) + '%';

    let valueBottomLeft = bottomLeftRange.value;
    bottomLeftResult.textContent = valueBottomLeft;
    bottomLeftResult.style.left = (valueBottomLeft / 1.14) + '%';

    let valueBottomRight = bottomRightRange.value;
    bottomRightResult.textContent = valueBottomRight;
    bottomRightResult.style.left = (valueBottomRight / 1.14) + '%';

    cube.style.borderRadius = topLeftRange.value + 'px ' + topRightRange.value + 'px ' + bottomRightRange.value + 'px ' + bottomLeftRange.value + 'px ';

};

inputsRange.forEach((node) => {
    node.addEventListener('input', changeRadius)
});

const totalResultBorder = () => {
    result.innerHTML = topLeftRange.value + 'px ' + topRightRange.value + 'px ' + bottomRightRange.value + 'px ' + bottomLeftRange.value + 'px;';
};

btnResult.addEventListener('click', totalResultBorder);


const changeBackgroundColor = () => {
    cube.style.backgroundColor = inputColor.value;
};

const totalResultBackground = () => {
    resultBackgroundColor.innerHTML = inputColor.value + ';';
};

inputColor.addEventListener('input', changeBackgroundColor);

btnResult.addEventListener('click', totalResultBackground);

