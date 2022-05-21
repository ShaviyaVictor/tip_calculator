// global function variable  to be called in the form action
var calc = function() {

  // variables that capture the form  input
  var bill = Number(document.getElementById('bill').value);
  var split = Number(document.getElementById('split').value)
  
  // variables to do the calculations for the tip
  var tip = bill * 0.15;
  var totalBill = bill + tip;
  var splitPerPerson = totalBill / split;
  
  // variables to input the calculated results
  document.getElementById('tip').innerHTML = '$' + Number(tip).toFixed(2);
  document.getElementById('total').innerHTML = '$' + Number(totalBill).toFixed(2);
  document.getElementById('splitTotal').innerHTML = '$' + Number(splitPerPerson).toFixed(2);

}
