document.querySelector(`form`).addEventListener(`submit`, checkAge);


const license = 18;
const jrop = 16;
const rental = 25;

let myAge = 46;

function checkAge(e) {
    e.preventDefault();

    let myAge = document.querySelector(`input`).value;

    let message = "";

    console.log(`RUNNING ...`+myAge);

        if (myAge < license && myAge >= jrop ) {
            message += `<li>you can have a jrop license<li/>`;
        }

        if (myAge >= license) {
            message += `<li>you can have a regular license</li>`;
        }

        if (myAge < jrop) {
            message += `<li>your too young to drive</li>`;
        }
        document.querySelector(`#output`).innerHTML = message;
}