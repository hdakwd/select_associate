



$(function() {
    $('option.all').mousedown(function(e){
        e.preventDefault();
        aft=!$(this).prop('selected')
        if(aft) {
            $(this).parent().children('option').prop('selected', true);
        }else {
            $(this).parent().children('option').prop('selected', false);
        }
        
        return false
    }).change(function(){
        alert('Test');
    })

    $('option:not(.all)').mousedown(function(e){
        e.preventDefault();
        aft=!$(this).prop('selected')
        $(this).prop('selected', aft);
        
        return false
    })

    $('select').change(function() {
        alert('Test');
    })
})