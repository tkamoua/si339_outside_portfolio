const navSlide = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks= document.querySelectorAll('.nav-links li');
    
    const a_link = document.querySelector('.close');
    const a_link1 = document.querySelector('.close1');
    const a_link2 = document.querySelector('.close2');
    const a_link3 = document.querySelector('.close3');
    //Toggle Nav
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
    
       
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +.2 }s`;
            }
         })
        
         //Burger animation
         burger.classList.toggle('toggle');
    });
    
    a_link.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
      
       
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0s ease forwards 0s`;
            }
         })
         
         //Burger animation
         burger.classList.toggle('toggle');
    });
    a_link1.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
      
       
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0s ease forwards 0s`;
            }
         })
         navLinks.ontouchstart = (e) => {
            e.preventDefault();
        };
         //Burger animation
         burger.classList.toggle('toggle');
    });
    a_link2.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
      
       
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0s ease forwards 0s`;
            }
         })
         navLinks.ontouchstart = (e) => {
            e.preventDefault();
        };
         //Burger animation
         burger.classList.toggle('toggle');
    });
    a_link3.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('burger-active');
        
       
        
        navLinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
             link.style.animation = `navLinkFade 0s ease forwards 0s`;
            }
         })
         navLinks.ontouchstart = (e) => {
            e.preventDefault();
        };
         //Burger animation
         burger.classList.toggle('toggle');
    });
    

   
}
    
navSlide();
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      var windowHeight = .8* $(window).height();
      if($(this).scrollTop() >= windowHeight) { 
          $('.nav-links').addClass('solid');
          $('.shoppingcart-nav').addClass('solid');
      } else {
          $('.nav-links').removeClass('solid');
          $('.shoppingcart-nav').removeClass('solid');
      }
    });
});

