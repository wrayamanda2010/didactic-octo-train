$(document).ready(function() {

  $('#btn-go').click((event) => {
    $.ajax({
      url: '/minidiscs',
      type: 'GET',
      success: (data) => {
        console.log(data)
        // UPDATE DOM!
        for (var i = 0; i < data.length; i++) {
          $('.doohickey').append(`<li>Title: ${data[i].title}, Artist: ${data[i].artist}, Genre: ${data[i].genre}, Description: ${data[i].description}, Cover URL: <img src=${data[i].cover_url}</li>`)
        }
      },
      error: function(jqXhr, textStatus, errorThrown) {
        console.log('OOPS:', errorThrown)
      }
    })
  })
})



// data: $(this).serialize(),
