`use strict`;
const formEl = document.getElementById(`list-form`);
const enterListEl = document.getElementById(`enter-list`);
const itemEl = document.getElementById(`item`);

let items = [];

const displayItems = function () {
  itemEl.innerHTML = null;
  items.forEach((item) => {
    const listEl = document.createElement(`li`);
    listEl.classList.add(`item-list`);
    listEl.innerHTML = `${item.value} <button onclick='deleteItem(${item.key})'><i class="fa-solid fa-trash-can"></i></button>`;
    itemEl.appendChild(listEl);
  });
};

const deleteItem = function (key) {
  items = items.filter((item) => item.key !== key);
  displayItems();
};

formEl.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const item = { key: new Date().valueOf(), value: enterListEl.value };
  if (enterListEl.value) {
    items.push(item);
    enterListEl.value = null;
    displayItems();
  } else {
    alert(`Enter Valid Input`);
  }
});
