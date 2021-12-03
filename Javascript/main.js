/* Script for Hamburger button. Adds a class "Toggled" to the menu bar when toggled.
Removes "Toggled" from menu bar when closed down and adds "Toggled" to Hamburger Button. */
const Hamburger_btn = document.getElementById("Hamburger-Button");
const Navigation = document.getElementById("Navigation");
const Lines = document.getElementsByClassName("Toggle-Hamburger");
function EnableNavigation(){
    // If else statement checks to see where the "Toggle" class is located, or if there is a "Toggled" class at all.
    if (Hamburger_btn.classList.contains("Toggled") || !(Hamburger_btn.classList.contains("Toggled") || Navigation.classList.contains("Toggled"))) {
        Navigation.classList.add("Toggled");
        Hamburger_btn.classList.remove("Toggled");
        // Changes color of Hamburger menu to yellow when menu bar is toggled on.
        for (let line of Lines) {
            line.setAttribute("style", "background-color: rgb(255, 196, 0)"); 
        }   
    }
    else {
        Navigation.classList.remove("Toggled");
        Hamburger_btn.classList.add("Toggled");
        // Changes color of Hamburger menu to white when menu bar is toggled off.
        for (let line of Lines) {
            line.setAttribute("style", "background-color: white");
        }      
    }
}
// When Hamburger button is clicked, activates EnableNavigation function.
Hamburger_btn.addEventListener('click', EnableNavigation);

/* Script for thank you message after messages are sent. An alert will pop up to thank the user, and a line of message will appear
at the bottom of the "Send Message" button to thank the sender. */
const Submit_btn = document.getElementById("submit");
function Thanks() {
    if ((document.getElementById("form").checkValidity())) {
        event.preventDefault();
        let line = document.createElement("p");
        let sent = document.createTextNode("Message has been sent! ");
        let name = document.getElementById("name").value;
        let thanks_name = document.createTextNode("Thank you, " + name + "!");
        // Creates statement to appear on webpage.
        line.appendChild(sent);
        line.appendChild(thanks_name);
        line.classList.add("Thanks-Message")  
        // Checks if sender has sent any messages yet. 
        if (!(document.getElementById("form").classList.contains("sent"))) {
            document.getElementById("form").appendChild(line);
            document.getElementById("form").classList.add("sent")
        }
        // If sender is sending a second message, sentence changes to "Another message".
        else {
            document.getElementsByClassName("Thanks-Message")[0].innerHTML = "Another message has been sent! Thank you, " + name + "!";
        }
        // Alerts user that a message is sent. The date and time that the message was sent will also be displayed.
        let date = new Date();        
        alert("Message sent! Thank you for your message!\n\nMessage sent on: " + date);
    }  
}
// If submit button is clicked, activates Thanks function.
Submit_btn.addEventListener('click', Thanks);