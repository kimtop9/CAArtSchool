/*------------------------------------------------------슬라이드------------------------------------------------------*/
var i = 1;


$(document).ready(function () {
    $("img").click(function () {
        i++;

        if (i <= 5) {
            $("#group").animate({
                left: "-=706px"
            });
        } else if (i > 9) {
            i = 1;

        } else {
            $("#group").animate({
                left: "+=706px"
            });

        }
    });
});

/*----------------------------------------------------모달윈도우,리스트----------------------------------------------------*/
$(document).ready(function () {
    $(".modal").click(function () {
        $("#glayLayer").show();
        $("#overLayer").html("<img src='" + $(this).attr("href") + "' width='80%' height='80%'/>").show();

        return false;
    });

    $("#glayLayer").click(function () {
        $(this).hide();
        $("#overLayer").hide();
    });
});