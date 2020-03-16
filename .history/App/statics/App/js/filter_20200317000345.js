



$(function() {
    $('option').mousedown(function(){
        e.preventDefault();
        aft=!$(this).prop('selected')
        $(this).prop('selected', aft);
        return false
    })
})