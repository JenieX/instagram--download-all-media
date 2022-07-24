import addStyle from './js/addStyle.js';

addStyle(
  `
include: another.css
`
);

addStyle('include: main.min.css');

document.body.insertAdjacentHTML('beforeend', 'include: element.html');

console.log('userscript-modules-template');
