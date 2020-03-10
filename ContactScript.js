/*function ContactLoad(){
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
*/
var Sdk = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {
            var formContext = executionContext.getFormContext();

            var lookupArray = formContext.getAttribute("parentcustomerid").getValue();
            if (lookupArray[0] != null) {

                var accGuid = lookupArray[0].id;
                var accName = lookupArray[0].name;
                var entityType = lookupArray[0].entityType;

                formContext.ui.setFormNotification("GUID of acc: " + accGuid, "INFO", "1");
                formContext.ui.setFormNotification("Name of acc: " + accName, "INFO", "2");
                formContext.ui.setFormNotification("Entitytype of acc: " + entityType, "INFO", "3");

            }
            
        }

        this.shippingMethodOnChange = function (executionContext) {
            var formContext = executionContext.getFormContext();
            if (formContext.getAttribute("address1_shippingmethodcode").getText() == "FedEx") {
                formContext.getControl("address1_freighttermscode").setDisabled(true);
            }
            else {
                formContext.getControl("address1_freighttermscode").setDisabled(false);

            }
        }

        this.firstnameOnChange = function (executionContext) {
            var formContext = executionContext.getFormContext();

            var firstName = formContext.getAttribute("firstname").getValue();

            alert("Hello " + firstName);
        }

       
    }

).call(Sdk);