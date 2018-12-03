import 'jquery';
import '../about.html';
import '../css/main.scss';
import { RandomGenerator } from './random-generator';

const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

const buttonRndInt = jQuery('#randomInt');
const buttonRndRange = document.querySelector('#randomRange');

buttonRndInt.click(outputRandomInt);
buttonRndRange.addEventListener('click', outputRandomRange);