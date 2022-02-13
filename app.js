//set inital count
let count = 0;

//select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//I select all the buttons are used for each, 
//I looked over those buttons values. 
//For each button, add an event listener, as I'm clicking, ans I'm using the event object and getting the current target and a class list. So getting me the classes that the item that I'm clicking - button : decrease, reset, increase
btns.forEach(function(btn) {
    btn.addEventListener("click", function(c){
        const styles = c.currentTarget.classList;
        if(styles.contains("decrease")){ 
            count--;
        }else if(styles.contains("increase")){
            count++;
        }else{
            count =0;
        }
        if (count > 0){
            value.style.color = "green";
        } else if (count < 0){
            value.style.color = "red";
        }else{
            value.style.color = "black";
        }

        value.textContent = count;
        });
});