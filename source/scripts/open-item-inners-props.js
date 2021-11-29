export default function openItemInnersProps () {
  const showItemButton = document.querySelectorAll('.item-list__open-button');
  const showElements = document.querySelectorAll('.item-list__content');
  const MOBILE_WIDTH = 600;
  let tabName;

  const pageWidth = window.getComputedStyle(document.querySelector('body')).width.replace(/[^\d.-]/g, '');
  if(Math.floor(pageWidth) <= MOBILE_WIDTH) {
    showElements.forEach(item => {
      item.classList.remove('item-list__content--open');
    })
  }

  function selectTabNav() {
    tabName = this.getAttribute('data-inner-name');
    this.querySelector('.item-list__open-icon').classList.toggle('item-list__open-icon--open');
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    showElements.forEach(item => {
      if(item.classList.contains(tabName)) {
        item.classList.toggle('item-list__content--open')
      }
    })
  }

  showItemButton.forEach(btn => {
    btn.addEventListener('click', selectTabNav)
  });
}
