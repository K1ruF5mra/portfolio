window.addEventListener('scroll',function() {
    const elements= this.document.querySelectorAll('.fade-in') ;

    elements.forEach(function(element) {
        const position =element.getBoundingClientRect().top;
        const screenHeight=window.innerHeight;
        
        if(position < screenHeight - 100) {
            element.classList.add('show');
        }
    });
});