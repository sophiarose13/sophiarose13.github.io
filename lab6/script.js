const mainHeader = document.getElementById("main-header"); 
const mainText = document.getElementById("main-text");

const button1 = document.getElementById("button1"); 
const button2 = document.getElementById("button2"); 
const button3 = document.getElementById("button3"); 
const button4 = document.getElementById("button4");

button1.addEventListener("click", 
    () => { mainHeader.textContent = "What We Do"; 
        mainText.textContent = "Here is information about what we do."; });

button2.addEventListener("click",
     () => { mainHeader.textContent = "Our Partners"; 
        mainText.textContent = "These are our partners."; });

button3.addEventListener("click", 
    () => { mainHeader.textContent = "Volunteer Programs"; 
        mainText.textContent = "Here is where you can sign up to volunteer."; });

button4.addEventListener("click", 
    () => { mainHeader.textContent = "Donate Here";
         mainText.textContent = "Here is where you can donate to our cause."; });