const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
  {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'employee_db'
    },
    console.log(`Connected to the books_db database.`)
  );

const promptUser = () => {
    return inquirer.prompt([
      {
        type: '',
        name: 'name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: '',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };
  




