
// getting the income 

function getIncome(){

    let income = parseFloat(document.getElementById('income').value);

    // error handling for income input 
    let isTrue = errorHandling(income);
    if(isTrue){
        return income;
    }else {
        return 0;
    } 
}

// getting all the expenses 

function getExpenses(){

    let foodExpense = parseFloat(document.getElementById('food').value);
    let rentExpense = parseFloat(document.getElementById('rent').value);
    let clothExpense = parseFloat(document.getElementById('cloth').value);
    
    // error handling for expense inputs 
    let isFoodTrue = errorHandling(foodExpense);
    let isRentTrue = errorHandling(rentExpense);
    let isClothTrue = errorHandling(clothExpense);

    if(isFoodTrue && isRentTrue && isClothTrue){
        let totalExpense = foodExpense + rentExpense + clothExpense;
        return totalExpense;
    }else {
        return 0;
    }
}

// function for error handling 

function errorHandling(inputValue){
    if(isNaN(inputValue) || inputValue < 0){
       
        return 0;
    }else {
        return 1;
    }
}
// calculating income and expenses 

function calculate(){
    // taking  user income  
   let income = getIncome();

//    taking total expenses 
    let totalExpense = getExpenses();

    // error message showing 
    if(income == 0 || totalExpense == 0){
        document.getElementById('failed-text').classList.remove('d-none');
        
        document.getElementById('applied-text').classList.add('d-none');
    }else {
        document.getElementById('applied-text').classList.remove('d-none');
        document.getElementById('failed-text').classList.add('d-none');
    }
    // calculate and setting total expense and balance 
    let balance = income - totalExpense; 

    document.getElementById('total-expense').innerText = totalExpense;
    document.getElementById('total-balance').innerText = balance;
    // showing error if income < total_expenses 

    if(income < totalExpense){
        document.getElementById('failed-text2').classList.remove('d-none');
        document.getElementById('total-expense').classList.add('d-none');
        document.getElementById('total-balance').classList.add('d-none');
        
    }
    // clearing the input fields 
    document.getElementById('food').value = '';
    document.getElementById('rent').value = '';
    document.getElementById('cloth').value = '';
}

// calculating the saving amount and remaining amount

function save(){
    let saveInput = document.getElementById('save');
    let savePercent = parseFloat(saveInput.value);

    // error handling for save input field 

    if(isNaN(savePercent)){

        document.getElementById('failed-text4').classList.remove('d-none');
        document.getElementById('saving-amount').classList.add('d-none');
        document.getElementById('remaining-balance').classList.add('d-none');

    }
    
    
    let savingAmount = getIncome() * savePercent / 100;

    document.getElementById('saving-amount').innerText = savingAmount;

    let balance =  parseFloat(document.getElementById('total-balance').innerText);

    let remainingBalance = balance - savingAmount;

    document.getElementById('remaining-balance').innerText = remainingBalance;

    // error handling if balance < saving amount 
    if(balance < savingAmount){
        document.getElementById('failed-text3').classList.remove('d-none');
        document.getElementById('saving-amount').classList.add('d-none');
        document.getElementById('remaining-balance').classList.add('d-none');
        // console.log('you dont have enought money to save');
    }
    document.getElementById('income').value = '';
    document.getElementById('save').value = ''; 
}