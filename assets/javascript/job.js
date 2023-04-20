const $ = require('jquery');

$("#job_stopJob").hide();
$('#label_job_stopJob').hide();

$( "#job_tags_1" ).on("click", function() {
    if($(this).is(":checked")) {
        $("#job_stopJob").show();
        $('#label_job_stopJob').show();
    }else{
        $("#job_stopJob").hide();
        $('#label_job_stopJob').hide();
    }
});

// div address
$("#address").hide();
$( "#job_checkbox_address" ).on("click", function() {
    if($(this).val() == "Oui") {
        $("#address").hide();
    }else{
        $("#address").show();
    }
});