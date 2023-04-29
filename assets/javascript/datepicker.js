require('bootstrap-datepicker/js/bootstrap-datepicker')
require('bootstrap-datepicker/js/locales/bootstrap-datepicker.fr')
require('bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css')
$(document).ready(function() {
    $('.js-datepicker').datepicker({
        format: 'dd/mm/yyyy',
        language: 'fr',
        immediateUpdates: true,
        todayBtn: true,
        todayHighlight: true,
        autoclose: true,
    });
});