
function myFunction() {
  var inpObj = document.getElementById("id1");
  //checking for validity
  if (!inpObj.checkValidity()) {
    // if check fails and automatically displays a message
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  } else {
    document.getElementById("demo").innerHTML = "Input OK";
  } 
} 
/* What an example of what validationMessage & checkValidity looks like on the inside
let in1 = document.getElementById('id1');
if(in1.value < in1.getAttribute('min')){
 return `Value must be greater than or equal to ${in1.getAttribute('min')}`;
 //return "Value must be greater than or equal to " + in1.getAttribute('min');
}*/