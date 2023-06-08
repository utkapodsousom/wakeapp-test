import $ from 'jquery';

import './styles/main.scss';

const modalEl = $('#modal');
const preloader = $('.preloader');
const menuBtn = $('#menuBtn');
const tabBtn = $('.tabsBtn');
const tabContentEls = $('.tabContent');
const modalBtnEls = $('[data-modal]');

modalBtnEls.on('click', (e) => {
  e.preventDefault();
  const modalType = e.target.dataset.modal;
  makeVisible(modalType);
  modalEl.css('display', 'block');
  $(`[data-tab=${modalType}]`).addClass('active');
});

const makeVisible = (type) => {
  const tabContent = $(`#${type}`);
  tabContent.css('display', 'block');
};

tabBtn.on('click', (e) => {
  const tabTarget = e.target.dataset.tab;
  tabContentEls.css('display', 'none');
  makeVisible(tabTarget);
  tabBtn.removeClass('active');
  e.target.classList.add('active');
});

modalEl.on('click', (e) => {
  if (e.target == modalEl[0]) {
    modalEl.css('display', 'none');
  }
})

const openNav = () => {
  menuMob.css({ width: '100%', opacity: '1' });
};

const closeNav = () => {
  menuMob.css({ width: '0', opacity: '0' });
};

$(window).on('load', () => {
  preloader.fadeOut();
});

menuBtn.on('click', () => {
  openNav();
});

