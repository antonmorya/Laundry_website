$(function () {

    $("#rateYo").rateYo({
        rating: 3.5,
        readOnly: true
    });

});

var feedbacks = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure cupiditate dicta porro?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptate!',
    'Lorem ipsum dolor sit.'
],
    significations = [
        'Stewe Wonder',
        'Michael Jackson',
        'Some Guy'
    ],
    rating = [
        5,
        4,
        5
    ],
    photos = [
        'img/customers/steve_wonder.jpg',
        'img/customers/black-or-white-22.jpg',
        'img/customers/450c8ebcae94d2c27c271dce150ac4dc.jpg'
    ];
var COUNT = 0;

function changeComment(num) {
    $('.feedback-text span').hide(200, function () {
        $(this).text(feedbacks[num]).show(200)
    })

    $('.feedback-signification').hide(200, function () {
        $(this).text(significations[num]).show(200)
    })

    $("#rateYo").hide(200);
    $("#rateYo").rateYo("destroy");

    $("#rateYo").rateYo({
        rating: rating[num],
        readOnly: true
    });
    $("#rateYo").show(200);

    //$('.feedback-client-photo').hide(300)


    $('.feedback-client-photo').fadeOut(300, function () {
        $(this).attr('src', photos[num]).bind('onreadystatechange load', function () {
            if (this.complete) $(this).fadeIn(300);
        });
    });
}


$(window).on("load", function () {
    window.setInterval(function () {

        changeComment(COUNT);

        if (COUNT >= feedbacks.length - 1) {
            COUNT = 0
        } else {
            COUNT++;
        }

    }, 10000);
});