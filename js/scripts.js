// Business Logic
var total = 0;
var counter;
var hexvalues = ["a","b","c","d","e","f"];
var value = 0;
var digit = 0;

var binaryConvert = function(data)
{
  total = 0;
  if(data === "0")
  {
    return 0;
  }
  if(data === "1")
  {
    return 1;
  }

  for(var i = 0, counter = data.length; i < data.length; i++)
  {
    console.log("Int" + parseInt(data.charAt(i)) + "power" + Math.pow(2,counter));
    total = total + (parseInt(data.charAt(i)) * Math.pow(2,counter));
    counter -= 1;
  }

  return total;
}

var hexaConvert = function(data){
  total = 0;
  for(var i = 0, counter = (data.length-1); i < data.length; i++)
  {
    for(var j = 0; j < hexvalues.length ; j++ )
    {
      if(data.charAt(i) === hexvalues[j])
      {
        value = 10 + j;
      }
    }
    if(value === 0)
    {
      digit = parseInt(data.charAt(i));
    }
    console.log("Int" + (value+digit) + "power" + Math.pow(16,counter));
    total = total + ((digit + value) * Math.pow(16,counter));
    counter -= 1;
    digit = 0;
  }
  return total;
}
//User interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var binInput = $("#bin").val();
    var hexInput = $("#hex").val();

    $("#output").text("Binary to Decimal: " + binaryConvert(binInput));

    $("#output2").text("Hexadecimal to Decimal: " + hexaConvert(hexInput));
  });
});
