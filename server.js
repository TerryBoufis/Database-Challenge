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

const promptDepartment = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What new department would you like to add?',
      },
    ]) .then(departmentName => {
          addDepartments(departmentName.name) 
  }) 
  };


  const promptRole = () => {
    return inquirer.prompt([
  {
    type: 'input',
    name: 'roleName',
    message: 'What new department would you like to add?',
  },
  {
    type: 'input',
    name: 'salary',
    message:'',
  },
]) .then( roleAnswers => {
    addDepartments(roleAnswers.rolename, roleAnswers.salary)
  }) 
};

const promptEmployee = () => {
  return inquirer.prompt([
{
  type: 'input',
  name: 'roleName',
  message: 'What new department would you like to add?',
},
{
  type: 'input',
  name: 'salary',
  message:'',
},
]) .then( roleAnswers => {
  addDepartments(roleAnswers.rolename, roleAnswers.salary)
}) 
};






    const init = () => {
      promptManagerQuestions()
        .then((answers) => { 
          const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
          team.push(manager)
          promptTeamMemberQuestions()
        })
        .then(() => console.log('Successfully wrote to index.html'))
        .catch((err) => console.error(err));
    };
    
    init();