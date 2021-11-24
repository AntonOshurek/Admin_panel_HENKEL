export default function openItemInnersProps () {
  const showItemButton = document.querySelectorAll('.item-list__open-button');
  const showElements = document.querySelectorAll('.item-list__content');
  let tabName;

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
