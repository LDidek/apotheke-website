/**
 * index.js
 * Author: @Cyflink ----> Follow Us
 */

 ;(function(window) {

	'use strict';

    const tadaBtn = document.querySelector(".tada");

    function removeTada() {
        tadaBtn.classList.remove('animated');
    }

    function addTada(){
        
        tadaBtn.classList.add('animated');

        setTimeout( function() { removeTada(); }, 2000);
    }

    setTimeout( function() { addTada(); }, 1000);
    setInterval( function() { addTada(); }, 5000);

    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
        //console.log(walk);
    });

 })(window);
