// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')
// FULL CALENDAR

// $(document).ready(function () {
//   $("#xxs").select2({      
//   });
//   $("#xx").select2({      
//   });
// });
document.addEventListener('DOMContentLoaded', () => {
	$('.click-item').click(function() {

		$(this).addClass('active').siblings('').removeClass('active')

		if($('.edit-list').hasClass('active')) {
			$('.edit-logo').addClass('edit')
		} else {
			$('.edit-logo').removeClass('edit')
		}
	})



	// GALLERY PAGE
	if ($('.gallery-page__gallery').hasClass('gallery')) {
			$('.gallery-close-btn').click(function() {
				var that = $(this)
				if($('body').hasClass('mfp-zoom-out-cur')) {
					$('.mfp-close').click()
					return
				} else {
					 window.location.href='index-home.html#HomeModal';
				}
				if (window.location.hash == '#ClientsBack') {
					window.location.href='index-clients.html#ClientsModal'
					return
				}
			})
			
			$('.gallery-button').magnificPopup({
				gallery: {
					enabled: true
				},
				type: 'image'
			});
			return
	}
	
	// SIDEBAR
	if ($(window).width() > 1024) {
		$(".side-bar__hamburger").click(function () {
		$(".page").toggleClass("wide");
		});
	}
	if ($(window).width() < 768) {
		$(".side-bar__hamburger").click(function () {
		$(".page__left-side").toggleClass("active");
		$("body").toggleClass("no-scroll");
		$(this).find("span").toggleClass("active");
		});
	}

	$(window.location.hash).addClass('active').siblings().removeClass('active')


	if (window.location.hash == '#HomeModal' || window.location.hash == '#ClientsModal' ) {
		$('.add-note').removeClass('active')
		$('.modal').addClass('visible')
		$('.modal-details__head .click-item').removeClass('active')
		$('.modal-details__create-note').removeClass('visible')
		$('.modal-details').addClass('active').scrollTop(1000)
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		$('.steps-item').removeClass('in-view').eq(0).addClass('in-view')
	}

	if (window.location.hash == '#ClientsModal') {
		$('.modal-details').addClass('clients-mode')
	}

	const order = $('.side-bar__list .click-item.active').attr('data-order')
	$('.minimized .side-bar__list .click-item').eq(order).addClass('active')
		


	mainText = $('.global-content__core').attr('data-name')

	if( mainText == 'Doctors' || mainText == 'Clients' ) {
		$('.content-wrapper__filter-calendar').addClass('solo').find('.open-calendar').remove()
	} else {
		datepicker("#open-calendar",{})
	}
	if( mainText == 'Clients') {
		$('.reschedule-button').remove()
	}
	if( mainText == 'Report') {
		datepicker("#report-calendar",{})
	}

	$('.remove-photo').click(function() {
		$('.slider li').toggleClass('editable')
	})

	$('.delete-button').click(function() {
		console.log('asdasdas')
		$(this).parents('li').css('display', 'none');
	})

    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var text = document.getElementById('headText')
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    mainText = $('.global-content__core').attr('data-name')
    if( mainText == 'Report') {
        mainText = 'Report for ' + monthNames[today.getMonth()] + ' ' + yyyy
        $('.global-content__core').addClass('reports-mode')
        $('.content-wrapper__header').css('display', 'none');
        $('.global-content__title p').css('display', 'none');
        $('#headText').text(mainText)
    }
    today = 'Today ' + monthNames[today.getMonth()] + ' ' + dd + ' st, ' + yyyy;

    text.innerHTML = today

    if( $('.flex-table__days').hasClass('in-view') ) {
        $('#homePage').addClass('active')
        $('.global-content__header').addClass('home-page-mode')
        $('.content-wrapper').addClass('home')
    }

	if(!$('#homePage').hasClass('active')) {
		$('#headText').text(mainText)	

	}

	if( mainText == 'Doctors') {
		var digit = 1700
		$('.global-content__title p').text(digit + ' ' + 'Clients')
	} else {
		var appDigit = 13
		$('.global-content__title p').text(appDigit + ' ' + 'appointments')
	}
	if( mainText == 'My Account') {
		$('.global-content__title p').css('display', 'none')
	}

	// IF HOME
	if($('.flex-table__days').hasClass('in-view')) {
		$('.clients-mobile-only').remove()
		$('.global-content__home-only').addClass('home')
		$('.modal-details__head .clients-mode').css('display', 'none');
	}
	if( $('.personal-info__info').hasClass('info-form') ) {
		$('.content-wrapper__header').css('display', 'none');
	}

	$('.info-form input').on('input', function () {
		$('.personal-info__info .cancel-save__buttons').addClass('save')
	})
	$('.personal-info__info .cancel-save__buttons').click(function() {
		$(this).removeClass('save')
	})
	


	$('.select').select2()

	// HEADER BUTTONS CLICK
	$('.NA-btn').click( function() {
		$('.animated__order .step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.calendar-min-section').addClass('in-view')
		$('.modal').addClass('visible')
		$('.modal-new-appt').addClass('active')
		if ( $(this).hasClass('swap')) {
				$('.modal-details').removeClass('active')
		}
		if ($(window).width() < 768) {
			$('body').addClass('no-scroll')
		}
	})
	$('.invite-client-button').click( function() {
		$('.modal').addClass('visible')
		$('.modal-block-invite').addClass('active')
		if ( $(this).hasClass('swap')) {
				$('.modal-details').removeClass('active')
		}
		if ($(window).width() < 768) {
			$("body").addClass("no-scroll");
		}
	})

	$('.back-to-date-button').click(function() {
		$('.animated__order .step-item').removeClass('in-view').eq(0).addClass('in-view')
	})

	$('#BH-btn').click( function() {
		$('.step-textarea').val('')
		$('.modal').addClass('visible')
		$('.modal-block-hours').addClass('active')
		if ($(window).width() < 768) {
			$('body').addClass('no-scroll')
		}
	})

	// FILTER CALENDAR BUTTONS
	$(document).click(function(event) { 
	  var $target = $(event.target);
	  if($(event.target).closest('.content-wrapper__filter-calendar').length == 0)
	  {
	  	$('.filter-container').removeClass('active')
	   $('.filter-calendar-buttons').removeClass('active')
	  }      

	  if($(event.target).closest('.info__photos__gallery').length == 0)
	  {
	   $('.slider li ').removeClass('editable')
	   return
	  }        
	});

	$('#open-filter').click(function() {
		$('.filter-container').addClass('active')
	})





	// ACARDEOUN

	$('.headings li h4').click(function() {
	    $(this).parent().toggleClass('active')
	    $(this).toggleClass('active');
	    $(this).next('.animated').slideToggle(300)
	    $(this).parent().siblings().removeClass('active')
	    $(this).parent().siblings().find('.animated').slideUp(300)
	    $(this).parent().siblings().find('h4').removeClass('active')

	    var that = $(this)
	    window.setTimeout(function() {
	        $('html, body').animate({
	            scrollTop: that.offset().top - 100
	        });
	    }, 400)
	});

	$("#sel5").select2({		 
	})
	$('#sel4').on('select2:select', function (e) { 
	     	$(this)
	     	.parent().slideUp(300)
	     	.prev().removeClass('active')
	     	.parents('li').next().find('h4').addClass('active')
	     	.next().slideToggle(300)
	});
	$('.animated__steps .click-item').click(function() {
		$(this)
			.parents('.animated').slideUp(300)
			.parents('li').find('h4').removeClass('active')
			.parents('li').next().find('h4').addClass('active')
			.next().slideDown(300)

	})

	$('.calendar-min-section .cal-next-step').click(function () {
		$('.animated__steps.in-view').next().addClass('in-view').siblings().removeClass('in-view')
	})


	// home table change content
	$('.global-list-button').click(function(){
		$('.flex-table__list').removeClass('in-view').eq(0).addClass('in-view');
		$('.day-button').addClass('active').siblings().removeClass('active')
	})
	$('.global-calendar-button').click(function(){
		$('.flex-table__list').removeClass('in-view')
	})


	// modal head reset steps
	$('.modal-details__head .click-item').click(function() {
		$('.step-item').removeClass('in-view').eq(0).addClass('in-view')
		$('.modal-details__create-note').removeClass('visible')
		$('.add-note').removeClass('active')
		$('.reschedule-block--step2 .next-step').addClass('disabled')
		$('.form .click-item').removeClass('active')
		$('.step-textarea').val('')
	})

	$('.block-nav .click-item').click(function() {
		$('.block-nav .click-item').removeClass('active')
		$(this).addClass('active')
	})
	




	

	// FLEX TABLE SLOT CLICK
	$('.clients-table .table-slot').click(function(){
		$('.modal-details').addClass('clients-mode')
		if ($('.modal-details').hasClass('clients-mode')) {
			$('.href').attr('href','index-gallery.html#ClientsBack')
		}
	})

	$('.table-slot').click(function() {
		if($(this).hasClass('block-hours')) {
			$(this).off('click')
		}
		if($(this).hasClass('clients-mode')) {
			if(event.target.closest('.NA-btn')) {
				$('.modal-details').removeClass('active')
				return
			}
			if(event.target.closest('.ask-feedback')) {
				$('.modal-details').removeClass('active')
				return
			}
			$('.modal-details').addClass('clients-mode')
			$('.clients-mode .NA-btn').addClass('swap')
		}
		$('.add-note').removeClass('active')
		$('.modal').addClass('visible')
		$('.modal-details__head .click-item').removeClass('active')
		$('.modal-details__create-note').removeClass('visible')
		$('.modal-details').addClass('active')
		$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		$('.steps-item').removeClass('in-view').eq(0).addClass('in-view')

		if ($(window).width() < 768) {
			$('body').addClass('no-scroll')
		}

	})




	// buttons next prev

	$('.close-button').click(function() {
		setTimeout(function() { 
				$('.modal').removeClass('visible') 
		}, 200);
		$('.modal-block').removeClass('active')	
		if ($(window).width() < 768) {
			$('body').removeClass('no-scroll')

		} 
	})
	$(document).on("keyup", function (e) { 
	  if (e.keyCode === 27) { 
	    $('.modal').removeClass('visible')
			$('.modal-block').removeClass('active')	
			$('.filter-calendar-buttons').removeClass('active')
			$('.filter-container').removeClass('active')
			$('.qs-datepicker-container').addClass('qs-hidden')
			
	  }
	});
	$('.NA-back-button').click(function() {
		$('.modal-new-appt').removeClass('active')
		setTimeout(function() { 
				$('.modal').removeClass('visible') 
		}, 200);

	})
	
	// CSS preloader
	window.setTimeout(function() {
        $('.preloader').addClass('hidden') 
	}, 300)
	
	

	$('.back-button').click(function() {
		$('.edit-logo').removeClass('edit')
		$('.modal-details__create-note').removeClass('visible')
		if ($(window).width() < 768) {
			$('body').removeClass('no-scroll')

		}

	
		// CLOSE	MODAL
  
		if($('.home__block').hasClass('in-view')) {
	
			setTimeout(function() { 
				$('.modal').removeClass('visible') 
			}, 200);

			$('.modal-block').removeClass('active')	
			$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
			$('.modal-details__head .click-item').removeClass('active')
		}
		// CLOSE	MODAL END


		// RESCHEDULE	MODAL
		if ($('.reschedule-block--step4').hasClass('in-view')) {
			$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
		}
		if ($('.reschedule-block--step1').hasClass('in-view') && $('.reschedule-block').hasClass('in-view') ) {
					$('.modal-details__head .click-item').removeClass('active')
					
					$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')
					return
			}

		if ($('.reschedule-block').hasClass('in-view')) {
			$('.step-item.in-view').prev().addClass('in-view').siblings().removeClass('in-view')
		}
		if (!$('.reschedule-block').hasClass('in-view')) {
			$('.info__wrapper__block').removeClass('in-view').eq(0).addClass('in-view')	
			$('.modal-details__head .click-item').removeClass('active')
		}
		
	})




	//datepicker
	$(document).on("click",".qs-square", function(){
	    $('#open-calendar').removeClass('active')
	});
	var checkin = document.querySelectorAll('.checkin');
	

	// const picker = datepicker('#checkin', {
	// 	  // Event callbacks.
	// 	  onSelect: instance => {
	// 	    $('#checkoff').next().removeClass('qs-hidden')
	// 	  }
	// 	})
	// checkoff.forEach(function(el) {
	// 	    datepicker(el)
	// })
	checkin.forEach(function(el) {
		    datepicker(el)
	})

	const picker2 = datepicker('#checkin3', {
		  onShow: instance => {
		    $('.arrow-span').addClass('active')
		  },
		  onHide: instance => {
		    $('.arrow-span').removeClass('active')
		  }
	})
	$('#checkin3').next().removeClass('qs-hidden')


	$('.multiple-on-off').click(function(){
		$(this).toggleClass('multiple')
		$('.label-container__version').eq(0).toggleClass('active').siblings().toggleClass('active')
	})

	$('.timepicker-12-hr').wickedpicker();
	$(".timepicker-12-hr").focus(function(){
		var obj = $(this);
		$('.wickedpicker').each(function(){
			if($(this) != obj) {
			$(this).css({'display': 'none'});
			}
		});
	});
            
	// modals
	$('.add-note').click(function() {
		$('.modal-details__create-note').addClass('visible')
		if($('.modal-details__create-note').hasClass('visible')) {
			$(this).addClass('active')
		}

		// general
		if($(this).hasClass('add-note-general')) {
			$('.modal-details__create-note').removeClass('cancel-mode').removeClass('not-appeared-mode').addClass('clients-mode')
		}

		// clients-mode
		if( mainText == 'Clients') {
			$('.modal-details__create-note').addClass('clients-mode')
		}

		// cancel mode
		if ($(this).hasClass('cancel-mode')) {
			$('.add-note-general').removeClass('active')
			$('.modal-details__create-note').addClass('cancel-mode').removeClass('not-appeared-mode').removeClass('clients-mode')
		}

		// not appeared mode
		if ($(this).hasClass('not-appeared-mode')) {
			$('.add-note-general').removeClass('active')
			$('.modal-details__create-note').addClass('not-appeared-mode').removeClass('cancel-mode').removeClass('clients-mode')
		}

	})

	$('.modal-calendar-appt .timing li').click( function() {
		$('.modal-calendar-appt').removeClass('active')
		$('.modal-details').addClass('active')

	})

	$('.modal-details__buttons span').click(function() {
		$('.modal-details__create-note').removeClass('visible')
		$('.add-note-general').removeClass('active')
		if(!$('.modal-details__create-note').hasClass('visible')) {
			$(this).addClass('active')
		} else {
			$(this).removeClass('active')
		}
	})

	$('.modal-details__head .click-item').click(function() {
	    $('.info__wrapper__block').removeClass('in-view').eq($(this).attr('data-index')).addClass('in-view');
		let that = this
		// if (!$(that).parents('.slick-slide').hasClass('slick-active')) {
		if($(window).width() < 768) {
			$('.modal-details__head .click-item').removeClass('active')
			$(this).addClass('active')
		}
		if($(this).attr('data-index') == 4) {
			$('.info__name').addClass('hidden')
		} else {
			$('.info__name').removeClass('hidden')	
		}

		// }
	});

	$('.calendarWrapper li').click(function() {
		$('.calendarWrapper li').removeClass('active')
		$(this).addClass('active')
	})
	$('.nextArrow').click(function() {
		$('.globalCalendar.visible').next().addClass('visible').siblings().removeClass('visible')
		if($('.globalCalendar:not(.visible)').length == 11) {
			$('.globalCalendar').eq(0).addClass('visible')
		}

	})
	$('.prevArrow').click(function() {
		$('.globalCalendar.visible').prev().addClass('visible').siblings().removeClass('visible')
		if($('.globalCalendar').eq(0).hasClass('visible')) {
			$('.globalCalendar').removeClass('visible')
			$('.globalCalendar').eq(10).addClass('visible')
		}

	})

	$('.next-step').click(function(e) {
		$(this).parents('.step-item').removeClass('in-view').next().addClass('in-view')
	})
	$('.form .click-item').click(function(){
		if ($(this).hasClass('active')) {
			$('.reschedule-block--step2 .next-step').removeClass('disabled')
		}
	})

	$('.step-textarea').on('input', function () {
 	    if ( $(this).val().length > 0 ) {
 	    	$('.next-step').removeClass('disabled')
 	    } else
 	    	$('.next-step').addClass('disabled')	
	});

	$('.prev-step').click(function(e) {
		$(this).parents('.step-item').removeClass('in-view').prev().addClass('in-view')
	})
		// SIMULATIN CLICKS FULL CALLENDAR
	$('.calendar-nav').click(function(){
		if(!$('.global-list-button').hasClass('active')) {
			if ($(this).hasClass('day-button')) {
				$('.day-button').addClass("disabled");
				$('.fc-timeGridDay-button').click()
				$(".fc-daygrid-body-natural").prepend(
          '<ul class="doctorsDay"><li><h2>Dr. med. Syd Barrett</h2></li><li><h2>Dr. med. David Jon Gilmour</h2></li><li><h2>Dr. med. Dan Iselin</h2></li></ul>'
        );
			}
			if ($(this).hasClass('week-button')) {
				$(".day-button").removeClass("disabled")
				$('.doctorsDay').remove()
				$( '.fc-timeGridWeek-button' ).click ()
			}
			if ($(this).hasClass('month-button')) {
				$( '.fc-dayGridMonth-button' ).click ()
			}
			if ($(this).hasClass('TWM__arrow--prev')) {
				$( '.fc-prev-button' ).click ()
			}
			if ($(this).hasClass('TWM__arrow--next')) {
				$( '.fc-next-button' ).click ()
			}
		}
	})


	// CLICK ON MONTH CALENDAR / SETUP DATA / OPEN MODAL
	$('.update-date').click(function() {
		var that = $(this)
		if (!$('.flex-table__days').hasClass('in-view')) {
			
			var currentDay = $('.fc-col-header-cell-cushion').text()
			var dataAttr = $('.fc-col-header-cell-cushion').parents('.fc-col-header-cell').attr('data-date')
			var month = dataAttr.toString()[5] + dataAttr.toString()[6]
			var day = dataAttr.toString()[8] + dataAttr.toString()[9]
			var monthNames = ["", "January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"
			];
			// delete 0 in first digit
			if (month.charAt(0) == 0) {
				var month = month.substring(1)	
			}
			if (day.charAt(0) == 0) {
				var day = day.substring(1)	
			}
			// WEEK MODE
			if (that.hasClass('week-button') && that.hasClass('update-date')  ) {
				if ($('.fc-timegrid').hasClass('fc-timeGridWeek-view')) {
				
					$('.fc-timeGridWeek-view .fc-col-header-cell-cushion').each(function() {
						var dataAttrThis = $(this).parents('.fc-col-header-cell').attr('data-date')
						console.log(dataAttrThis)
						var currentDayThis = $(this).text().substring(0, 3)
						if (currentDayThis == 'Mon') {
							currentDayThis = 'Monday'
						}
						if (currentDayThis == 'Tue') {
							currentDayThis = 'Tuesday'
						}
						if (currentDayThis == 'Wed') {
							currentDayThis = 'Wednesday'
						}
						if (currentDayThis == 'Thu') {
							currentDayThis = 'Thursday'
						}
						if (currentDayThis == 'Fri') {
							currentDayThis = 'Friday'
						}
						if (currentDayThis == 'Sat') {
							currentDayThis = 'Saturday'
						}
						if (currentDayThis == 'Sun') {
							currentDayThis = 'Sunday'
						}
						console.log(currentDayThis)
						var dayThis = dataAttrThis.toString()[8] + dataAttrThis.toString()[9]
						var clickedDataThis = currentDayThis + ', ' + monthNames[month] + ' ' + dayThis
						console.log(clickedDataThis)
						$(this).text(clickedDataThis)
					})
				} 
			}
			// DAY MODE
			if (that.hasClass('day-button') && that.hasClass('update-date')) {

				currentDayDay = currentDay.substring(0, 3)
				if (currentDayDay == 'Mon') {
					currentDayDay = 'Monday'
				}
				if (currentDayDay == 'Tue') {
					currentDayDay = 'Tuesday'
				}
				if (currentDayDay == 'Wed') {
					currentDayDay = 'Wednesday'
				}
				if (currentDayDay == 'Thu') {
					currentDayDay = 'Thursday'
				}
				if (currentDayDay == 'Fri') {
					currentDayDay = 'Friday'
				}
				if (currentDayDay == 'Sat') {
					currentDayDay = 'Saturday'
				}
				if (currentDayDay == 'Sun') {
					currentDayDay = 'Sunday'
				}
				var clickedData = currentDayDay + ',' + ' ' + monthNames[month] + ' ' + day 
				console.log(currentDayDay + 'OK' )

				
				$('.fc-col-header-cell-cushion').empty().text(clickedData)
			}
			
		}

	})
	$(document).on('click', '.fc-daygrid-day', function(){
		var dataAttr = $(this).attr('data-date')
		var year = dataAttr.toString()[0] + dataAttr.toString()[1] + dataAttr.toString()[2] + dataAttr.toString()[3]
		var month = dataAttr.toString()[5] + dataAttr.toString()[6]
		var day = dataAttr.toString()[8] + dataAttr.toString()[9]
		var monthNames = ["", "January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
		];

		if (month.charAt(0) == 0) {
			var month = month.substring(1)	
		}
		if (day.charAt(0) == 0) {
			var day = day.substring(1)	
		}

		var clickedData = day + ' ' + monthNames[month] + ' ' + year

		$('.calendar-date-click .data').html(clickedData)
		$('.modal').addClass('visible')
		$('.modal-calendar-appt').addClass('active')

	})

	$(document).on('click', '.fc-event-main', function () {
		console.log('asdasd')
		$(".modal").addClass("visible");
		$(".modal-details").addClass("active");
	})


	$('.browse-files').click(function() {
		$(".upload").click();
	})



	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				$('#newImgGallery').attr('src', e.target.result);
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	}
	function readURL2(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			
			reader.onload = function (e) {
				$('#newImg').attr('src', e.target.result);
			}
			
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#addImgGallery").change(function(){
		readURL(this);
		$(this).parent().addClass('added')
	});
	$("#imgInp").change(function(){
		readURL2(this);
	});

	// MEDIA JS


	$('.side-bar__list .click-item').click(function() {
		$('.page__left-side').removeClass('active')
		$('.page__left-side').css("transition", "0s")
		$('.side-bar__hamburger span').toggleClass('active')
	})


	function throttle(cb, interval) {
		var now = Date.now();
		return function() {
		if ((now + interval - Date.now()) < 0) {
			cb();
			now = Date.now();
		}
		}
	}

	var lastScrollTop = 0;
	function scrollFunction() {
		var currentScrollTop = $(window).scrollTop();
		if (currentScrollTop > 200 && currentScrollTop > lastScrollTop){	
			$('.content-wrapper__header').addClass('hidden')
		} else {
		$('.content-wrapper__header').removeClass('hidden')
		}
		lastScrollTop = currentScrollTop;
	}

	window.onscroll = throttle(scrollFunction, 500);

	//VANILLA JAVASCRIPT DRAG AND DROP

	let file;

	const dragArea = document.querySelector('.info__photos__drag-and-drop')

	dragArea.addEventListener("dragover", (event)=> {
		event.preventDefault();
	})

	dragArea.addEventListener("dragleave", ()=> {
	})

	dragArea.addEventListener("drop", (event)=> {
		event.preventDefault();
		file = event.dataTransfer.files[0]
		let fileType = file.type
		let validExtensions = ['image/png', 'image/jpg']
		var fileReader = new FileReader();

		fileReader.onload = ()=> {
			let fileURL = fileReader.result
			document.getElementById('newImg').setAttribute('src', fileURL)
			// let imgTag = `<img src="${fileURL}" alt="">`
			// dragArea.innerHTML = imgTag
		}


		if (fileReader.readAsDataURL) {
			fileReader.readAsDataURL(file);
		} else if (fr.readAsDataurl) {
			fileReader.readAsDataurl(file);
		}
	})



	// DATA TABLE

	$(document).ready(function() {
	
	
	
	var table = $('#data-table').DataTable({ 
			
		});//End of create main table

	
	$('#example tbody').on( 'click', 'tr', function () {
	
		alert(table.row( this ).data()[0]);

	} );
	});


})