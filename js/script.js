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

    $("#reveal").on('click', (event) => {
        $("#nav-2").toggleClass('reveal')
    })

    $("#closer").on('click', (event) => {
        $("#nav-2").removeClass('reveal')
    })

    $("#links-2").children().on('click', (event) => {
        $("#nav-2").removeClass('reveal')
    })

    // $("#wrapper").on('click', (event) => {
    //     $("#nav-2").removeClass('reveal')
    // })

    $('#wrapper .links a[href*=#], #nav-2 .links-2 a[href*=#]').bind('click', function(e) {
        e.preventDefault(); // prevent hard jump, the default behavior

        var target = $(this).attr("href"); // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
                scrollTop: $(target).offset().top
        }, 600, function() {
                location.hash = target; //attach the hash (#jumptarget) to the pageurl
        });

        return false;
    });

});

$(window).scroll(function() {
    var scrollDistance = $(window).scrollTop() + 50;

    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('#wrapper .link.active').removeClass('active');
            $('#wrapper .link').eq(i).addClass('active');
        }
    });

    $('.page-section').each(function(i) {
        if ($(this).position().top <= scrollDistance) {
            $('#nav-2 .nav-2-link a.active').removeClass('active');
            $('#nav-2 .nav-2-link a').eq(i).addClass('active');
        }
    });
    
}).scroll();