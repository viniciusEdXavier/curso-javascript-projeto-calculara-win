class CalculatorController
{
    constructor()
    {
        this._display = document.querySelector("#display");
        this._displayNumberString = "";
        this._hiddenNumberString = "";
        this._operator = "";
        this._isFinished = false;
        this._isReadyToNewNumber = true;
        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", () => this.buttonKeyPush(button.innerHTML))
        });

    
    }

    calculateFields(firstNumber, operator, secondNumber)
    {

        /*if(operator == "/" && displayNumberString == 0)
        {
           return "Impossível dividir por zero!";
        }*/

        let stringToCalculate = firstNumber + operator + secondNumber;
        let result = String(eval(stringToCalculate));

        return result;
        
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
                
                if(this._isReadyToNewNumber)
                {
                    this.displayResultString = "";
                    this._isReadyToNewNumber = false;
                }
                if(this._isFinished)
                {
                    this.displayNumberString = "";
                    this.hiddenNumberString = "";
                    this.operator = "";
                    this._isFinished = false;
                }
                this.displayNumberString = this.displayResultString+buttonName;
                break;

            case "+":
            case "-":
            case "÷":
            case "X":
            
                if(this.operator && this.displayNumberString && !this._isFinished)
                {
                    this.displayResultString = this.calculateFields(this.hiddenNumberString, this.operator, this.displayNumberString);
                }    
                this.hiddenNumberString = this.displayResultString;
                this.displayNumberString = "";
                this.operator = buttonName;
                this._isReadyToNewNumber = true;
                this._isFinished = false;
                
                break;
            case "=":
                this.displayNumberString = this.displayNumberString || this.hiddenNumberString;
                this.displayResultString = this.calculateFields(this.hiddenNumberString, this.operator, this.displayNumberString);
                this.hiddenNumberString = this.displayResultString;
                this._isReadyToNewNumber = true;
                this._isFinished = true;

                break;
            case "CE":
                this.displayNumberString = "";
                this.displayResultString = "0";
                break;
            case "C":
                this.displayNumberString = "";
                this.hiddenNumberString = "";
                this.operator = ""
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
                    this.displayNumberString == "" ? this.displayNumberString = "0," : 
                                                     this.displayNumberString += ",";
                }
                break;
            case "%":
                this.displayNumberString = parseFloat(this.hiddenNumberString * (this.displayNumberString/100)).toString();
                break;
            case "√":
                this.displayNumberString = Math.sqrt(parseFloat(this.displayNumberString)).toString();
                break;
            case "x²":
                this.displayNumberString = parseFloat(this.displayNumberString * this.displayNumberString).toString();
                break;
            case "¹/x":
                this.displayNumberString = parseFloat(1/this.displayNumberString).toString();
                break;
            case "←":
                this.displayNumberString = this.displayNumberString.slice(0, -1);
                break;
            default:
                throw new Error("Botão não cadastrado!");
                break;
        }
    }

    set displayNumberString(numberString)
    {
        this._displayNumberString = numberString.replace(/\./g, ",");
        if(this._displayNumberString != "") 
        {
            this.displayResultString = this._displayNumberString;
        }
    }

    get displayNumberString()
    {
        return this._displayNumberString.replace(/,/g, ".");
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
        this._hiddenNumberString = hiddenNumberString.replace(/,/g, ".");
    }

    get hiddenNumberString()
    {
        return this._hiddenNumberString;
    }

    set displayResultString(text)
    {
        this._display.innerHTML = text == "0"? text : text.replace(/0*/, "");
    }

    get displayResultString()
    {
        return this._display.innerHTML;
    }
}