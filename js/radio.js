document.addEventListener('DOMContentLoaded', () => {
  const newItemForm = document.querySelector('#new-item-form');
  newItemForm.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const radioItem = createRadioItem(event.target);
  const radio = document.querySelector('#radio');
  radio.appendChild(radioItem);

  event.target.reset();
}

  const createRadioItem = function (form) {
    const radioItem = document.createElement('li');
    radioItem.classList.add('radio-item');

    const name = document.createElement('h1');
    show.textContent = form.show.value;
    radioItem.appendChild(name);

    const channell = document.createElement('h2');
    channell.textContent = form.channell.value;
    radioItem.appendChild(channell);

    const catergory = document.createElement('p');
    catergory.textContent = form.catergory.value;
    radioItem.appendChild(catergory);

    return radioItem;

  }

  const handleDeleteAllClick = function (event) {
    const radio = document.querySelector('#radio');
    radio.innerHTML = '';
  }
