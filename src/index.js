import $ from 'jquery';

import './styles/main.scss';

const modalSignup = $('#modal-signup');
const openModalSignup = $('.openSignup');
const closeModal = $('.modal__close');
const preloader = $('.preloader');
const menuBtn = $('#menuBtn');
const menuMob = $('.header__resp');
const menuMobClose = $('.header__resp .close');

const openNav = () => {
  menuMob.css({ width: '300px', opacity: '1' });
};

const closeNav = () => {
  menuMob.css({ width: '0', opacity: '0' });
};

$(window).on('load', () => {
  preloader.fadeOut();
});

openModalSignup.on('click', () => {
  modalSignup.slideDown();
  closeNav();
});

closeModal.on('click', () => {
  modalSignup.slideUp();
});

menuBtn.on('click', () => {
  openNav();
});

menuMobClose.on('click', () => {
  closeNav();
});
