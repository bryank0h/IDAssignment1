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

const Submit_btn = document.getElementById("submit");

function Thanks() {
    event.preventDefault();
    let line = document.createElement("p");
    let sent = document.createTextNode("Message has been sent! ");
    let name = document.getElementById("name").value;
    let thanks_name = document.createTextNode("Thank you, " + name + "!");
    line.appendChild(sent);
    line.appendChild(thanks_name);
    line.classList.add("message")   
    if (!(document.getElementById("form").classList.contains("sent"))) {
        document.getElementById("form").appendChild(line);
        document.getElementById("form").classList.add("sent")
    }
    else {
        document.getElementsByClassName("message")[0].innerHTML = "Another message has been sent! Thank you, " + name + "!";
    }
    alert("Thank you for your message!");
}

Submit_btn.addEventListener('click', Thanks);