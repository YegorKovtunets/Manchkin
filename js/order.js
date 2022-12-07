$(document).ready(function () {
    $("#order_part_btn").click(function () {

        $(".parts").toggleClass("hidden");
        $("#standart").on("click", function () {
            $("#premium").css("display", "none")
        })
        $("#premium").on("click", function () {
            $("#standart").css("display", "none")
        })
    })
    $("#order_services_btn").click(function () {
        $(".services").toggleClass("hidden");
    });
});

