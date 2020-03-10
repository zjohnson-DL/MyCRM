var Sdk = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {
            Helper.DoSomething();
            var formContext = executionContext.getFormContext();

            var formType = formContext.ui.getFormType();
            if (formType == 1) {
                formContext.ui.setFormNotification("Creation", "INFO", "1");
            }
            else if (formType == 2) {
                formContext.ui.setFormNotification("Edit", "INFO", "2");

            }
            else if (formType == 3) {
                formContext.ui.setFormNotification("Read only", "INFO", "3");

            }

        }
        this.formOnSave = function (executionContext) {
            var eventArgs = executionContext.getEventArgs();
            if (eventArgs.getSaveMode() == 70 || eventArgs.getSaveMode() == 2) {
                eventArgs.preventDefault();
            }
        }

        this.MainPhoneOnChange = function (executionContext) {
            var formContext = executionContext.getFormContext();

            var phoneNumber = formContext.getAttribute("telephone1").getValue();
            var phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

            if (!phoneRegEx.test(phoneNumber)) {
                formContext.getControl("telephone1").setNotification("Use proper format", "phonemsg");
                formContext.ui.setFormNotification("Info msg", "INFO", "formnotif1");
            }
            else {
                formContext.getControl("telephone1").clearNotification("phonemsg");
                formContext.ui.clearFormNotification("formnotif1");
            }
        }
    }

).call(Sdk);

