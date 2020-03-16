
function neigh(value, point) {
    console.log('value: '+value);
    point.parent().next().children('option:not(.all)').each(function(){
        data=$(this).data('ass');
        console.log('each: '+data);
        if ($.inArray(value, data) !== -1){
            console.log('exist');
            $(this).prop('disabled', true);
        }else {
            console.log('not exist')
            $(this).prop('disabled', false);
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
        
        text=$(this).text();

        neigh(text, $(this));

        return false
    })

})