let menuicon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuicon.addEventListener("click", show);

function show(){
    menuicon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav ul li a");




window.addEventListener("scroll", liveScrolling);


 function liveScrolling  ()  {
    let current = "";
    let scrollY = window.scrollY;

    sections.forEach(section => {
        let sectionTop = section.offsetTop -100;
        let sectionHeight = section.offsetHeight;

        console.log("ScrollY: "+ scrollY);
        console.log("sectionTop: "+ sectionTop);
        console.log("sectionHeight: "+ sectionHeight);

        if(scrollY >= sectionTop && scrollY <= (sectionTop+sectionHeight)){
            current = section.getAttribute("id");
        }


        navLinks.forEach(link => {
            link.classList.remove("active");
            if(link.classList.contains(current)){
                link.classList.add("active");
            }
        })
        

    })


}


        let header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 100);

        menuicon.classList.remove("bx-x");
        navbar.classList.remove("active");

    // })

    
// }

// Scroll reveal

ScrollReveal({
    //  reset: true,
     distance: "80px",
     duration:2000,
     delay:200
     });

     ScrollReveal().reveal('.home-content, .heading',  { origin: 'top' });
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',  { origin: 'bottom' });
     ScrollReveal().reveal('.home-content h1, .about-img',  { origin: 'left' });
     ScrollReveal().reveal('.home-content p, .about-content',  { origin: 'right' });
