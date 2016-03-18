// import '../scss/style.scss'
require("!style!css!sass!../scss/style.scss");

$(function(){
    alert('Hi');
})



window.onload=scaleVideo;
window.onresize=scaleVideo;
// window.addEventListener('scroll', here, false);
// function here(){
// //    var scroll = window.pageYOffset;
//     here.innerHTML = "scrollTop:"+window.pageYOffset;
// }


function scaleVideo(){
    var video = document.getElementById('video');
    var windowWidth = document.documentElement.clientWidth;
    var windowHeight = document.documentElement.clientHeight;
    
    var videoWidth = video.offsetWidth;
    var videoHeight = video.offsetHeight;
    
    var widthScale = windowWidth / videoWidth;
    var heightScale = windowHeight / videoHeight;
    if( widthScale > heightScale){
        var scale = widthScale;
    }else{
        var scale = heightScale;
    }
    
    var scarlVideoWidth = videoWidth * scale;
    var scarlVideoHeight = videoHeight * scale; 
    
    video.width=scarlVideoWidth;
    video.height=scarlVideoHeight;
    $(".section1").css("height",scarlVideoHeight);
    // $(".contact").css("height",scarlVideoHeight);
    
    // video.loop=true;
    // video.muted=true;
}
$(document).ready(function() {
    $('#fullpage').fullpage({
        navigation: true,
        navigationPosition: 'left',
        showActiveTooltip: 'true',
        navigationTooltips: ['','','',
                                '<div>!</div>','<div>!</div>',
                                '<div>!</div>','<div>!</div>',
                                '<div>!</div>','<div>!</div>',
                                '<div>!</div>','<div>!</div>'],
        // lockAnchors: true,
        // anchors:['firstPage', 'secondPage']
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
    });
});