$(document).ready(function() {

  $(".fas").on('click', (event) => {
    let id = $(event.target).parent().attr(`passport`);
    let url = `/delete/` + id;
    console.log(url);
    $.ajax({
      url: url,
      type: 'DELETE',
      succcess: function() {
        console.log('Deleting post...');
        // redirecting
        windows.location.href = '/';
      }
    })
  })
});
