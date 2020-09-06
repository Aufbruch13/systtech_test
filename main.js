'use strict';

var main = document.querySelector('main');

var toHideProducts = function (e) {
  if (!e.target.closest('.receipt-item__prods a')) {
    return;
  }

  var hideBlock = e.target.parentElement.nextElementSibling;

  hideBlock.hidden = !hideBlock.hidden;
}

main.addEventListener('click', toHideProducts); ////скрытие/открытие блока со списком товаров 


var toHideReceipts = function (e) {
  if (!e.target.closest('.receipt-headers') ||
    e.target.className === 'receipt-headers') {
    return;
  }

  var parentBlock = e.target.parentElement;
  var hideBlock = parentBlock.nextElementSibling;

  hideBlock.hidden = !hideBlock.hidden;
  parentBlock.firstElementChild.classList.toggle("close");
}

main.addEventListener('click', toHideReceipts); //скрытие/открытие блока со списками товаров за день