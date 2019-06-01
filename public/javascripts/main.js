$(document).ready(function() {
    $("#signup-button").on("click", function(event) {
        $("#signup-form .warning").addClass("hidden");
        var email = $("#signup-form #email").val();
        var username = $("#signup-form #username").val();
        var password = $("#signup-form #password").val();
        if(!email || !username || !password) {
            $("#signup-form .warning").html("All fields are mandatory.");
            $("#signup-form .warning").removeClass("hidden");
            return;
        }
        var userCredentials = {
            email : email,
            username : username,
            password : password
        };

        $.ajax({
            method : "POST",
            url : "/signup",
            data : userCredentials,
            success: function(response) {
                if(response.success === 1) {
                    window.location = "/dashboard";
                } else {
                    $("#signup-form .warning").html("Invalid username or password");
                    $("#signup-form .warning").removeClass("hidden");
                }
            },
            error: function(err) {
                console.log("An error occured ",err);
            }
        });
    });
});