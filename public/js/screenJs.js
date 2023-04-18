const sections = document.querySelectorAll('section')
let vh = window.innerHeight * 0.01;


window.addEventListener('scroll', ()=>{
    const windowPosition = Math.floor(window.pageYOffset);
    sections.forEach(section =>{
    const sectionPosition = section.offsetTop;
        if(sectionPosition === windowPosition || sectionPosition-windowPosition <= 120 && sectionPosition-windowPosition >= -120){
            section.classList.add('open')
        }else{
            section.classList = '';
        }
    })
})


// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);