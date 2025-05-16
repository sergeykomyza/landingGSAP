$('.section_03_slider').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: true,
	responsive: [
		{
		breakpoint: 1200,
		settings: {
			slidesToShow: 2,
		}
		},
		{
		breakpoint: 992,
		settings: {
			slidesToShow: 1,

		}
		}
	]
});
$('.section_08_slider').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	adaptiveHeight: true,
	dots: true,
	responsive: [
		{
		breakpoint: 1000,
		settings: {
			dots: false,
			arrows: false,
		}
		},
		{
		breakpoint: 992,
		settings: {
			autoplay: true,
			autoplaySpeed: 3000,
			dots: false,
			arrows: false,
		}
		}
	]
});

// ~~~~~~~~~~~~~~~~~~~~~~ ANIMATION
const animations = () => {
	// ПЕРВЫЙ ЭКРАН
	const tl = gsap.timeline()
			tl.from('.present-text-box', {duration: 1, opacity: 0, transform: 'translateX(-5rem)'})
					.from('.present-title', {duration: 0.5, opacity: 0, transform: 'translateY(-2rem)'})
					.from('.present-tagtitle', {duration: 0.5, opacity: 0, transform: 'translateY(-2rem)'})
					.from('.present-info', {duration: 0.5, opacity: 0, transform: 'translateY(-2rem)'})
					.from('.present-btn', {duration: 0.5, opacity: 0, transform: 'translateY(-2rem)'})
	
	// ЗАГОЛОВКИ
	const animationObjects = {
			obj0: {
					objName: '.section_01 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_01', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj1: {
					objName: '.section_03 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_03', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj2: {
					objName: '.section_04 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_04', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj3: {
					objName: '.section_05 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_05', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj4: {
					objName: '.section_06 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_06', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj5: {
					objName: '.section_07 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_07', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj6: {
					objName: '.section_08 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_08', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj7: {
					objName: '.section_10 h2',
					beginPosition: '-100px', 
					endPosition: '0',
					animationTrigger: '.section_10', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
	}
	const objectsArray = Object.entries(animationObjects)
	for(let i = 0; i < objectsArray.length; i++){
			let currObj = objectsArray[i][1]
			gsap.fromTo(currObj.objName, {
					y: currObj.beginPosition,
					opacity: 0
			}, {
					y: currObj.endPosition,
					opacity: 1,
					scrollTrigger: {
							pin: false,
							trigger: currObj.animationTrigger,
							start: currObj.startCoord,
							end: currObj.endCoord,
							scrub: currObj.scrub,
							markers: currObj.markers,
							id: currObj.objId
					}
			});
	}
	const split1 = new SplitText('.section_002 .unlock-title', { type: 'chars' });
  const split2 = new SplitText('.section_09 .unlock-title', { type: 'chars' });
	gsap.from(split1.chars, {
		scrollTrigger: {
			trigger: '.section_002',
			start: 'top 90%',
			end: 'bottom 80%',
			scrub: 1,
			markers: false,
			id: 'title'
		},
		opacity: 0,
		y: 20,
		stagger: 0.05,
		ease: 'power2.out'
	});
	gsap.from(split2.chars, {
		scrollTrigger: {
			trigger: '.section_09',
			start: 'top 90%',
			end: 'bottom 80%',
			scrub: 1,
			markers: false,
			id: 'title'
		},
		opacity: 0,
		y: 20,
		stagger: 0.05,
		ease: 'power2.out'
	});
	// END ЗАГОЛОВКИ
	
	// ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПО СКРОЛЛУ
	const animationCards = {
			obj0: {
					objName: '.section_01_box .item',
					beginPosition: '100px',
					animationTrigger: '.section_01', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj1: {
					objName: '.section_03_slider .slick-slide',
					beginPosition: '0px',
					animationTrigger: '.section_03', 
					startCoord: '70% 90%',
					endCoord: '90% 95%',
					stag: 3,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj2: {
					objName: '.section_04_box .item',
					beginPosition: '100px',
					animationTrigger: '.section_04', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj3: {
					objName: '.section_05 .js-animationElem1',
					beginPosition: '100px',
					animationTrigger: '.section_05', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj4: {
					objName: '.js-animationElem2',
					beginPosition: '100px',
					animationTrigger: '.section_06', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj5: {
					objName: '.js-animationElem3',
					beginPosition: '100px',
					animationTrigger: '.section_07', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj6: {
					objName: '.js-animationElem4',
					beginPosition: '100px',
					animationTrigger: '.section_08', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj7: {
					objName: '.accordion-item',
					beginPosition: '100px',
					animationTrigger: '.section_10', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj8: {
					objName: '.js-animationElem5',
					beginPosition: '100px',
					animationTrigger: '.section_002', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
			obj9: {
					objName: '.js-animationElem6',
					beginPosition: '100px',
					animationTrigger: '.section_09', 
					startCoord: '0 60%',
					endCoord: '70% 70%',
					stag: 0.5,
					scrub: 2, 
					markers: false,
					objId: 'title'
			},
	}
	const objectsArray2 = Object.entries(animationCards)
	for(let i = 0; i < objectsArray2.length; i++){
		let currObj = objectsArray2[i][1]
		gsap.from(currObj.objName, {
				stagger: currObj.stag,
				y: currObj.beginPosition,
				opacity: 0,
				scrollTrigger: {
						pin: false,
						trigger: currObj.animationTrigger,
						start: currObj.startCoord,
						end: currObj.endCoord,
						scrub: currObj.scrub,
						markers: currObj.markers,
						id: currObj.objId
				}
		});
	}
	// END ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПО СКРОЛЛУ

}
if(document.documentElement.clientWidth > 991){
	animations()
}
