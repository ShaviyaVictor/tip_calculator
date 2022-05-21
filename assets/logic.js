// global function variable  to be called in the form action
var calc = function() {

  var bill = Number(document.getElementById('bill').value);
  var split = Number(document.getElementById('split').value)
  
  var tip = bill * 0.15;
  var totalBill = bill + tip;
  var splitPerPerson = totalBill / split;

}