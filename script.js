
/*LE MENU BURGER*/


document.addEventListener("click" ,(e) => {
    if(e.target.classList.contains("work__button")) {
        togglePortflioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})


/*LE POP UP DE BASE EST EN VISIBILY HIDDEN, AU CLICK LE POPUP PREND LES PROPRIÉTÉS DE LA CLASSE OPEN DANNS LE CSS QUI REND LE POP UP VISIBLE*/ 

function togglePortflioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}
/*UNE FOIS QU'ON CLICK SUR LA CROIX QUI S'APPELLE "portfolio__pop-close"*/ 

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortflioPopup)

/*l'image de base du popup prendra sa valeur en fonction de la card qui convient*/ 

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
 
    document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".work__title").innerHTML;


    document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*==================================SHOW SIDEBAR============================*/

const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*==================================SIDEBAR SHOW============================*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-sidebar')
    })
}
/*==================================SIDEBAR HIDDEN============================*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*==================================SCROLL SECTIONS ACTIVE LINK============================*/

const sections =document.querySelectorAll('section[id');

window.addEventListener('scroll', navHighlighter);

function navHighlighter()
{
    let scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 200;
        const sectionId = current.getAttribute('id');


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }

    })
}

/*CHANGER LA COULEUR DE LA VARIABLE SKINCOLOR*/

let themeColor = document.getElementById('one');

themeColor.addEventListener('change', (e) =>{
    document.documentElement.style.setProperty('--skin-color', e.target.value)
})





//footer//
let toggle = document.querySelector(".toggle-2");
let menu = document.querySelector(".menufooter");

toggle.onclick = function () {
    menu.classList.toggle("activeli")
    
}

/*MASQUER LES BARRES DE PROGRESS TANT QU'ON A PAS SCROLL*/

const progress = document.querySelector(".skills__container");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1500){
        
        progress.style.display="flex"
    }else{
        progress.style.display="none"
    }
    
});