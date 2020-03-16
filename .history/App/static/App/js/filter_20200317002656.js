



$(function() {
    $('option.all').mousedown(function(e){
        e.preventDefault();
        aft=!$(this).prop('selected')
        if(aft) {
            $(this).parent().children('option').prop('selected', true);
        }else {
            $(this).prop('selected', aft);
        }
        
        return false
    })

    $('option:not(.all)').mousedown(function(e){
        e.preventDefault();
        aft=!$(this).prop('selected')
        if(aft) {
            $(this).parent().children('option').prop('selected', true);
        }else {
            $(this).prop('selected', aft);
        }
        
        return false
    })
})