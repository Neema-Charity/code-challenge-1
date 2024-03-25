// Constants for tax rates, NHIF, and NSSF from the provided link
const TAX_RATES = [
    { min: 0, max: 24000, rate: 10 },
    { min: 24001, max: 32333, rate: 15 },
    { min: 32334, max: 40333, rate: 20 },
    { min: 40334, max: 48333, rate: 25 },
    { min: 48334, max: Infinity, rate: 30 }
];

const NHIF_RATES = [
    // NHIF rates based on income ranges
];

const NSSF_EMPLOYEE_RATE = 6;
const NSSF_EMPLOYER_RATE = 6;
const NSSF_MAX = 1800;

// Function to calculate tax based on income
function calculateTax(income) {
    let tax = 0;
    for (const bracket of TAX_RATES) {
        if (income > bracket.max) {
            // If income exceeds the maximum of the current bracket, calculate tax for the entire bracket
            tax += (bracket.max - bracket.min + 1) * (bracket.rate / 100);
        } else {
            // If income falls within the current bracket, calculate tax for the portion of income within the bracket
            tax += (income - bracket.min + 1) * (bracket.rate / 100);
            break; // Exit loop as calculation is complete
        }
    }
    return tax; // Return calculated tax
}

// Function to calculate NHIF deduction based on income
function calculateNHIF(income) {
    // NHIF deduction calculation based on income ranges
}

// Function to calculate NSSF deduction based on income
function calculateNSSF(income) {
    // NSSF deduction calculation based on income
}

// Function to calculate net salary
function calculateNetSalary(basicSalary, benefits = 0) {
    const grossSalary = basicSalary + benefits; // Calculate gross salary
    const tax = calculateTax(grossSalary); // Calculate tax
    const NHIF = calculateNHIF(grossSalary); // Calculate NHIF deduction
    const NSSF = calculateNSSF(grossSalary); // Calculate NSSF deduction
    const netSalary = grossSalary - tax - NHIF - NSSF; // Calculate net salary
    
    return {
        grossSalary,
        tax,
        NHIF,
        NSSF,
        netSalary
    }; // Return calculated values
}

// Example usage
const basicSalary = 50000; // Example basic salary
const benefits = 10000; // Example benefits
const result = calculateNetSalary(basicSalary, benefits); // Calculate net salary
console.log("Gross Salary:", result.grossSalary); // Output gross salary
console.log("Tax:", result.tax); // Output tax
console.log("NHIF:", result.NHIF); // Output NHIF deduction
console.log("NSSF:", result.NSSF); // Output NSSF deduction
console.log("Net Salary:", result.netSalary); // Output net salary
