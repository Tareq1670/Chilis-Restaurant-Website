let menu = document.querySelector(".menu_icon");
let navber = document.querySelector(".navber");

menu.onclick = () =>{
  menu.classList.toggle("move");
  navber.classList.toggle("open_menu");
}

// Close Menu On Scrole
window.onscroll= () =>{
  menu.classList.remove("move");
  navber.classList.remove("open_menu");
}

// ScrollReveal
const animate = ScrollReveal({
  origin:"top",
  distance:"60px",
  duration:"2500",
  delay: "400",
});

animate.reveal(".home_text,.t_box",{origin:"left"});
animate.reveal(".home_image,.footer_box",{origin:"right"});
animate.reveal("header,.features_box,.feature_menu,.item_box,.m_item_box,.newsletter",{interval:100});