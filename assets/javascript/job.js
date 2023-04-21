const $ = require('jquery');

$("#stopJob").hide();

$( "#job_tags_1" ).on("click", function() {
    if($(this).is(":checked")) {
        $("#stopJob").show();
    }else{
        $("#stopJob").hide();
    }
});

// // div address
// $("#address").hide();
// $( "#job_checkbox_address" ).on("click", function() {
//     if($(this).val() == "Oui") {
//         $("#address").hide();
//     }else{
//         $("#address").show();
//     }
// });