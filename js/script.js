

$(document).ready(function() {

   // set some initial variables
   var hashtagData,
       hashtagItems,
       hashtagName,
       instagramUrl,
       $hashtagList = $('.hashtag-list');

   // when the form is submitted
   $('#hashtag-search').on('submit', function(event) {

      event.preventDefault();
      $('.content-in img').css("display", "none");

      // reset all the things
      $hashtagList.empty();
      hashtagData, hashtagItems = '',

      // get the search string
      hashtagName = $('#hashtag-name').val().replace(/ /g, '_'),
      instagramUrl = 'https://api.instagram.com/v1/tags/'+hashtagName+'/media/recent?count=12&client_id=ad73472270e1464ab7693e380de0856d';
      // make the call to the endpoint
      $.ajax({
         method: 'GET',
         url: instagramUrl,
         dataType: 'jsonp'
      })
      // if it works...
      .done(function(results) {
         hashtagData = results.data;

         if ( hashtagData.length !== 0 ) {
            $.each(hashtagData, function(key, value) {
              hashtagItems += '<li>';
              hashtagItems += '<img src="' + value.images.standard_resolution.url + '" />';
              hashtagItems += '<img src="' + value.caption.from.profile_picture + '" />'; 
              hashtagItems += '<p>' + value.caption.from.username + '</p>';
              hashtagItems += '<p>' + value.comments.count + '</p>';
              hashtagItems += '<p>' + value.likes.count + '</p>';
              hashtagItems += '</li>';
            });
         } else {
            hashtagItems += '<p style="margin-top: 18px;">Sorry, hashtag not found.</p>';
         }

         $hashtagList.append(hashtagItems);
      })
      // and if it fails...
      .fail(function() {
         $hashtagList.append('<li>Sorry! There was a problem, please try again.</li>');
      });
   });
});