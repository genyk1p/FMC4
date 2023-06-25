"use strict";
document.addEventListener("DOMContentLoaded", () =>{
    const menu = document.querySelector(".nav__menu"),
          menuIcon = document.querySelector(".menu-icon"),
          menuCrossIcon = document.querySelector(".nav__menu-cross"),
          overlay = document.querySelector('.nav__overlay');

          menuIcon.addEventListener('click', e => {
            menu.classList.toggle('nav__menu_activ');
            overlay.classList.toggle('nav__overlay_show');
          })

          menuCrossIcon.addEventListener('click', e =>{
            menu.classList.toggle('nav__menu_activ');
            overlay.classList.toggle('nav__overlay_show');
          })

          document.addEventListener('click', e =>{
            if(e.target && e.target.classList.contains('nav__overlay')){
                menu.classList.toggle('nav__menu_activ');
                overlay.classList.toggle('nav__overlay_show');
            }
          })
          
          menu.querySelectorAll("a").forEach(a =>{
            a.addEventListener("click", ()=>{
                menu.classList.toggle('nav__menu_activ');
                overlay.classList.toggle('nav__overlay_show');
            })
          })
  });