var Sdk = window.Sdk || {};
(
    function () {
        this.formOnLoad = function (executionContext) {

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

