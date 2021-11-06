// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	$(".FAQ-section ul li").click(function () {
		$(this).find('.rotate').toggleClass("active");
		$(this).find(".animated").slideToggle(300)			
	});

	
	var cookies = function () {
		$('.cookies').addClass('active')
	}
	setTimeout(cookies, 2000)
	$('#cookie-btn').click(function () {
		$('.cookies').removeClass('active')
	})

})
