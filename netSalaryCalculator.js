function calculateNHIF(gross) {
  if (gross <= 5999) return 150;
  else if (gross <= 7999) return 300;
  else if (gross <= 11999) return 400;
  else if (gross <= 14999) return 500;
  else if (gross <= 19999) return 600;
  else if (gross <= 24999) return 750;
  else if (gross <= 29999) return 850;
  else if (gross <= 34999) return 900;
  else if (gross <= 39999) return 950;
  else if (gross <= 44999) return 1000;
  else if (gross <= 49999) return 1100;
  else if (gross <= 59999) return 1200;
  else if (gross <= 69999) return 1300;
  else if (gross <= 79999) return 1400;
  else if (gross <= 89999) return 1500;
  else if (gross <= 99999) return 1600;
  else return 1700;
}

function calculatePAYE(taxable) {
  let tax = 0;

  if (taxable <= 24000) {
    tax = taxable * 0.1;
  } else if (taxable <= 32333) {
    tax = (24000 * 0.1) + ((taxable - 24000) * 0.25);
  } else {
    tax = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxable - 32333) * 0.30);
  }

  tax = tax - 2400;
  return tax > 0 ? tax : 0;
}


let basicSalary = Number(prompt("Enter your basic salary:"));
let benefits = Number(prompt("Enter your benefits:"));

let grossSalary = basicSalary + benefits;
let nssf = Math.min(grossSalary * 0.06, 1080);
let taxableIncome = grossSalary - nssf;
let paye = calculatePAYE(taxableIncome);
let nhif = calculateNHIF(grossSalary);
let netSalary = grossSalary - (nssf + nhif + paye);


let result = `
Gross Salary: Ksh ${grossSalary}
NSSF Deduction: Ksh ${nssf}
NHIF Deduction: Ksh ${nhif}
PAYE (Tax): Ksh ${paye}
----------------------------------
Net Salary: Ksh ${netSalary}
`;

console.log(result);
alert(result);
