var income = parseFloat(0.00);
var expense = parseFloat(0.00);
var balance = parseFloat(0.00);
localStorage.clear();
document.getElementById('text').focus();

function update(){
    var textInput = document.getElementById('text').value;
    var valueInput = document.getElementById('amount').value;
    
    if(textInput == ''){
        alert('Text cannot be empty');
        document.getElementById('text').focus();
    }
    else if(valueInput == ''){
        alert('Amount cannot be empty')
        document.getElementById('amount').focus();
    }
    else if(valueInput == '0'){
        alert('Amount cannot be 0')
    }
    else{
        localStorage.setItem(textInput, valueInput);
        showTransaction(valueInput);
        transactionHistory(textInput);
        document.getElementById('text').value = ''
        document.getElementById('amount').value = ''
        document.getElementById('text').focus();
    }
}

function showTransaction(val){
    var incomeDisplay = document.getElementById('money-plus');
    var expenseDisplay = document.getElementById('money-minus');

    if (val > 0){
        income += parseFloat(val);
        incomeDisplay.innerHTML = "$"+income;
    }
    else if (val < 0){
        expense += parseFloat(val);
        // showBalance(expense);
        expenseDisplay.innerHTML = "$"+Math.abs(expense);
    }
    showBalance(val);
    
}

function showBalance(   ){
    var balanceDisplay = document.getElementById('balance');
    balance = income + expense;
    balanceDisplay.innerHTML = "$"+balance;
}

function transactionHistory(text){
    var li = document.createElement("li");
    var litxt = document.createTextNode(text);
    li.appendChild(litxt);
    document.getElementById('list').appendChild(li);

    value = localStorage.getItem(text);
    var span = document.createElement("span");
    
    if(value > 0){
        var spantxt = document.createTextNode("+" + value);
        li.className = "plus"
    }
    else{
        var spantxt = document.createTextNode(value);
        li.className = "minus"
    }

    span.className = "value";
    span.appendChild(spantxt);
    li.appendChild(span);


}