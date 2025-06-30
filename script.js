const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const value = button.textContent;

        if( value === 'AC'){
            display.value = '';
        }
        else if ( value === '=' ){
            try{
                display.value = eval(display.value);
            } catch (error){
                display.value = 'I love U'
            }
            
        }
        else if (value === '+/-'){
            display.value = eval(display.value * -1);
        }
        else{
            display.value += value;
        }

        if (value === 'AC') {
            display.value = '';
        }
        else if (value === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'I love U';
            }
        
        }
        else if (value === 'x2') {
            if (display.value) {
                display.value = Math.pow(parseFloat(display.value), 2);
            }
        }
        else if (value === 'x3') {
            if (display.value) {
                display.value = Math.pow(parseFloat(display.value), 3);
            }
        }
        else if (value === '(' || value === ')') {
            display.value += value;
        }
        else {
            display.value += value;
        }
        
        }
        else if (value === '(' || value === '(') {
            display.value += value;
        }
        else {
            display.value += value;
        }
        } 
        else if (value === '√') {
            if (display.value) {
                display.value = Math.sqrt(parseFloat(display.value));
            }
        
        
        
        
    

    });

});
