function menuFunction() {
	const menus = document.querySelectorAll('.header__menu');

	// Бургер-кнопка
	function burger() {
		menus.forEach(menu => {
			const menuBurgerBtns = menu.querySelectorAll('.menu__icon');

			if (menuBurgerBtns) {
				menuBurgerBtns.forEach(btn => {

					// Открываем меню
					btn.addEventListener("click", function (e) {
						e.preventDefault();
						menuToggle("menu-open")
					});
				});
			}
		});
	};
	burger()

	// Функции открытия меню с блокировкой скролла
	function menuOpen(classes) {
		bodyLock();
		document.documentElement.classList.add(classes);
	}
	function menuClose(classes) {
		bodyUnlock();
		document.documentElement.classList.remove(classes);
	}
	function menuToggle(classes) {
		bodyLockToggle();
		document.documentElement.classList.toggle(classes);
	}
}
menuFunction()

function wrapMenuText() {
	const menus = document.querySelectorAll('.menu');

	menus.forEach(menu => {
		const links = menu.querySelectorAll('ul li a');

		links.forEach(link => {
			const text = link.childNodes;

			text.forEach(node => {
				if (node.nodeType === Node.TEXT_NODE && node.nodeValue.trim() !== '') {
					const span = document.createElement('span');
					span.textContent = node.nodeValue;
					node.replaceWith(span);
				}
			});
		});
	});
}
wrapMenuText();


/* ====================================
Header при скролле
==================================== */
function headerScroll() {
	const header = document.querySelector('.header');
	let lastScrollTop = 0;

	function headerClassAdd() {
		header.classList.toggle('_header-scroll', window.scrollY > 0)
		let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

		// Проверка на присутствие класса для бургер-меню. Если он есть, то шапка не скрывается
		if (document.documentElement.classList.contains("menu-open")) {
			header.style.transform = "0px";
		}
		else {
			// Скрытие шапки
			if (scrollTop > lastScrollTop) {
				header.style.transform = `translateY(-${header.clientHeight}px)`;
				header.classList.remove('_header-show');
			} else {
				header.style.transform = "translateY(0px)";
				header.classList.add('_header-show');
			}
		}
		lastScrollTop = scrollTop;
	}

	headerClassAdd();

	window.addEventListener('scroll', function () {
		headerClassAdd()
	})
}
headerScroll()