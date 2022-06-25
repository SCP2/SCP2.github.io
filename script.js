// const hTopic1 = document.getElementById('');

const hTopics = document.querySelectorAll('.topics');
const hTopicsLine = document.querySelectorAll('.topics-underline');

var gCurrTopic = document.getElementById("callme1");
var gCurrTopicLine = document.getElementById("cm1u");


hTopics.forEach((ht)=>{
    ht.addEventListener('mouseenter', function(){
    this.classList.add('active');
    currLineID = "cm" + this.id.substr(6, 1) + "u";
    document.getElementById(currLineID).classList.add('active');
});

ht.addEventListener('mouseleave', function(){
    if(ht!=gCurrTopic){
    this.classList.remove('active');
    currLineID = "cm" + this.id.substr(6, 1) + "u";
    document.getElementById(currLineID).classList.remove('active');
}});
});
function changeTopic(args) {
  
    gCurrTopic.classList.remove('active');
    gCurrTopicLine.classList.remove('active');
    
    currLineID = "cm" + args.substr(6, 1) + "u";
    let currTopic = document.getElementById(args);
    let currLine= document.getElementById(currLineID);
    gCurrTopic = currTopic;
    gCurrTopicLine = currLine;
    currTopic.classList.add('active');
    currLine.classList.add('active');
}



const wAInfo = document.querySelectorAll('.wa-info');
wAInfo.forEach((wai)=>{
    wai.addEventListener('mouseenter', function(){
        this.classList.add('active');
        waiLogo = wai.querySelector('.wa-logo');
        // waiUl = wai.querySelector('.wa-underline');
        waiLogo.classList.add('active');
        // waiUl.classList.add('active');
    });
});
    
wAInfo.forEach((wai)=>{
    wai.addEventListener('mouseleave', function(){
        this.classList.remove('active');
        waiLogo = wai.querySelector('.wa-logo');
        // waiUl = wai.querySelector('.wa-underline');
        waiLogo.classList.remove('active');
        // waiUl.classList.remove('active');
    });
});
 
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((sc)=>{
    sc.addEventListener('mouseenter', function(){
        this.classList.add('active');
        scLogo = sc.querySelector('.card-logo');
        scLogo.classList.add('active');
        scTitle = sc.querySelector('.card-title');
        scTitle.classList.add('active');
        sctext = sc.querySelector('.card-text');
        sctext.classList.add('active');
    });
});
serviceCards.forEach((sc)=>{
    sc.addEventListener('mouseleave', function(){
        this.classList.remove('active');
        scLogo = sc.querySelector('.card-logo');
        scLogo.classList.remove('active');
        scTitle = sc.querySelector('.card-title');
        scTitle.classList.remove('active');
        sctext = sc.querySelector('.card-text');
        sctext.classList.remove('active');
    });
});
// слайдер
function ToggleHMenu(){
    
    let hMenu = document.querySelector('.h-mobile-menu');
    if(hMenu.classList.contains('active')){
    hMenu.classList.remove('active');  
    }
    else{
        hMenu.classList.add('active');  
    }
}


$("#callme1").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".preview").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme2").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($("#uslugi").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme3").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".work-areas-container").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme4").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".leave-request-container").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme5").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".equipment-container").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#callme6").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".upper-footer").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});


/// мобила 
$("#mcallme1").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".preview").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#mcallme2").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($("#uslugi").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#mcallme3").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".work-areas-container").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#mcallme4").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".leave-request-container").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#mcallme5").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".equipment-container").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});
$("#mcallme6").click(function() { // ID откуда кливаем
    $('html, body').animate({
        scrollTop: ($(".upper-footer").offset().top - 100)  // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
});


/// sections 

var sections = $('.sections')
  , nav = $('.topic-container')
  , nav_height = 100;
    // unline = $('.topics-underline');

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('.topics').removeClass('active');
      nav.find('.topics-underline').removeClass('active');
    //   sections.removeClass('active');
      
    //   $(this).addClass('active');
    // 

    // nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      nav.find('div[id="callme'+$(this).attr('id').substr(3,1)+'"]').addClass('active');
      nav.find('div[id="cm'+$(this).attr('id').substr(3,1)+'u"]').addClass('active');
    //   nav.find('id="callme'+$(this).attr('id').substr(3,1)+'"').addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});