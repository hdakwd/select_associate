
function neigh(value, point) {
    point.parent().next().children('option:not(.all)').each(function(){
        data=$(this).data('ass');
        console.log(data);
        if ($.inArray(value, data) !== -1){
            
        }else {
            $(this).prop('disable', true);
        }
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

        text=$(this).text();

        neigh(text, $(this));
        
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