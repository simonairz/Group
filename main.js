
const menuBtnImg = document.getElementById("menu-button-icon");
const nav = document.getElementById("nav-menu-open");

nav.style.display = "none";

function toggleMenu(){
    const srcStr = menuBtnImg.src;
    if(srcStr.endsWith("menu_icon_google_icons.png")){
        nav.style.display = "initial";
        menuBtnImg.src = "./img/exit_icon_google_icons.png";
    }
    else if (srcStr.endsWith("exit_icon_google_icons.png")){
        nav.style.display = "none";
        menuBtnImg.src = "./img/menu_icon_google_icons.png";
    }
}
menuBtnImg.addEventListener("click", toggleMenu);

