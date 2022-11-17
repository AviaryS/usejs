// task 1
// const parent = document.querySelector('.parent');
// parent.addEventListener('click', function(e) {
//     let targetItem = e.target;
//     console.log(targetItem);
//     if (targetItem.closest('.btn')) {
//         targetItem.closest('.btn').classList.add('done');
//         targetItem.innerHTML = "нажата"
//     }
// });

// // Добавление кнопки

// const buttonAdd = document.querySelector('.btn__add');
// buttonAdd.addEventListener('click', function(a) {
//     parent.insertAdjacentHTML('beforeend', '<button class="btn">Кнопка (новая)</button>')
// })






// task 2
// const linkItem = document.getElementsByClassName('header__burger')[0];
// console.log(linkItem)
// linkItem.addEventListener('click', function(e) {
//     linkItem.classList.toggle('active');
//     document.querySelector('.header__menu').classList.toggle('active');
//     document.body.classList.toggle('lock');
// })






// task 3

// tabs = document.querySelectorAll(".tab");
// contents = document.querySelectorAll(".content");
// for (let num = 0; num < tabs.length; num++) {
//     tabs[num].onclick = function(event) {
//         let tabsChildren = event.target.parentElement.children;
//         for (let num = 0; num < tabsChildren.length; num++) {
//             tabsChildren[num].classList.remove("tab--active");
//         }
//         tabs[num].classList.add("tab--active");
//         let tabContentChildren = event.target.parentElement.nextElementSibling.children;
//         for (let num = 0; num < tabContentChildren.length; num++) {
//             tabContentChildren[num].classList.remove("content--active");
//         }
//         contents[num].classList.add("content--active");
//     };
// }






// task 4
// let btnRight = document.querySelector(".btnRight");
// let btnLeft = document.querySelector(".btnLeft"); 
// let slides = document.querySelectorAll("img");
// let i = 0;
// btnRight.addEventListener("click", function() {
//     ++i
//     if (i >= slides.length) {
//         slides[i-1].classList.remove("block");
//         i = 0;
//         slides[i].classList.add("block");
//     }
//     else {
//         slides[i-1].classList.remove("block");
//         slides[i].classList.add("block");
//     }
//     console.log('1: ',i);
// })
// btnLeft.addEventListener("click", function() {
//     --i
//     if (i < 0) {
//         slides[i+1].classList.remove("block");
//         i = slides.length - 1;
//         slides[i].classList.add("block");
//     }
//     else {
//         slides[i+1].classList.remove("block");
//         slides[i].classList.add("block");
//     }
//     console.log('2: ',i);
// })





// task 5
// const spollersArray = document.querySelectorAll('[data-spollers]');
//     if (spollersArray.length > 0) {
//         const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
//             return !item.getAttribute('data-spollers').split(",")[0];
//         });
//         if (spollersRegular.length > 0) {
//             initSpollers(spollersRegular);
//         }
//         const spollersMedia = Array.from(spollersArray).filter(function(item, index, self) {
//             return item.getAttribute('data-spollers').split(",")[0];
//         });
//         if (spollersMedia.length > 0) {
//             initSpollers(spollersMedia);
//             const breakpointsArray = [];
//             spollersMedia.forEach(item => {
//                 const params = item.dataset.spollers;
//                 const breakpoint = {};
//                 const paramsArray = params.split(", ");
//                 breakpoint.value = paramsArray[0];
//                 breakpoint.type = paramsArray[1];
//                 breakpoint.htmlitem = item;
//                 breakpointsArray.push(breakpoint);
//             });
//             let mediaQueries = breakpointsArray;
//             mediaQueries.forEach(breakpoint => {
                
//             });
//         }
//         function initSpollers(spollersArray, matchMedia = false) {
//             spollersArray.forEach(spollersBlock => {
//                 spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
//                 if (matchMedia.matches || !matchMedia) {
//                     spollersBlock.classList.add('_init');
//                     initSpollerBody(spollersBlock);
//                     spollersBlock.addEventListener('click', setSpollerAction);
//                 }
//                 else {
//                     spollersBlock.classList.remove('_init');
//                     initSpollerBody(spollersBlock, false);
//                     spollersBlock.addEventListener('click', setSpollerAction);
//                 }
//             });
//         }
//         function initSpollerBody(spollersBlock, hideSpollerBody = true) {
//             const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');
//             if (spollerTitles.length > 0) {
//                 spollerTitles.forEach(spollerTitle => {
//                     if (hideSpollerBody) {
//                         spollerTitle.removeAttribute('tabindex');
//                         if (!spollerTitle.classList.contains('_active')) {
//                             spollerTitle.nextElementSibling.hidden = true;
//                         }
//                     }
//                     else {
//                         spollerTitle.setAttribute('tabindex', '-1');
//                         spollerTitle.nextElementSibling.hidden = false;
//                     }
//                 });
//             }
//         }
//         function setSpollerAction(e) {
//             const el = e.target;
//             const params = el.parentElement.parentElement.dataset.spollers.split(', ');
//             if (params.length > 1) {
//                 let width = params[0];
//                 let type = params[1];

