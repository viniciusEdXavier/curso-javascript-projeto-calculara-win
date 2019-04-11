class CalculatorController
{
    constructor()
    {
        this._display = document.querySelector("#display");
        this._firstNumberString = "";
        this._secondNumberString = "";
        this._operator = "";

    }

    calc()
    {
        return eval(this._firstNumberString + this._operator + this._secondNumberString);
    }

    updateDisplay(num)
    {
        this._display.innerHTML = num;
    }

    buttonClick(button)
    {
        console.log(button);
        switch(button)
        {
            default:

                break;
        }
    }
}