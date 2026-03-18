const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

let expression = "";

// Button clicks
buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if(value === "C"){
            expression = "";
            display.value = "";
        }

        else if(value === "="){
            calculate();
        }

        else{
        const lastChar = expression.slice(-1);

        if("+-*/".includes(value) && "+-*/".includes(lastChar)){
            return; // block double operators
        }

        expression += value;
        display.value = expression;
        }

    });

});


// Calculate result
function calculate(){

    try{
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    }
    catch{
        display.value = "Error";
        expression = "";
    }

}


// Keyboard input support
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if("0123456789+-*/.".includes(key)){
        expression += key;
        display.value = expression;
    }

    else if(key === "Enter"){
        calculate();
    }

    else if(key === "Backspace"){
        expression = expression.slice(0,-1);
        display.value = expression;
    }

    else if(key === "Escape"){
        expression = "";
        display.value = "";
    }

});