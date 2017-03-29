var runningTotal = 0.0;

function addItem()
{
  var newItem;
  newItem = document.getElementById("price").value;
  if(isNaN(newItem))
  {
    window.alert("Price must be a number");
  }
  else {
    newItem = Number(newItem);
  }
  runningTotal += newItem;
  // create a variable called dollars
  // call asCurrency() by with the value of runningTotal and assign the return value to dollars
  var dollars = asCurrency(runningTotal);
  // update the innerHTML of the span with the id "subtotal" to be dollars
  document.getElementById("subtotal").innerHTML = dollars;
  // update the value of the input with the id "price" to be an empty string
  document.getElementById("price").value = "";
  // update a cookie called "preTax" with the value of runningTotal
  setCookie("preTax", runningTotal, 1);
}

//takes a number and gives a string with the number displayed as USD currency
function asCurrency(val)
{
  return "$" + val.toFixed(2);
}

//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function calculateReceipt()
{
  var receiptSubtotal = Number(getCookie("preTax"));
  var receiptTax = receiptSubtotal * 0.075;
  var receiptTotal = receiptSubtotal + receiptTax;
  document.getElementById("sub").innerHTML = "$" + receiptSubtotal.toFixed(2);
  document.getElementById("tax").innerHTML = "$" + receiptTax.toFixed(2);
  document.getElementById("tot").innerHTML = "$" + receiptTotal.toFixed(2);
}
