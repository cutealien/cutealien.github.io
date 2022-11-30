var menuMobilebtns = document.querySelectorAll('[data-menu-btn=menu-mobile]')
var menuMobile = document.querySelector('[data-menu=menu-mobile]')
var menuMobilebg = document.querySelector('[data-menu-bg=menu-mobile]')
var menuMobilecontent = document.querySelector('[data-menu-content=menu-mobile]')

menuMobilebtns.forEach(btn => {
	btn.addEventListener('click', toggleMenu)
})

menuMobilebg.addEventListener('click', toggleMenu)

menuMobile.addEventListener('transitionend', (e) => {
	// console.log(e)
	if(menuMobile.classList.contains('menu-mobile--active')){
		menuMobile.classList.add('menu-mobile--visible')
	}
	else {
		menuMobile.classList.remove('menu-mobile--visible')
	}
})

function toggleMenu() {
	menuMobile.classList.toggle('menu-mobile--active')
	menuMobilebg.classList.toggle('menu-mobile__bg--active')
	menuMobilecontent.classList.toggle('menu-mobile__content--active')
}

window.addEventListener("resize", (e) => {
	// console.log(window.matchMedia('(max-width: 1280px) and (orientation: landscape)'))
	let media = window.matchMedia('(min-width: 1000px) and (max-width: 1280px) and (orientation: landscape)')
	if(media.matches) {
		menuMobile.classList.remove('menu-mobile--visible')
		menuMobile.classList.remove('menu-mobile--active')
		menuMobilebg.classList.remove('menu-mobile__bg--active')
		menuMobilecontent.classList.remove('menu-mobile__content--active')
	}
});