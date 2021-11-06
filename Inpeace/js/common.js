$(function() {
    var hamburger = document.getElementById('hamburger'),
    menu = document.querySelector('.topmenu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        menu.classList.toggle('hidden');
    })
    $('.topmenu').addClass('hidden');
    $('.links').on('click', function() {
        $('.topmenu').addClass('hidden');
    })
});
var steps = $('.form__wrap > div');
var activeInd = $('.form__wrap > div.active').index();
var progress = $('.progress div');
var progressInd = $('.progress span');




$('form .next, form .back').click(function(){
    event.preventDefault()
    $('html').scrollTop(0)
    $(this).hasClass('next') ? activeInd++ : activeInd--;
    $(steps[activeInd]).addClass('active').siblings().removeClass('active');

    var currentProgress = Math.round((100 / steps.length) * (activeInd+1));

    progress.css({
        'width' : currentProgress + '%' 
    })
    progressInd.html(currentProgress + '%');
});



$('.wrapper_header').click(function() {
    var parent = $(this).parents('.container1000-right');
    $('.wrapper_header img').toggleClass('rotate');
    parent.toggleClass('active');
    $('.price').toggleClass('active');

    if ($('.container1000-right').hasClass('active')) {
        $('.wrapper_list').slideDown();
    } else  
        $('.wrapper_list').slideUp();
});

// $('.FAQ .title').click(function(){
//   $(this).find('.rotate').toggleClass('active');
//   if (!($(this).next('.FAQ .animated').hasClass('active'))) {
//     $(this).next('.FAQ .animated').slideDown(300).addClass('active')
//   } else {
//     $(this).next('.FAQ .animated').slideUp(300).removeClass('active')
//   }
  
// })
var pickers = document.querySelectorAll('.date');
pickers.forEach(function(el) {

    datepicker(el)
})




$('.calc').click(function() {
        var val = $(this).siblings('input').val();

        if ($(this).val() == 'plus') {
            val++;
        } else if(val > 0) {
            val--;
        }
        $(this).siblings('input').val(val);
    })