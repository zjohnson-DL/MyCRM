var Helper = window.Helper || {};
(
    function () {
        this.DoSomething = function (executionContext) {
            alert("Global Helper File");
        }
    }
).call(Helper);

