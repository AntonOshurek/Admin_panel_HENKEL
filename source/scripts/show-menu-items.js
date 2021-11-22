export default function showMenuItems() {
  const showItemButton = document.querySelectorAll('.menu__button');
  const showElements = document.querySelectorAll('.menu__item-content');
  let tabName;

  function selectTabNav() {
    tabName = this.getAttribute('data-tab-name');
    this.querySelector('.menu__button-icon').classList.toggle('menu__button-icon--open');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    showElements.forEach(item => {
      if(item.classList.contains(tabName)) {
        item.classList.toggle('menu__item-content--open')
      }
    })
  }

  showItemButton.forEach(btn => {
    btn.addEventListener('click', selectTabNav)
  });
};
