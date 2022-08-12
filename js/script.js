// плавная прокрутка (якорь)
document.querySelectorAll('a[href^="#"').forEach(link => {

	link.addEventListener('click', function(e) {
		e.preventDefault();

		let href = this.getAttribute('href').substring(1);

		const scrollTarget = document.getElementById(href);

	   const topOffset = 78; // если не нужен отступ сверху 
		const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

	   window.scrollBy({
		   top: offsetPosition,
		   behavior: 'smooth'
	   });
	});
});


// меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
const headerLine = document.querySelector('.header__line');
const pip = document.querySelector('.pip');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_act');
		menuBody.classList.toggle('_act');
		headerLine.classList.toggle('_act');
		pip.classList.toggle('_act');
	});
}


// прокрутка при клике
const menuLinks = document.querySelectorAll('.span[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight + 10;

			if(iconMenu.classList.contains('_act')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_act');
				menuBody.classList.remove('_act');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}
