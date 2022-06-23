new Swiper('.image-slider',{
	// Стрелки
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	// Буллеты, текущее положение, прогрессбар
	pagination: {
		el: '.swiper-pagination',

		/*
		// Буллеты
		type: 'bullets',
		clickable: true,
		// Динамические буллеты (точки разных размеров)
		dynamicBullets: true,
		// Кастомные буллеты (цифры внизу)
		renderBullet: function (index, className) {
			return '<span class="' + className + '">' + (index + 1) + '</span>';
		},
		*/

		
		// Фракции
		type: 'fraction',
		// Кастомный вывод фракции
		renderFraction: function (currentClass, totalClass) {
			return 'Фото <span class="' + currentClass + '"></span>' + ' из ' + '<span class="' + totalClass + '"></span>';
		},
		

		/*
		// Прогрессбар
		type: 'progressbar'
		*/
		},
		// Скролл
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true
		},

		// Включение/выключение перетаскивания на ПК
		simulateTouch: true, // true по умолчанию
		// Чувствительность свайпа
		touchRatio: 1, // чем больше число, тем быстрее
		// Угол срабатывания свайпа/перетаскивания
		touchAngle: 45, 
		// Курсор перетаскивания
		grabCursor: true, // появится рука вместо курсора

		// Переключение при клике на слайд
		slideToClickedSlide: true,

		// Управление клавиатурой
		keyboard: {
			// Включить/выключить
			enabled: true,
			// Включить/выключить только когда слайдер в пределах вьюпорта
			onlyInViewport: true,
			// Включить/выключить управление клавишами pageUp/pageDown
			pageUpDown: true,
		},

		// Управление колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 1,
			// Класс объекта на котором будет срабатывать прокрутка мышью
			eventsTarget: ".image-slider" // если много одинаковых слайдеров, то мышь будет крутить все - тогда откл
		},

		//Автовысота слайдера
		autoHeight: true,

		// Количество слайдов для показа
		slidesPerView: 'auto', // можно и 2.5 или 'auto'

		// Отключить слайдер когда мало слайдов
		watchOverflow: true,

		// Отступ между слайдами
		spaceBetween: 10,

		// Количество пролистываемых слайдов
		slidesPerGroup: 1,

		// Активный слайд по центру
		centeredSlides: true,

		// Стартовый слайд
		initialSlide: 1, // с нуля отсчет

		// Безконечный слайдер
		loop: false,

		// Количество дублирующих слайдов
		loopedSlides: 0,
		
		// Свободный режим
		freeMode: true,

		// Автопрокрутка
		autoplay: {
			// Пауза между прокруткой
			delay: 1000,
			// Закончить на последнем слайде
			stopOnLastSlide: true,
			// Отключить после ручного переключения
			disableOnInteraction: true
		},

		// Скорость
		speed: 800,


});