



$(function() {
    $('option').mousedown(function(){
        e.preventDefault();
        aft=!$(this).prop('selected')
        if(atf) {
            $(this).parent().children('option').prop('selected', true);
        }else {
            $(this).prop('selected', aft);
        }
        
        return false
    })
})