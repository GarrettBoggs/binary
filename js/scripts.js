// Business Logic
var total = 0;
var convert = function(data){
  if(data === "0")
  {
    return 0;
  }
  if(data === "1")
  {
    return 1;
  }

  for(var i = (data.length-1); i > 0; i -= 1)
  {
    total = total + (parseInt(data.charAt(i)) * Math.pow(2,i));
    console.log(total);
  }

  return total;

}
//User interface
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var yearInput = $("#year").val();

    $("#output").text("This is a leap year " + convert(yearInput));
  });
});
