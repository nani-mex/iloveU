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

        

    });

});
