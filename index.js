// Write your solution in this file!
const employee = {
    name: 'Victor',
    streetAddress: 'Runda'
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObject = {...employee};

    newObject[key] = value;

    return newObject;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee};

    delete newObject[key];

    return newObject;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];

    return obj;
} 
