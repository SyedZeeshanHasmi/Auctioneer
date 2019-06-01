$(document).ready(function () {
    $("#signup-button").on("click", function (event) {
        $("#signup-form .warning").addClass("hidden");
        var email = $("#signup-form #email").val();
        var username = $("#signup-form #username").val();
        var password = $("#signup-form #password").val();
        if (!email || !username || !password) {
            $("#signup-form .warning").html("All fields are mandatory.");
            $("#signup-form .warning").removeClass("hidden");
            return;
        }
        var userCredentials = {
            email: email,
            username: username,
            password: password
        };

        $.ajax({
            method: "POST",
            url: "/signup",
            data: userCredentials,
            success: function (response) {
                if (response.success === 1) {
                    window.location = "/dashboard";
                } else {
                    $("#signup-form .warning").html(response.errorMessage);
                    $("#signup-form .warning").removeClass("hidden");
                }
            },
            error: function (err) {
                console.log("An error occured ", err);
            }
        });
    });

    $("#login-button").on("click", function (event) {
        $("#login-form .warning").addClass("hidden");
        var username = $("#login-form #user-name").val();
        var password = $("#login-form #password").val();
        if (!username || !password) {
            $("#login-form .warning").html("All fields are mandatory.");
            $("#login-form .warning").removeClass("hidden");
            return;
        }
        var userCredentials = {
            // email: email,
            username: username,
            password: password
        };

        $.ajax({
            method: "POST",
            url: "/signin",
            data: userCredentials,
            success: function (response) {
                if (response.success === 1) {
                    window.location = "/dashboard";
                } else {
                    $("#login-form .warning").html("Invalid username or password");
                    $("#login-form .warning").removeClass("hidden");
                }
            },
            error: function (err) {
                console.log("An error occured ", err);
            }
        });
    });
});