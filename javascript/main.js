let recentScroll = 0;

document.addEventListener('scroll',function(){
    recentScroll = window.scrollY || document.documentElement.scrollTop;
    console.log(recentScroll);
});