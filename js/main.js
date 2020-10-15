
var a = "", b = "", res = "", nextOperand = false, operandSelected = "";

function number(val) {
    if (!nextOperand) {
        a += val;
        document.getElementById("result").innerHTML = a;
    } else {
        b += val;
        document.getElementById("result").innerHTML = b;
    }
}

function calc() {
    if (a == "") {
        return;
    }
    else if (b == "") {
        res += a;
    }

    switch (operandSelected) {

        case "+": res = parseInt(a) + parseInt(b);
            break;

        case "-": res = parseInt(a) - parseInt(b);
            break;

        case "*": res = parseInt(a) * parseInt(b);
            break;

        case "/": res = parseInt(a) / parseInt(b);
            break;

        default:
            res = "";
            break;
    }
    // alert("result--"+res);
    document.getElementById("result").innerHTML = a + " " + operandSelected + " " + b + " = " + res
    operandSelected = "";
    nextOperand = false;
}

function operator(op) {
    if (op == "=") {
        calc();
        clear_selection();
        return;
    }

    if ((op != "") && !(nextOperand)) {
        operandSelected += op;
        nextOperand = true;
    } else {
        alert("Only two numbers are supported for now");
        clear_selection()
    }
}

function clear_selection() {
    a = "";
    b = "";
    res = "";
    operandSelected = "";
    nextOperand = false;
}

