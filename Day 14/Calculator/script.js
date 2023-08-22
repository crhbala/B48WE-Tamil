const container = document.createElement('div');
container.id = 'container';
    const Calculator = document.createElement('div');
    Calculator.id = 'Calculator';
 
    
    container.appendChild(Calculator);
document.body.appendChild(container);

const inputBox = document.createElement('input');
inputBox.id = 'inputBox';
inputBox.placeholder = '0';

Calculator.appendChild(inputBox);
 const element = ['Ac','DEL', '%', '/','7', '8', '9', '*','4','5', '6', '-','1', '2','3', '+','00', '0', '.', '=']
    for (let i = 0; i < 20; i++) {
        const button = document.createElement('button');
        button.classList = `button operator${i + 1}`;
        button.textContent = `${element[i]}`;

    Calculator.appendChild(button);
}
let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == 'Ac') {
            string = "";
            input.value = string;
        }
        else if (e.target. innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


 