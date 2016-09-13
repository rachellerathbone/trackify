// Define a function named calculateTaxRate that takes two arguments
//    salary (number from 1 to 74,900)
//    status (string that's either 'single' or 'joint')
//
// If the status is anything other than 'single' or 'joint'
//    Return a string that says 'Better call an accountant'
// If the salary is greater than 74,900
//    Return a string that says 'Better call an accountant'
// Otherwise
//    Return the correct tax rate as a string using the table from http://www.efile.com/tax-service/tax-calculator/tax-brackets/
function calculateTaxRate(salary, status) {
  // if status is not single and status is not joint
  if ((status !== 'single' && status !== 'joint') || salary > 74900) {
    return 'Better call an accountant';
  }

  // if status is single, then review salary based on single tax tables
  if (status === 'single') {
    if (salary < 9226) {
    return '10%';
    }
    else if (salary < 34751) {
      return '15%';
    } else {
      return '25%'
    }
  }

  // if we have reached this section, status is joint.
  // review salary based on joint tax tables.
  if (salary < 18451) {
      return '10%';
  } else {
      return '15%'
  }

}

console.log(calculateTaxRate(50400, 'joint'));
