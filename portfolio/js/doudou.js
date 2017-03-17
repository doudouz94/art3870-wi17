$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip({
  animated: 'fade',
placement: 'left',
html: true
});
 });

 $(document).ready(function() {
$('body').tooltip({
    selector: "[data-tooltip=tooltip1]",
    container: "body"
});
});

$(document).ready(function() {
$('body').tooltip({
selector: "[data-tooltip=tooltip2]",
container: "body"
});
});
