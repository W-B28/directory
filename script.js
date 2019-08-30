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
    $('.results').append('<div class="card"><h4>' + directory[x].fullName + '</h4><h4>' + directory[x].email + '</h4><h4>' + directory[x].phone + '</h4><button class="btn btn-sm w-10 mx-auto btn-danger">Delete</button></div>');
  }
}

// BUTTONS
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

document.getElementById("mySubmit").addEventListener("click", function () {
   let userInputtedFirstName = $("#firstName").val();
   let userInputtedLastName = $("#lastName").val();
   let userInputtedeMail = $("#eMail").val();
   let userInputtedPhoneNumber = $("#phoneNumber").val();

    let tempObj = {};
    tempObj.fullName = userInputtedFirstName + " " + userInputtedLastName;
    tempObj.email = userInputtedeMail;
    tempObj.phone = userInputtedPhoneNumber;

    directory.push(tempObj);

    // SET ALL FIELDS = to original .val()
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
