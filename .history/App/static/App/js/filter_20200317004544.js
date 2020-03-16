
function neigh(point) {
    point.parent().next().children('option:not(.all)').each(function(){
        data=$(this).data('ass');
        console.log(data);
    })
}


$(function() {
    $('option.all').mousedown(function(e){
        e.preventDefault();
        aft=!$(this).prop('selected')
        if(aft) {
            $(this).parent().children('option').prop('selected', true);
        }else {
            $(this).parent().children('option').prop('selected', false);
        }

        neigh($(this));
        
        return false
    })

    $('option:not(.all)').mousedown(function(e){
        e.preventDefault();
        aft=!$(this).prop('selected')
        $(this).prop('selected', aft);
        
        neigh($(this));

        return false
    })

})