/*const calc = (opt) => {
    let a = document.getElementById('first').value;
    let b = document.getElementById('second').value;

    if (opt == 'add'){
        out = Number(a) + Number(b);
    }
    else if (opt == 'add'){
        out = Number(a) + Number(b);
    }
    else if (opt == 'sub'){
        out = Number(a) - Number(b);
    }
    else if (opt == 'mul'){
        out = Number(a) * Number(b);
    }
    else if (opt == 'divi'){
        out = Number(a) / Number(b);
    }
    else if (opt == 'mod'){
        out = Number(a) % Number(b);
    }
    document.getElementsByClassName('output')[0].innerText = out;
}*/
let displayScreen = document.getElementById('diplayitems');
function  display (num) {
    displayScreen.value += num;
}
function calc(){
    displayScreen.value = eval(displayScreen.value);
}
function clr(){
    displayScreen.value = displayScreen.value.slice(0,-1);
}
function allclear(){
    displayScreen.value ="";
}
