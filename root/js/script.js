$(document).ready(function(){
    replacePrimaryNavigation( $('#primaryNav') );
});

function replacePrimaryNavigation (element) {
   
    if ( element.length === 0 ) {
      return;
    }
    else if ( element.selector !== '#primaryNav' ) {
         throw new Error( 'this function only for #primaryNav' );
    }

    element.html('')
        .append(
            $('<li>').append( 
                $('<a>').attr('href', 'index.html').text('skelton') 
            ),
            $('<li>').append( 
                $('<a>').attr('href', 'visible-binding.html').text('visible binding') 
            ),
            $('<li>').append( 
                $('<a>').attr('href', 'text-binding.html').text('text binding') 
            ),
            $('<li>').append( 
                $('<a>').attr('href', 'click-binding.html').text('click binding') 
            ),
            $('<li>').append( 
                $('<a>').attr('href', 'event-binding.html').text('event binding') 
            ),
            $('<li>').append( 
                $('<a>').attr('href', 'template-binding.html').text('template binding') 
            )
    );

}




