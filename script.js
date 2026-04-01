var isDate = function (input) {
  //   write your code here
	if (input instanceof Date) {
    return !isNaN(input.getTime());
  }

  let date = new Date(input);
  return !isNaN(date.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
