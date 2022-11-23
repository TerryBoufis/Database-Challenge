require('console.table');

const getDepartments = () => {
    db.query('SELECT * FROM DEPARTMENT', (err, results) => {
        console.table(results)
    })
}    

const getRoles = () => {
    db.query('SELECT * FROM ROLE', (err, results) => {
        console.table(results)   
    })
}    

const getEmployee = () => {
    db.query('SELECT * FROM DEPARTMENT', (err, results) => {
        console.table(results)
    })
}    

const addDepartments = (departmentName) => { 
    const params = [departmentName]
    db.query('INSERT INTO department (name) VALUES (?) ', params, (err, results) =>{
        
})
}

const addRole = (title, salary, department) => { 
    const params = [title, salary, department]
    db.query('INSERT INTO role (title, salary, department) VALUES (?) ', params, (err, results) =>{
        
})
}

const addEmployee = (firstName, lastName, role, manager) => { 
    const params = [firstName, lastName, role, manager]
    db.query('INSERT INTO employee (firstName, lastName, role, manager) VALUES (?) ', params, (err, results) =>{
        
})
}

const updateEmployee = (role) => {
    const params = [role]
    db.query('INSERT INTO department (role) VALUES (?) ', params, (err, results) =>{
        
})
}

module.exports = { getDepartments, getRoles, getEmployee, addDepartments, addRole, addEmployee, updateEmployee}