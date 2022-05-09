$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


let selectEl = document.getElementsByTagName('select');

selectEl[0].addEventListener('change', function() {
    location.href=this.value;
}); 

