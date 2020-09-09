const form = document.querySelector("#form");

//grab an input
const inputEmail = form["email"];

//create a functions to push
    function firebasePush(input) {

        //push itself
        let mailsRef = db.ref('emails').push().set(
            {
                mail: input.value
            }
        );

    }

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputEmail);

            //shows alert if everything went well.
            return alert('Data Successfully Sent to Realtime Database');
        })
    }