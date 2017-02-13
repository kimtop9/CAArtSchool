/*------------------------------------------------------슬라이드------------------------------------------------------*/
var i = 1;

$(document).ready(function () {
    $("img").click(function () {
        i++;

        if (i <= 3) {
            $("#group").animate({
                left: "-=706px"
            });
        } else if (i > 5) {
            i = 1;

        } else {
            $("#group").animate({
                left: "+=706px"
            });

        }
    });
});
