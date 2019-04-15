class CalculatorController
{
    constructor()
    {
        this._display = document.querySelector("#display");
        this._displayNumberString = "";
        this._hiddenNumberString = "";
        this._operator = "";

        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", () => this.buttonKeyPush(button.innerHTML))
        });

    
    }

    calculateFields()
    {
        let stringToCalculate = this.hiddenNumberString + this.operator + this.displayNumberString;
        let result = eval(stringToCalculate);
        this.updateDisplay(result);

        return result;
    }

    updateDisplay(num)
    {
       this._display.innerHTML = num;
    }

    buttonKeyPush(buttonName)
    {
    
        switch(buttonName)
        {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                this.displayNumberString +=buttonName;
                break;

            case "+":
            case "-":
            case "÷":
            case "X":
                if(this.displayNumberString != "")
                {
                    if(this.operator == "")
                    {
                        this.hiddenNumberString = this.displayNumberString;
                    }
                    else 
                    {
                        this.hiddenNumberString = this.calculateFields();
                    }
                }
                this.operator = buttonName;
                this.displayNumberString = "";
                
                break;
            case "=":
                this.calculateFields();
                break;
            case "CE":
                this.displayNumberString = "";
                this.updateDisplay(0);
                break;
            case "C":
                this.displayNumberString = "";
                this.hiddenNumberString = "";
                this.updateDisplay(0)
            default:
                break;
        }
    }

    set displayNumberString(numberString)
    {
        this._displayNumberString = numberString;
        if(this._displayNumberString != "") 
        {
            this.updateDisplay(this._displayNumberString);
        }
    }

    get displayNumberString()
    {
        return this._displayNumberString;
    }

    set operator(buttonText)
    {
        const operatorDictionary = {
            "": "",
            "+": "+",
            "-": "-", 
            "÷": "/", 
            "X": "*"
        };

        let operator = operatorDictionary[buttonText];

        //operator !== undefined ? this._operator = operator : () => {throw new Error("Operador não cadastrado!")};
        
        if(operator !== undefined) 
        {
            this._operator = operator;
        }
        else
        {
            throw new Error("Operador não cadastrado!");
        }
    }

    get operator()
    {
        return this._operator;
    }

    set hiddenNumberString(hiddenNumberString)
    {
        this._hiddenNumberString = hiddenNumberString;
    }

    get hiddenNumberString()
    {
        return this._hiddenNumberString;
    }
}