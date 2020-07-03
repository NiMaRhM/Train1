document.querySelector('.dashboard').addEventListener ('click' , function(){
    document.querySelector('.dashboard').classList.toggle( 'active-navbar');
});

document.querySelector('.cards').addEventListener ('click' , function(){
    document.querySelector('.cards').classList.toggle( 'active-navbar');
});

document.querySelector('.stat').addEventListener ('click' , function(){
    document.querySelector('.stat').classList.toggle( 'active-navbar');
});

document.querySelector('.pay').addEventListener ('click' , function(){
    document.querySelector('.pay').classList.toggle( 'active-navbar');
});

document.querySelector('.weak').addEventListener ('click' , function(){
    document.querySelector('.weak').classList.add( 'active-date');
});

document.querySelector('.month').addEventListener ('click' , function(){
    document.querySelector('.month').classList.toggle( 'active-date');
});

document.querySelector('.year').addEventListener ('click' , function(){
    document.querySelector('.year').classList.toggle( 'active-date');
});