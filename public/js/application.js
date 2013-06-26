// $(document).ready(function() {
//   $('form').$submit(function() {
//     alert('do stuff');
// )});

$(document).ready(function() {
  $("form").on( "submit", function( event ) {
    event.preventDefault();
    var input_data = $(this).serialize();
    console.log( input_data );
    $.ajax({
      url: '/grandma',
      type: 'POST',
      data: input_data
    }).done(function(response_data){
      $('h1').after('Grandma Says: ' + response_data + "<p>");
    });
  });
});
