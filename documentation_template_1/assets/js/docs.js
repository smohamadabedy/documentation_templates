"use strict";

var prevScroll = 0;

/* ====== Define JS Constants ====== */
const sidebarToggler = document.getElementById('docs-sidebar-toggler');
const sidebar = document.getElementById('docs-sidebar');
const sidebarLinks = document.querySelectorAll('#docs-sidebar .scrollto');



/* ===== Responsive Sidebar ====== */




sidebarToggler.addEventListener('click', () => {
	if (sidebar.classList.contains('sidebar-visible')) {
		sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');
		setTimeout(function(){
			if(document.querySelector('.docs-content')){
				document.querySelector('.docs-content').classList.add('m-0')
			}
		},300)

		
	} else {
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');
		setTimeout(function(){
			if(document.querySelector('.docs-content')){
				document.querySelector('.docs-content').classList.remove('m-0')
			}		},10)
	}
});



sidebarLinks.forEach((sidebarLink) => {
	
	sidebarLink.addEventListener('click', (e) => {
		
		e.preventDefault();
		
		var target = sidebarLink.getAttribute("href").replace('#', '');
		
		//console.log(target);
		
        document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
        
        
        //Collapse sidebar after clicking
		if (sidebar.classList.contains('sidebar-visible') && window.innerWidth < 1200){
			sidebar.classList.remove('sidebar-visible');
		    sidebar.classList.add('sidebar-hidden');
		} 
		
    });
	
});



var spy = new Gumshoe('#docs-nav a', {
	offset: 69, //sticky header height
});

document.addEventListener('gumshoeActivate', function (event) {

	// The list item
	var li = event.target;
	const element = document.getElementById('docs-sidebar');
	const element2 = document.getElementById('docs-sidebar');
	const offsetTop = li.offsetTop;

    if(Math.abs(element.scrollTop - offsetTop) > 200 ){
		element.scrollTop = offsetTop;

	}else if(prevScroll - window.scrollY > 0 ){
		element.scrollTop = offsetTop;

	}

	prevScroll = window.scrollY


}, false);

var lightbox = new SimpleLightbox('.simplelightbox-gallery a', {heightRatio:.5,rtl:true});












document.addEventListener('scroll', () => {
	const progressBar = document.getElementById('reading-progress-bar');
	const scrollTop = document.documentElement.scrollTop;
	const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const progress = (scrollTop / scrollHeight) * 100;
	progressBar.style.width = `${progress}%`;
});


const isChecked = localStorage.getItem('checkboxState_darkmode');
// Function to save the checkbox state
function saveCheckboxState() {
	const isChecked = document.getElementById('flexSwitchCheckChecked').checked;
	localStorage.setItem('checkboxState_darkmode', isChecked);
	toggleClass(isChecked);
}

// Function to apply or remove the class based on checkbox state
function toggleClass(isChecked) {
	const allElements = document.querySelectorAll('*');
	const targetRGB = 'rgb(93, 103, 120)'; // #5d6778 in RGB

	allElements.forEach(element => {
		if (isChecked) {
			element.setAttribute('data-bs-theme', 'dark');
		} else {
			element.removeAttribute('data-bs-theme');
		}
	});


	allElements.forEach(element => {
		const elementColor = window.getComputedStyle(element).color;
		if (isChecked) {
			// Check if element has child nodes with text content and if color matches
			if (elementColor === targetRGB && element.textContent.trim() !== '') {
				element.style.color = "rgb(189 189 189)"; // Set new color
			}
		} else {
			if (element.textContent.trim() !== '') {
				element.style.color = ""; // Set new color
			}
		}
	});
}

// Event listener for checkbox change
document.getElementById('flexSwitchCheckChecked').addEventListener('change', saveCheckboxState);

// Load checkbox state on page load
const foo = window.onload;
window.onload = function () {
	const savedState = localStorage.getItem('checkboxState_darkmode') === 'true';
	document.getElementById('flexSwitchCheckChecked').checked = savedState;
	toggleClass(savedState);
	setTimeout(function () {
		document.getElementById('loader').remove()
		document.querySelector('.header').classList.remove('d-none')
	}, 1000)
}


function responsiveSidebar() {
	let w = window.innerWidth;
	if (w >= 961) {
		// if larger 
		sidebar.classList.remove('sidebar-hidden');
		sidebar.classList.add('sidebar-visible');

	} else {
		// if smaller
		sidebar.classList.remove('sidebar-visible');
		sidebar.classList.add('sidebar-hidden');
	}
}



