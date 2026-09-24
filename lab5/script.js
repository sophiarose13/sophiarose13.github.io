let playerHealth = 1000;
const withdrawAmount = 30;

function withdraw() {
    playerHealth = playerHealth - withdrawAmount; 

    const healthText = document.getElementById("money-display");
    const statusText = document.getElementById("status-message");

   
    if(playerHealth > 0)
    {
        healthText.innerText = playerHealth;
        statusText.innerText = "You've been hit!";
    }
    else
    {
        healthText.innerText = 0;
        statusText.innerText = "Game Over!";
        statusText.style.color = "#f53748";
        statusText.style.fontWeight = "bold";

        document.body.style.backgroundColor = "#5a1a1a";
        
        document.querySelector("button").disabled =true;
        document.querySelector("button").innerText = "Dead";
    }
}

function deposit() {
    
}