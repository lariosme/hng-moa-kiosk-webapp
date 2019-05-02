window.addEventListener('load', setup);

const get = document.getElementById.bind(document);
const query = document.querySelector.bind(document);

function setup() {

  let modalRoot = get('modal-root');
  let button = get('modal-opener');
  let modal = query('.modal');

  modalRoot.addEventListener('click', rootClick);
  button.addEventListener('click', openModal);
  modal.addEventListener('click', modalClick);

  function rootClick() {
    modalRoot.classList.remove('visible');
  }

  function openModal() {
    modalRoot.classList.add('visible');
  }

  function modalClick(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }

}