//                 let check = type == 'min' ? width >= window.innerWidth : width < window.innerWidth;
//                 if (check) { return }
//             }
//             if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {
//                 const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');
//                 const spollersBlock = spollerTitle.closest('[data-spollers]');
//                 const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;
//                 if (!spollersBlock.querySelectorAll('._slide').length) {
//                     if (oneSpoller && spollerTitle.classList.contains('_active')) {
//                         hideSpollerBody(spollersBlock);
//                         return;
//                     }
//                     spollerTitle.classList.toggle('_active');
//                     _slideToggle(spollerTitle.nextElementSibling, 500);
//                 }
//                 e.preventDefault();
//             }
//         }
//         function hideSpollerBody(spollersBlock) {
//             const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');
//             if (spollerActiveTitle) {
//                 spollerActiveTitle.classList.remove('_active');
//                 _slideUp(spollerActiveTitle.nextElementSibling, 500);
//             }
//         }
//     }
//     let _slideUp = (target, duration = 500) => {
//         if (!target.classList.contains('_slide')) {
//             target.classList.add('_slide');
//             target.style.transition.Property = 'height, margin, padding';
//             target.style.transitionDuration = duration + 'ms';
//             target.style.height = target.offsetHeight + 'px';
//             target.offsetHeight;
//             target.style.overflow = 'hidden';
//             target.style.height = 0;
//             target.style.padding.Top = 0;
//             target.style.padding.Bottom = 0;
//             target.style.margin.Top = 0;
//             target.style.margin.Bottom = 0;
//             window.setTimeout(() => {
//                 target.hidden = true;
//                 target.style.removeProperty('height');
//                 target.style.removeProperty('padding-top');
//                 target.style.removeProperty('padding-bottom');
//                 target.style.removeProperty('margin-top');
//                 target.style.removeProperty('margin-bottom');
//                 target.style.removeProperty('overflow');
//                 target.style.removeProperty('transition-duration');
//                 target.style.removeProperty('transition-property');
//                 target.classList.remove('_slide');
//             }, duration);
//         }
//     }
//     let _slideDown = (target, duration = 500) => {
//         if (!target.classList.contains('_slide')) {
//             target.classList.add('_slide');
//             if (target.hidden) {
//                 target.hidden = false;
//             }
//             let height = target.offsetHeight;
//             target.style.overflow = 'hidden';
//             target.style.height = 0;
//             target.style.paddingTop = 0;
//             target.style.paddingBottom = 0;
//             target.style.marginTop = 0;
//             target.style.marginBottom = 0;
//             target.offsetHeight;
//             target.style.transitionProperty = 'height, margin, padding';
//             target.style.transitionDuration = duration + 'ms';
//             target.style.height = height + 'px';
//             target.style.removeProperty('padding-top');
//             target.style.removeProperty('padding-bottom');
//             target.style.removeProperty('margin-top');
//             target.style.removeProperty('margin-bottom');
//             window.setTimeout(() => {
//                 target.style.removeProperty('height');
//                 target.style.removeProperty('overflow');
//                 target.style.removeProperty('transition-duration');
//                 target.style.removeProperty('transition-property');
//                 target.classList.remove('_slide');
//             }, duration);
//         }
//     } 
//     let _slideToggle = (target, duration = 500) => {
//         if (target.hidden) {
//             return _slideDown(target, duration);
//         }
//         else {
//             return _slideUp(target, duration);
//         }
//     }

//     function afterResize() {
//         spollersArray.forEach(item => {
//             let par = item.getAttribute('data-spollers').split(', ');
//             if (par.length != 2) {return}
//             let type = par[1];
//             let width = par[0];
//             let check = type == 'min' ? width >= window.innerWidth : width < window.innerWidth;
//             if (check) {
//                 item.classList.remove('_init');
//             }
//             else {
//                 item.classList.add('_init');
//             }
//         })
//     }

//     window.addEventListener('resize', (e) => {
//         afterResize()
//     })

//     afterResize()






// task 6
// const dino = document.getElementById('dino');
// const cactus = document.getElementById('cactus');

// document.addEventListener('keydown', function(event) {
//     if (event.key == ' ') {
//        jump();
//     }

// });

// function jump() {
//     dino.classList.add('jump');
//     setTimeout(function() {
//         dino.classList.remove('jump')
//     }, 300)
// }
// let isAlive = setInterval(function() {
//     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//     let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
//     if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 150) {
//         alert('Game over!')
//     }
// }, 10)

