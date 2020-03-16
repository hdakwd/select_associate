



$(function() {
    $('option').mousedown(function(){
        e.preventDefault();
        $(this).prop('selected', !$(this).prop('selected'));
        return false
    })
})