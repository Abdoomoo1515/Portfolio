/*=========================MENU SHOW  Y HIDDEN========================= */
const   navMenu   = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose  = document.getElementById('nav-close');

/*validate if constants exist */
if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click' , ()=>{
        navMenu.classList.remove('show-menu');
    });
}

/*============== remove menu after click on link ================== */
const navList = document.querySelectorAll(".nav__list");

    navList.forEach((e) => e.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu");
    }));

/*=================== ACCORDION SKILLS ============================= */
const   skillsContent = document.getElementsByClassName("skills__content"),
        skillsHeader = document.querySelectorAll(".skills__header");

    function skillsToggle(){
        let itemClass = this.parentNode.className;

        
        if(itemClass === 'skills__content skills__close'){
            this.parentNode.className = "skills__content skills__open";
        }
        if (itemClass === "skills__content skills__open") {
            this.parentNode.className = "skills__content skills__close";
        }
    }

skillsHeader.forEach((e) =>{

    e.addEventListener("click", skillsToggle);
});

/*==========================QUALIFICATIONS TAPS=========================== */
const   tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');
        
        tabs.forEach(tab =>{

            tab.addEventListener('click' ,()=>{

                const target =document.querySelector(tab.dataset.target);

                
                    tabContents.forEach(tabContent =>{

                        tabContent.classList.remove('qualification__active');
                        
                    });
                target.classList.add('qualification__active');

                
                tabs.forEach(tab => {

                    tab.classList.remove('qualification__active');
                });

                tab.classList.add('qualification__active');





            });
        });
/*==========================SERVICES MODAL=========================== */
const   modalViews = document.querySelectorAll('.services__modal'),
        modalBtns  = document.querySelectorAll('.services__button'),
        modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
            modalViews[modalClick].classList.add('active-modal');
        };

        modalBtns.forEach(( btn , i) =>{
            btn.addEventListener('click' ,()=>{

                modal(i);

                //modalViews[i].classList.add('active-modal');
            });

        });

        modalClose.forEach(close =>{
            close.addEventListener('click' , ()=>{
                
                modalViews.forEach(modalview =>{

                    modalview.classList.remove('active-modal');
                });
            });
        });

/*======================PORTFOLIO SWIPER===================== */
var swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,

    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*======================testimonial SWIPER===================== */
var swiperTesti = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor:true,
    spaceBetween:48,
    pagination: {
        el: ".swiper-pagination-testimonial",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        1024: {
            slidesPerView: 2,
            spaceBetween:50
        },
    }
    
});
/*=======================SCROLL SECTIONS ACTIVE LINK============== */
const sections = document.querySelectorAll('section[id]');

    function scrollActive(){
        const scrollY = window.pageYOffset;
        
        sections.forEach(current =>{

            const sectionHeight = current.offsetHeight;
            const sectionTop    =  current.offsetTop - 50;
            
            let sectionId = current.getAttribute('id');
            
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
            }else{
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');

            }

        });
    }

    window.addEventListener('scroll',scrollActive);
/*================== CHANGE BACKGROUND HEADER ===================== */
function scrollHeader(){
    const nav = document.getElementById('header');

    if(this.scrollY >= 80) nav.classList.add('scroll-header') ; else nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);


/*==================  SHOW SCROLL TOP ===================== */
function scrollToUp(){
    const scrollUP = document.getElementById('scrollup');

    if(this.scrollY >= 560) scrollUP.classList.add('show-scroll') ; else scrollUP.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollToUp);

/*===================== DARK THEME  ============================ */
const   themeButton = document.getElementById('theme-button'),
        darkTheme   = 'dark-theme',
        iconTheme   = 'uil-sun';

        //previously selected topic (if user selected before)
const   selectedTheme = localStorage.getItem('selected-theme'),
        selectedIcon  = localStorage.getItem('selected-icon');

        //we obtain the current theme 
const   getCurrentTheme = () => document.body.classList.contains('dark-theme') ? 'dark' : 'light';
const   getCurrentIcon =  () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

//we validate if the user previously choose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme) 
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

//activate / deactivate the theme manually with the button
themeButton.addEventListener('click' ,()=>{

    //add / remove the dark / icon theme 
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    //save the current theme and icon in loacl storage
    localStorage.setItem('selected-theme' , getCurrentTheme());
    localStorage.setItem('selected-icon' , getCurrentIcon());
});