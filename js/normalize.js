
require(["jquery.min"], function() {
    require(['bootstrap']);
    require(['bootstrap-dialog.min']);
    require(['animo.min', 'jquery.sparkline.min', 'fastclick', 'jquery.slimscroll.min', 'bootstrap-slider',
        'chosen.jquery.min', 'bootstrap-filestyle.min', 'moment-with-langs.min', 'bootstrap-datetimepicker.min'], function() {
        require(['app']);
    });
    require(['main']);
    require(['modernizr']);
});
