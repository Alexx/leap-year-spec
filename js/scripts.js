//back-end
function leapYear(year) {
  if (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0) {
    return false;
  } else if (year % 4 === 0 || year % 400 === 0) {
    return true;
  }
}

//front-end
$(document).ready(function(){
  $("#leapForm").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#year").val());
    var leapYearBool = leapYear(year);
    if(leapYearBool) {
      $(".output").text(year + " is a leap year!!!");
    } else {
      $(".output").text(year + " is NOT a leap year!!!");
    }
  });
});
