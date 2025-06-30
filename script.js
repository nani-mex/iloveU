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
        else if (value === '+/-') {
            if (display.value) {
                display.value = parseFloat(display.value) * -1;
            }
        }
        else if (value === 'x²') {
            if (display.value) {
                display.value = Math.pow(parseFloat(display.value), 2);
            }
        }
        else if (value === 'x³') {
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
    else if (value === '√') {
            if (display.value) {
                display.value = Math.sqrt(parseFloat(display.value));
            }
        
        }
        else if (value === 'Emoji') {
            const emojiMap = {
                '0': '⓪',
                '1': '①',
                '2': '②',
                '3': '③',
                '4': '④',
                '5': '⑤',
                '6': '⑥',
                '7': '⑦',
                '8': '⑧',
                '9': '⑨'
            };
            
            display.value = display.value.split('').map(char => emojiMap[char] || char).join('');
        }
        else {
            display.value += value;
        }
    

    });

});
