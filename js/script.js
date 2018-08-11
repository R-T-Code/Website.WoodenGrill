//_____Navigation bar hide/show on scroll_____
var lastScrollTop = 0;

function navBarHideShow (){
    var navBar = document.querySelector('.navigation');
    var currentScrollTop = window.pageYOffset;
    if (currentScrollTop > lastScrollTop){
        navBar.style.transform = 'translate(-50%, -100%)';
    } else {
        navBar.style.transform = 'translate(-50%, 0%)';
    }
    lastScrollTop = currentScrollTop;
}

//_____Header name parallax_____
function headerNamePar(){
    var headerHeight = document.querySelector('.header').offsetHeight;
    var wScroll = Math.round(window.pageYOffset);

    // Condition to stop the parallax effect when out of viewport
    if ( wScroll <= headerHeight/1.5 ){

        var headerNameArr = document.querySelectorAll('.header__name')
        var opacityIndex = (1 + wScroll * -0.001);

        if(this.window.innerWidth >= 900){
            headerNameArr[0].style.transform = 'translate(0px, ' + (wScroll / 1.6) + 'px)';
            headerNameArr[1].style.transform = 'translate(0px, ' + (wScroll / 3.1) + 'px)';
            headerNameArr[2].style.transform = 'translate(0px, ' + (wScroll / 40) + 'px)';
        }

        headerNameArr[0].style.opacity = opacityIndex;
        headerNameArr[1].style.opacity = opacityIndex; 
        headerNameArr[2].style.opacity = opacityIndex;
    }
};

//_____Story text appearing on scroll_____
function storyTextSlide(){
    var storySection = document.querySelector('.story');
    var storySectionTop = document.querySelector('.story').offsetTop;
    var storySectionHeight = document.querySelector('.story').offsetHeight;
    var storyT = document.querySelector('.story__text');
    var pageScrollTop = window.pageYOffset;

    if (pageScrollTop > (storySectionTop - storySectionHeight/1.5)) {
        storyT.style.transform = 'translate(10rem, 0rem)';
    } else {
        storyT.style.transform = 'translate(-40rem, 20rem)';
    }
}

//_____Story background changing_____
var storyBackImages = ['url(img/back1.jpg)', 'url(img/back2.jpg)', 'url(img/back3.jpg)'];
var storyBackground = document.querySelector('.story__background');
var i = 1;

setInterval(function(){
    storyBackground.style.backgroundImage = storyBackImages[i];
    i++;
    if(i == storyBackImages.length){
        i = 0;
    }
}, 5000);

//_____Drinks list effects_____
var cocktail = document.querySelectorAll('.drinks__list--cocktail');
var cocktailNameArr = document.querySelectorAll('.drinks__list--cocktail-name');
var cocktailRec = document.querySelectorAll('.drinks__list--cocktail-rec');

function functionToggle(){
    this.previousElementSibling.classList.toggle('drinks__list--cocktail-rec-active');
}
function functionRemove(){
    this.previousElementSibling.classList.remove('drinks__list--cocktail-rec-active');
}

for (var k = 0; k < cocktailNameArr.length; k++) {
    var cocktailName = cocktailNameArr[k];
    cocktailName.onclick = functionToggle;
    cocktailName.onmouseleave = functionRemove;
}

//_____How its made video play when in viewport
function videoPlayPause(){
    //_____How its made video text float
    var videoHeading = document.querySelector('.barvid__heading');
    var videoFooter = document.querySelector('.barvid__footer');
    function floatInText(){
        videoHeading.classList.add('barvid__animation-moveIn');
    }
    function showUpText(){
        videoFooter.classList.add('barvid__animation-showUp');
    }

    //_____video play/pause vars
    var currentScrollTop = window.pageYOffset;
    var videoHow = document.querySelector('.barvid');
    var videoHowMovie = document.querySelector('.barvid__video__content');
    var movieHeight = videoHowMovie.offsetHeight;
    var videoHowTop = videoHow.offsetTop;

    if (currentScrollTop > (videoHowTop - (movieHeight/2))){
        videoHowMovie.play();
        floatInText();
    } else {
        videoHowMovie.pause();
    }
    if (currentScrollTop > (videoHowTop + movieHeight/1.5)){
        videoHowMovie.pause();
    }
    if (currentScrollTop > (videoHowTop - movieHeight/3)){
        showUpText();
    };
}

//_____Staff slider_____
var leftArrow = document.querySelector('.staff__arrow-left');
var rightArrow = document.querySelector('.staff__arrow-right');
var slider = document.querySelector('.staff__slider');
var staffHeading = document.querySelector('.staff__team-name');

leftArrow.addEventListener('click', function(){
    slider.style.marginLeft = '0';
    staffHeading.innerHTML = 'Bar Team';
});
rightArrow.addEventListener('click', function(){
    slider.style.marginLeft = '-100%';
    staffHeading.innerHTML = 'Kitchen Team';
});


//_____Staff portrais popup_____
function staffPortaitsPop(){
    var currentScrollTop = window.pageYOffset;
    var staffTop = document.querySelector('.staff').offsetTop;
    var staffHeight = document.querySelector('.staff').offsetHeight / 2;
    var staff = staffTop - staffHeight;
    var staffMates = document.querySelectorAll('.staff__portrait');

    if (currentScrollTop > staff) {
        staffMates.forEach(function(item, index){
            setTimeout(function(){
                staffMates[index].style.transform = 'scale(1)';
            }, 300 * index)
        });
    }
}

//_____All events that happen on scroll_____
window.addEventListener('scroll', function(){
    navBarHideShow();
    headerNamePar();
    storyTextSlide();
    videoPlayPause();
    staffPortaitsPop();

});


