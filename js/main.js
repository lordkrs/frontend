const app = Vue.createApp({
    data(){
        return {
            operand1        : "",
            operand2        : "",
            result          : "",
            nextOperand     : false,
            operandSelected : "",
            appName         : "Basic Calculator",
            logoInfo        : { path : "../res/calculator.svg", alt : "Logo not found"},
            number0         : { path : "../res/0.svg", alt : "Number0.svg not found"},
            number1         : { path : "../res/1.svg", alt : "Number1.svg not found"},
            number2         : { path : "../res/2.svg", alt : "Number2.svg not found"},
            number3         : { path : "../res/3.svg", alt : "Number3.svg not found"},
            number4         : { path : "../res/4.svg", alt : "Number4.svg not found"},
            number5         : { path : "../res/5.svg", alt : "Number5.svg not found"},
            number6         : { path : "../res/6.svg", alt : "Number6.svg not found"},
            number7         : { path : "../res/7.svg", alt : "Number7.svg not found"},
            number8         : { path : "../res/8.svg", alt : "Number8.svg not found"},
            number9         : { path : "../res/9.svg", alt : "Number9.svg not found"},
            plus            : { path : "../res/plus.svg", alt : "plus.svg not found"},
            minus           : { path : "../res/minus.svg", alt : "minus.svg not found"},
            multiply        : { path : "../res/multiply.svg", alt : "multiply.svg not found"},
            divide          : { path : "../res/divide.svg", alt : "divide.svg not found"},
            clear           : { path : "../res/clear.svg", alt : "clear.svg not found"},
            equal           : { path : "../res/equal.svg", alt : "equal.svg not found"}
        }
    },
    methods: {
        number(val) {
            if (!this.nextOperand) {
                this.operand1 += val;
                this.result = this.operand1;
            } else {
                this.operand2 += val;
                this.result = this.operand2;
            }
        },
        
        calc() {
            if (this.operand1 == "") {
                return;
            }
            else if (this.operand2 == "") {
                this.result += this.operand1;
            }
        
            switch (this.operandSelected) {
        
                case "+": this.result = parseInt(this.operand1) + parseInt(this.operand2);
                    break;
        
                case "-": this.result = parseInt(this.operand1) - parseInt(this.operand2);
                    break;
        
                case "*": this.result = parseInt(this.operand1) * parseInt(this.operand2);
                    break;
        
                case "/": this.result = parseInt(this.operand1) / parseInt(this.operand2);
                    break;
        
                default:
                    this.result = "";
                    break;
            }
            // alert("result--"+res);
            this.result = this.operand1 + " " + this.operandSelected + " " + this.operand2 + " = " + this.result
            this.operandSelected = "";
            this.nextOperand = false;
        },
        
        operator(op) {
            if (op == "=") {
                this.calc();
                this.clear_selection(false);
                return
            }
        
            if ((op != "") && !(this.nextOperand)) {
                this.operandSelected += op;
                this.nextOperand = true;
            } else {
                alert("Only two numbers are supported for now");
                this.clear_selection(true)
            }
        },
        
        clear_selection(clear_result) {
            this.operand1 = "";
            this.operand2 = "";
            if (clear_result){
                this.result = "";
            }
            
            this.operandSelected = "";
            this.nextOperand = false;
        }
        
    }
})
