var audio;
var fileFormat = "ogg";
var mp3Test = new Audio();
var canPlayMP3 = ("function" === typeof mp3Test.canPlayType && "" !== mp3Test.canPlayType("audio/ogg"));
if (!canPlayMP3) {
    fileFormat = "mp3";
}

$(document).ready(function() {
    $("li").on("click", function() {
        var file = $(this).attr("data-sound");
        audio = new Audio(fileFormat + "/" + file + "." + fileFormat);
        audio.play();
    });

    $("[data-keyboard='true']").each(function() {
        var key = $(this).attr("data-key");
        var file = $(this).attr("data-sound");
        Mousetrap.bind(key, function(e) {
            audio = new Audio(fileFormat + "/" + file + "." + fileFormat);
            audio.play();
        });
    });
});
