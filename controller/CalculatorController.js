class CalculatorController
{
    constructor()
    {
        this._display = document.querySelector("#display");
        this._displayNumberString = "";
        this._hiddenNumberString = "";
        this._operator = "";
        this._lastKeyIsNumber = false;
        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", () => this.buttonKeyPush(button.innerHTML))
        });

    
    }

    calculateFields(hiddenNumberString, operator, displayNumberString)
    {
        let stringToCalculate = hiddenNumberString + operator + displayNumberString;
        stringToCalculate = stringToCalculate.replace(/,/g, ".");
        console.log(stringToCalculate);
        let result = String(eval(stringToCalculate));
        if(result)
        {
            result = result.replace(/\./g, ",");
            this.displayNumberString = result;
        }
        else
        {
            this.displayNumberString = 0;
        }
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
                this.displayNumberString += buttonName;
                this._lastKeyIsNumber = true;
                break;

            case "+":
            case "-":
            case "÷":
            case "X":
            
                if(this._lastKeyIsNumber)
                {
                    if(this.operator != "")
                    {
                        this.calculateFields(this.hiddenNumberString, this.operator, this.displayNumberString);
                    }   
                    this.hiddenNumberString = this.displayResultString;
                }
                this.operator = buttonName;
                this.displayNumberString = "";
                this._lastKeyIsNumber = false;
                
                break;
            case "=":
                if(this.displayNumberString == "")
                {
                    this.displayNumberString = this.hiddenNumberString;
                }
                this.calculateFields(this.hiddenNumberString, this.operator, this.displayNumberString);
                this._lastKeyIsNumber = false;
                break;
            case "CE":
                this.displayNumberString = "";
                this.displayResultString = "0";
                break;
            case "C":
                this.displayNumberString = "";
                this.hiddenNumberString = "";
                this.displayResultString = "0";
                break;
            case "±":
                if(this.displayNumberString != "")
                {
                    if(this.displayNumberString.charAt(0) === "-")
                    {
                        this.displayNumberString = this.displayNumberString.substr(1);
                    }
                    else
                    {
                        this.displayNumberString = "-" + this.displayNumberString;
                    }
                }
            case ",":
                if(this.displayNumberString.indexOf(",") == -1)
                {
                    this.displayNumberString == "" ? this.displayNumberString = "0," : this.displayNumberString += ",";
                }
                break;
            default:
                throw new Error("Botão não cadastrado!");
                break;
        }
    }

    set displayNumberString(numberString)
    {
        this._displayNumberString = numberString;
        if(this._displayNumberString != "") 
        {
            this.displayResultString = this._displayNumberString;
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

    set displayResultString(text)
    {
        this._display.innerHTML = text;
    }

    get displayResultString()
    {
        return this._display.innerHTML;
    }
}