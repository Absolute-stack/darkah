'use strict';

const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalCloseOverlay = document.querySelector('.modal-close-overlay');
const notificationToast = document.querySelector('.notification-toast');
const toastCloseBtn = document.querySelector('.toast-close-btn');
const mobileNav = document.querySelector('.mobile-nav-menu');
const sidebar = document.querySelector('.sidebar');
document.addEventListener('click', (e) => {
  const target = e.target;
  // close moodal
  const triggers = '.modal, .modal-close-overlay';
  if (target.closest(triggers)) {
    modal.classList.add('closed');
    modalCloseOverlay.classList.add('closed');
  }
  // close toast
  if (target.closest('.toast-close-btn')) {
    notificationToast.classList.add('closed');
  }

  // open mobile-menu
  if (target.closest('.mobile-menu-btn')) {
    mobileNav.classList.add('active');
  } else if (target.closest('.menu-close-btn')) {
    mobileNav.classList.remove('active');
  }

  // toggle submenu
  const acc = target.closest('.accordion-menu');
  if (acc) {
    let submenu = acc.nextElementSibling;
    const addBtn = acc.lastElementChild.firstElementChild;
    const removeBtn = acc.lastElementChild.lastElementChild;
    acc.classList.toggle('active');
    submenu.classList.toggle('active'); // fixed line ✅
    addBtn.classList.toggle('active');
    removeBtn.classList.toggle('active');
  }

  // toggle mobile categories
  const gridBtn = target.closest('.grid-btn');
  const sidebarCloseBtn = target.closest('.sidebar-close-btn');
  const openSidebarSubmenu = target.closest('.sidebar-accordion-menu');
  if (gridBtn) {
    sidebar.classList.toggle('active');
  }
  if (sidebarCloseBtn) {
    sidebar.classList.toggle('active');
  }
  if (openSidebarSubmenu) {
    const sidebarSubmenu = openSidebarSubmenu.nextElementSibling;
    openSidebarSubmenu.classList.toggle('active');
    sidebarSubmenu.classList.toggle('active');
  }
});
