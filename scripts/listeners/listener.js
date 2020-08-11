'use strict';
console.log('--- loading listener: Event');

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);

  populateList(items, itemsList);
