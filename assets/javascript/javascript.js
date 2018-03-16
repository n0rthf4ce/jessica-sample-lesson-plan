$(document).ready(function () {

    $(".icon").on("click", function () {
        var attribute = $(this).attr("id");
        switch (attribute) {
            case "worksheet1": $("#main-img-display").hide().html("<img class='img-fluid img-display' src='assets/images/worksheet1.jpg'>").fadeIn("slow");
            $("#material-description").hide().text("Practice your handwriting").fadeIn();    
            break;
            case "worksheet2": $("#main-img-display").hide().html("<img class='img-fluid img-display' src='assets/images/worksheet2.jpg'>").fadeIn("slow");
            $("#material-description").hide().text("Practice your shapes").fadeIn();    
            break;
            case "worksheet3": $("#main-img-display").hide().html("<img class='img-fluid img-display' src='assets/images/worksheet3.jpg'>").fadeIn("slow");
            $("#material-description").hide().text("Learn your monies").fadeIn();    
            break;
            case "worksheet4": $("#main-img-display").hide().html("<img class='img-fluid img-display' src='assets/images/worksheet4.jpg'>").fadeIn("slow");
            $("#material-description").hide().text("Read and color some pictures").fadeIn();    
            break;
            case "worksheet5": $("#main-img-display").hide().html("<img class='img-fluid img-display' src='assets/images/worksheet5.jpg'>").fadeIn("slow");
            $("#material-description").hide().text("Get those AEIOU vowels").fadeIn();    
            break;
            case "worksheet6": $("#main-img-display").hide().html("<img class='img-fluid img-display' src='assets/images/worksheet6.jpg'>").fadeIn("slow");
            $("#material-description").hide().text("It's a fucking snowman").fadeIn();    
            break;
        }
    });

});
