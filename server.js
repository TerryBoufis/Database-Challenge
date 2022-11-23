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
    message: 'What role would you like to add?',
  },
  {
    type: 'input',
    name: 'salary',
    message:'What is the salary of this employee?',
  },
]) .then( roleAnswers => {
      addRole(roleAnswers.rolename, roleAnswers.salary)
  }) 
};

const promptEmployee = () => {
  return inquirer.prompt([
{
  type: 'input',
  name: 'firstName',
  message: 'What is your first name',
},
{
  type: 'input',
  name: 'lastName',
  message:'What is your last name',
},
{
  type: 'input',
  name: 'employeeRole',
  message:'What is your role?',
},
{
  type: 'input',
  name: 'managerName',
  message:'What is the manager name?',
},
]) .then( employeeAnswers => {
      addEmployee(employeeAnswers.firstName, employeeAnswers.lastName, employeeAnswers.employeeRole,employeeAnswers.managerName)
  }) 
};


const promptUpdateEmployee = () => {
  return inquirer.prompt([
{
  type: 'input',
  name: 'newRole',
  message: 'What is your new role?',
},

]) .then( updateEmployeeAnswers => {
      updateEmployee(updateEmployeeAnswers.newRole)
  }) 
};

const init = () => {
  promptDepartment()
    .then((departmentName) => { 
      const department = new department(departmentName.name)
        push(department)
  promptRole()
    .then((roleAnswers) => { 
        const role = new role(roleAnswers.rolename, roleAnswers.salary)
          push(role)
  promptEmployee()
    .then((employeeAnswers) => { 
      const employee = new employee(employeeAnswers.firstName, employeeAnswers.lastName, employeeAnswers.employeeRole,employeeAnswers.managerName)
        push(employee)
  promptUpdateEmployee
  .then((updateEmployeeAnswers) => { 
    const employeeRole = new employeeRole(updateEmployeeAnswers.newRole)
      push(employee)
   })
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
});

init();

})
})
}  