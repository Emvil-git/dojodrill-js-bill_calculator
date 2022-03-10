let pay = [];

document.querySelector('#bill-amt').addEventListener('click',function(event){
  document.getElementById('bill-amt').classList.remove("invalid-input");
});

document.querySelector('#tip-dropdown').addEventListener('click',function(event){
  document.getElementById('tip-dropdown').classList.remove("invalid-input");
});

document.querySelector('#calc-btn').addEventListener('click', function(event){
  let billAmt = parseFloat(document.getElementById('bill-amt').value);
  console.log(billAmt);
  let discount = parseFloat(document.getElementById('discount-amt').value)/100;
  let diners = parseFloat(document.getElementById('pax-amt').value);
  let tipRate = parseFloat(document.getElementById('tip-dropdown').value);
  if (isNaN(billAmt)){
    document.getElementById('bill-amt').placeholder = "Please enter a valid amount";
    document.getElementById('bill-amt').classList.add("invalid-input");
  } else if (isNaN(tipRate)) {
    document.getElementById('tip-dropdown').classList.add("invalid-input");
  } else {
    pay = calculate(diners, billAmt, discount, tipRate);
    document.getElementById('pay-amt').innerHTML = pay[0];
    document.getElementById('pay-amt-each').innerHTML = pay[1];
  }
  
});

document.querySelector('#reset-btn').addEventListener('click', function(event){
  reset();
});

function calculate(pax, bill, disc, tip) {
  let toPay =  ((bill + ( bill * tip )) - ( bill * disc )).toFixed(2) ;
  let toPayEach = (toPay / pax).toFixed(2);
  let payments = [toPay, toPayEach];
  return payments;
}

function reset() {
  document.getElementById('bill-amt').value = null;
  document.getElementById('discount-amt').value = "0";
  document.getElementById('pax-amt').value = "1";
  document.getElementById('tip-dropdown').value = "select";
  document.getElementById('pay-amt').innerHTML = "--";
  document.getElementById('pay-amt-each').innerHTML = "--";
  document.getElementById('bill-amt').placeholder = "Your total bill"
}
