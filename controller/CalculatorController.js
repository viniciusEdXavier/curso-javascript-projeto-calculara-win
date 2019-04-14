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
        return eval(this._hiddenNumberString + this._operator + this._displayNumberString);
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
                this.displayNumberString = this._displayNumberString+=buttonName;
                break;
            case "+":
            case "-":
            case "÷":
            case "X":
                if(this._displayNumberString != "")
                {
                    if(this._operator == "")
                    {
                        this._hiddenNumberString = this._displayNumberString;
                    }
                    else 
                    {
                        this._hiddenNumberString = this.calculateFields();
                        this.displayNumberString = this._hiddenNumberString;
                    }
                }
                this._operator = buttonName;
                this._displayNumberString = "";
                
                break;
            case "=":
                this.updateDisplay(this.calculateFields());
                break;
            case "CE":
                this.displayNumberString = "";
                break;
            default:
                break;
        }
    }

    set displayNumberString(numberString)
    {
        this._displayNumberString = numberString;
        if(numberString != "") 
        {
            this.updateDisplay(this._displayNumberString);
        }
    }
}