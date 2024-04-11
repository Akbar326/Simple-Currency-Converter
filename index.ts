import inquirer from 'inquirer'


const Currency: any = {
    USD: 1,   //Base Currency
    EUR: 0.93,
    GBP: 0.80,
    INR: 83.33,
    PKR: 277.70,
};

let userAnswer = await inquirer.prompt(
    [
        {
            name: 'from',
            message: "Enter From Currency",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'to',
            message: "Enter To Currency",
            type: 'list',
            choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
        },
        {
            name: 'amount',
            message: "Enter your amount",
            type: 'number',
        },
    ]
)

let fromAmount = Currency[userAnswer.from]
let toAmount = Currency[userAnswer.to]
let amount = userAnswer.amount
let baseAmount = amount / fromAmount
let convertedAmount = (baseAmount * toAmount).toFixed(2)

console.log(convertedAmount);
