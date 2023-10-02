// src/calculator.ts
import inquirer from 'inquirer';

const calculator = async () => {
  const questions = [
    {
      type: 'input',
      name: 'num1',
      message: 'Enter the first number:',
      validate: (input) => !isNaN(input) || 'Please enter a valid number.',
    },
    {
      type: 'list',
      name: 'operation',
      message: 'Select an operation:',
      choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
    {
      type: 'input',
      name: 'num2',
      message: 'Enter the second number:',
      validate: (input) => !isNaN(input) || 'Please enter a valid number.',
    },
  ];

  const answers = await inquirer.prompt(questions);
  const num1 = parseFloat(answers.num1);
  const num2 = parseFloat(answers.num2);

  let result: number | undefined;

  switch (answers.operation) {
    case 'Addition':
      result = num1 + num2;
      break;
    case 'Subtraction':
      result = num1 - num2;
      break;
    case 'Multiplication':
      result = num1 * num2;
      break;
    case 'Division':
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        console.error('Error: Division by zero.');
      }
      break;
    default:
      console.error('Invalid operation.');
      break;
  }

  if (result !== undefined) {
    console.log(`Result: ${result}`);
  }
};

calculator();
