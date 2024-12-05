"use strict";


// Stickyfill 
var elements = document.querySelectorAll('.sticky');
Stickyfill.add(elements);


// Gumshoe
var spy = new Gumshoe('#doc-nav a', {
	offset: 0 
});


// SimpleLightbox Plugin 
var lightbox = new SimpleLightbox('.simplelightbox-gallery-1 a', {rtl:true});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-2 a', {rtl:true});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-3 a', {rtl:true});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-4 a', {rtl:true});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-5 a', {rtl:true});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-6 a', {rtl:true});
var lightbox = new SimpleLightbox('.simplelightbox-gallery-7 a', {rtl:true});



