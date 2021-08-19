$(document).ready(function(){
    $("#contact-btn").on('click', (event) => {
        event.preventDefault();

        $("#contact-btn").text("Sending message... ").addClass("disabled")

        let fullname = $('#fullname').val()
        let email = $('#email').val()
        let subject = $('#subject').val()
        let message = $('#message').val()

        $.ajax({
            url: "https://devvyhac-resume-logic.herokuapp.com/contact",
            dataType: "json",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({ fullname, email, subject, message }),
            processData: false,
            success: (data, status, xhr) => {
                console.log(data)

                if (data.type === "success") {
                    swal(
                        'Message sent!',
                        data.message,
                        'success'
                    )

                    $('#fullname').val("")
                    $('#email').val("")
                    $('#subject').val("")
                    $('#message').val("")

                } else {
                    swal(
                        'Error Occured!',
                        data.message,
                        'error'
                    )
                }

                $("#contact-btn").html(`<span>Send Now</span> <i class="fa fa-arrow-right"></i>`).removeClass("disabled")
            }
        })

    })
});