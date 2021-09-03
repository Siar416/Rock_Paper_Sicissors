function getPreviousValue() {
    return document.getElementById('previous-value').innerText;
}

function printPreviousValue(num) {
    document.getElementById('previous-value').innerText = num;
}

function getCurrentValue() {
    return document.getElementById('current-value').innerText;
}

function printCurrentValue(num) {
    if (num == '') {
        document.getElementById('current-value').innerText=num;
    } else {
    document.getElementById('current-value').innerText = getFormattedNumber(num);
    }
}

function getFormattedNumber(num) {
    if(num == '-') {
        return '';
    }
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
}

function reverseNumberFormate(num) {
    return Number(num.replace(/,/g,''));
  }


let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function() {
        let output = reverseNumberFormate(getCurrentValue());
        if(output !=NaN) {
        output = output+this.id;
        printCurrentValue(output);
        }
    });
}


let operation = document.getElementsByClassName('operation');
for (let i = 0; i < operation.length; i++) {
    operation[i].addEventListener('click', function() {
        if(this.id === 'clear') {
            let output = reverseNumberFormate(getCurrentValue()).toString();
            if(output) {
                output = output.substr(0, output.length-1);
                printCurrentValue(output);
            }
        } else if(this.id === 'all-clear') {
            printPreviousValue('');
            printCurrentValue('');
        } else {
            let output = getCurrentValue();
            let history = getPreviousValue();
            if(output=='' && history!='') {
                if(isNaN(history)[history.length-1]) {
                history=history.substring(0,history.length-1);
            }
        }
            if(output != '' || history != '') {
                output = output==''? output:reverseNumberFormate(output);
                history = history + output;
                if(this.id === '=') {
                    let result = eval(history);
                    printCurrentValue(result);
                    printPreviousValue('');
                } else {
                    history = history+this.id;
                    printPreviousValue(history);
                    printCurrentValue('');
                }
            }
        }
    });
}
