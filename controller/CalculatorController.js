class CalculatorController
{
    constructor()
    {
        this._display = document.querySelector("#display");
        this._firstNumberString = "";
        this._secondNumberString = "";
        this._operator = "";
        let that = this;

        document.querySelectorAll(".btn").forEach(button => {
            button.addEventListener("click", () => this.buttonKeyPush(button.innerHTML))
        });

    
    }

    calculateFields()
    {
        return eval(this._firstNumberString + this._operator + this._secondNumberString);
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
                
                break;



            default:
                break;
        }
    }
}