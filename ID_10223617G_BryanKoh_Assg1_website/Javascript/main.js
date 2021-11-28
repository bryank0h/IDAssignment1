const Hamburger_btn = document.getElementById("Hamburger-Button");
const Navigation = document.getElementById("Navigation");
const Lines = document.getElementsByClassName("Toggle-Hamburger");

function EnableNavigation(){
    if (Hamburger_btn.classList.contains("Toggled") || !(Hamburger_btn.classList.contains("Toggled") || Navigation.classList.contains("Toggled"))) {
        Navigation.classList.add("Toggled");
        Hamburger_btn.classList.remove("Toggled");
        for (let line of Lines) {
            line.setAttribute("style", "background-color: rgb(255, 196, 0)");
        }   
    }
    else {
        Navigation.classList.remove("Toggled");
        Hamburger_btn.classList.add("Toggled");
        for (let line of Lines) {
            line.setAttribute("style", "background-color: white");
        }      
    }
}

Hamburger_btn.addEventListener('click', EnableNavigation, false);