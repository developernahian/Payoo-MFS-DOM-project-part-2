//Search: form sumbit reloading the page

// STEP: 1: set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    //STEP: 2: prevent default behavior (reloading browser)
    event.preventDefault(); //IMPORTNT: form e data entry korar por submit click howar por page reload jeno na hoy ejonne form er jonne eta must use korte hobe
    // console.log('clicked')

    //STEP: 3: get the phone number and pin number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phoneNumber, pinNumber)

    //STEP: 4: validate phone and pin
    //this is temporary. in future we use form validation actual way.
    if (phoneNumber === "1234567" && pinNumber === "1234") {
      // console.log('You are logged in')
      //STEP: 5: allow user to use the website
      window.location.href = "./home.html";
    } else {
      alert("Wrong Phone Number or Pin");
    }
  });
