function ContactLoad(){
    alert("This is for onLoad");
}
function ContactSave() {
    alert("This is for saving a form");
}
function EmailOnChange() {
    alert("This is for changing Emails");
}

function DisplayHelloWorld(executionContext) {
    var formContext = executionContext.getFormContext();

    var firstName = formContext.getAttribute("firstname").getValue();

    alert("Hello " + firstName);
}

var Sdk = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {
            var formContext = executionContext.getFormContext();

            var firstName = formContext.getAttribute("firstname").getValue();

            alert("Hello " + firstName);
        }

        this.firstnameOnChange = function (executionContext) {
            var formContext = executionContext.getFormContext();

            var firstName = formContext.getAttribute("firstname").getValue();

            alert("Hello " + firstName);
        }
    }

).call(Sdk);