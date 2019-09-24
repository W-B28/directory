/* click event on submit button that captures fields
click event on clear button that clears fields
submit button captures user entered values
take all the values we collected, store them in a user object inside that click addEventListener
*/

let directory = [];

// Function that loops through the directory and appends each element to the document
//    for loop
//         append each element preformatted with jquery
function renderToDom() {
  $('.results').empty();

  for (let x = 0; x < directory.length; x++) {

    for (let y = 0; y < directory.length-1; y++) {
      console.log(y);
      if (directory[y]['last'] > directory[y+1]['last']) {
        let tempVal = directory[y];
        directory[y] = directory[y+1];
        directory[y+1] = tempVal;
      }
    }
  }
  console.log(directory);
// Card Injected to HTML
  for (let x = 0; x < directory.length; x++) {
    $('.results').append('<div class="card"> <h4>' + directory[x].fullName + '</h4> <h4>' + directory[x].email + '</h4><h4>' + directory[x].phone + '</h4> <button class="btn btn-sm w-10 mx-auto btn-danger delete-btn" id="'+x+'">Delete</button> </div>');
  }
}

// BUTTONS - Clear
document.getElementById("myClear").addEventListener("click", function () {
  $("#firstName").remove();
  $(".first-name-group").append('<input type="text" class="form-control" id="firstName" placeholder="Enter Here">');
  $("#lastName").remove();
  $(".last-name-group").append('<input type="text" class="form-control" id="lastName" placeholder="Enter Here">');
  $("#eMail").remove();
  $(".eMail-group").append('<input type="text" class="form-control" id="eMail" placeholder="name@email.com">');
  $("#phoneNumber").remove();
  $(".phone-group").append('<input type="text" class="form-control" id="phoneNumber" placeholder="123-867-5309">');
});
//BUTTONS - SUBMIT
document.getElementById("mySubmit").addEventListener("click", function () {
  let userInputtedFirstName = $("#firstName").val().toLowerCase().split('');
  userInputtedFirstName[0] = userInputtedFirstName[0].toUpperCase();
  userInputtedFirstName = userInputtedFirstName.join('');

  let userInputtedLastName = $("#lastName").val().toLowerCase().split('');
  userInputtedLastName[0] = userInputtedLastName[0].toUpperCase();
  userInputtedLastName = userInputtedLastName.join('');

  let userInputtedeMail = $("#eMail").val();

  let userInputtedPhoneNumber = $("#phoneNumber").val();

  // are all fields filled in?
  if (userInputtedFirstName === "" || userInputtedLastName === "" || userInputtedeMail === "" || userInputtedPhoneNumber === "" ) {
    alert("Fill In All Fields Please :)");
    return null;
  }

if (validateEmail(userInputtedeMail) === false) {
  return null;
}
  // if valid email?
  //  validating with regEx
  // if userInputtedeMail does not include @
//   function matcheMail() {
//
function validateEmail (str) {

  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(str)) {
        return true;
    } else {
        alert("Please Enter Valid Email Address");
      return false;


    }
  }
    // if (userInputtedeMailVal !== resultRegEx) {
    //   return null;
    // }


  // does phone number have correct number of digits & characters

  let numberArr = ['0','1', '2', '3','4','5','6','7','8','9'];
  let tempStr = "";

  for (let x = 0; x < userInputtedPhoneNumber.length; x++) {

    if (numberArr.indexOf(userInputtedPhoneNumber[x]) > -1) {
      tempStr += userInputtedPhoneNumber[x];
    }
  };

  if (tempStr.length !== 10) {
    alert("Please Enter Your Ten Digit Phone Number");
    return null;
  }

    let tempObj = {};
    tempObj.fullName = userInputtedFirstName + " " + userInputtedLastName;
    tempObj.email = userInputtedeMail;
    tempObj.phone = tempStr;
    tempObj.first = userInputtedFirstName;
    tempObj.last = userInputtedLastName;

    directory.push(tempObj);

    // Clear Button to SET ALL FIELDS = to original.val()
    renderToDom();
    $("#firstName").remove();
    $(".first-name-group").append('<input type="text" class="form-control" id="firstName" placeholder="Enter Here">');
    $("#lastName").remove();
    $(".last-name-group").append('<input type="text" class="form-control" id="lastName" placeholder="Enter Here">');
    $("#eMail").remove();
    $(".eMail-group").append('<input type="text" class="form-control" id="eMail" placeholder="name@email.com">');
    $("#phoneNumber").remove();
    $(".phone-group").append('<input type="text" class="form-control" id="phoneNumber" placeholder="123-867-5309">');

  });

  // Remove card button

  $(".results").on("click", ".delete-btn", function(e) {
    // go into click event, target.[id], splice directory, call render function
    const deleteID = e.target.id;
    directory.splice(deleteID, 1);
    renderToDom();
  });
