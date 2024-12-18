
function timee () {
function time (){
    const now = new Date();
    
    console.log(now.getDate());
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());
    
    const days = document.querySelector('#days')
    const hours = document.querySelector('#hours')
    const minutes = document.querySelector('#minutes')
    const seconds = document.querySelector('#seconds')
    function formatTime(raqam){
        return raqam < 10 ? '0' + raqam : raqam;
    }
    
    days.textContent = formatTime(now.getDate())
    hours.textContent = formatTime(now.getHours())
    minutes.textContent = formatTime(now.getMinutes())
    seconds.textContent = formatTime(now.getSeconds());
    }
    setInterval(time,1000)
}
timee()







function all (){

    const btnOpenTimes = document.querySelectorAll('[data-btn]'),
    times = document.querySelector('.times')
    modalClose = times.querySelector('.modal__close')
    
    function showTimes (){
        times.classList.add('show')
        times.classList.remove('hide')
        document.body.style.overflow = 'hidden'
    }
    
    function hideTimes (){
        times.classList.add('hide')
        times.classList.remove('show')
        document.body.style.overflow = ''
    }
    
    btnOpenTimes.forEach((item) =>{
        item.addEventListener('click', ()=> showTimes())
    })
    
    modalClose.addEventListener('click', ()=> hideTimes())
    
    
    times.addEventListener('click', (e) =>{
        const target = e.target
        if(target === times){
            hideTimes()
        }
    })
    
    
    document.addEventListener('keydown', (e) =>{
        if(e.code == "KeyP"){
            showTimes()
        }
    })
    
    document.addEventListener('keydown', (e) =>{
        if(e.code == "Escape"){
            hideTimes()
        }
    })
    
    }
    all()
    