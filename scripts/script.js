`use strict`;
const formEl = document.getElementById(`list-form`);
const enterListEl = document.getElementById(`enter-list`);
const itemEl = document.getElementById(`item`);

let items = [];
let editId = null;
let editing = false;

const displayItems = function () {
  itemEl.innerHTML = null;
  items.forEach((item) => {
    const listEl = document.createElement(`li`);
    listEl.classList.add(`item-list`);
    listEl.innerHTML = `${item.value} <button class="btn-icon" onclick='editItem(${item.key})'><i class="fa-regular fa-pen-to-square"></i></i></button> <button class="btn-icon" onclick='deleteItem(${item.key})'><i class="fa-solid fa-trash-can"></i></button>`;
    itemEl.appendChild(listEl);
  });
};

const deleteItem = function (key) {
  items = items.filter((item) => item.key !== key);
  displayItems();
};

const editItem = function (key) {
  const itemToEdit = items.find((item) => item.key === key);
  enterListEl.value = itemToEdit.value;
  editId = key;
  editing = true;
  displayItems();
};

formEl.addEventListener(`submit`, (e) => {
  e.preventDefault();
  const item = { key: new Date().valueOf(), value: enterListEl.value };
  if (enterListEl.value) {
    if (editing) {
      items = items.map((item) => {
        if (item.key === editId) {
          return { ...item, value: enterListEl.value };
        } else {
          return item;
        }
      });
      displayItems();
      editId = null;
      editing = false;
      enterListEl.value = null;
    } else {
      items.push(item);
      displayItems();
      enterListEl.value = null;
    }
  } else {
    alert(`Enter Valid Input`);
  }
});
