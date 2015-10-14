$(function() {

   var hashtagData,
       hashtagItems,
       hashtagName,
       instagramUrl,
       $hashtagUsername = $('.username'),
       $hashtagList = $('.hashtag-list');

   $('#hashtag-search').on('submit', function(event) {

      event.preventDefault();
      $('.content-in img').css("display", "none");
      $('#dvloader').show();

      $hashtagList.empty();
      hashtagData, hashtagItems = '',

      hashtagName = $('#hashtag-name').val().replace(/ /g, '_'),
      instagramUrl = 'https://api.instagram.com/v1/tags/'+hashtagName+'/media/recent?count=12&client_id=ad73472270e1464ab7693e380de0856d';

      $.ajax({
         method: 'GET',
         url: instagramUrl,
         dataType: 'jsonp'
      })

      .done(function(results) {
         hashtagData = results.data;


         if ( hashtagData.length !== 0 ) {
            $.each(hashtagData, function(key, value) {
              hashtagItems += '<li class="wrapper">';
              hashtagItems += '<ul>';
              hashtagItems += '<li class="hashtag-image">';
              hashtagItems += '<a href="' + value.images.standard_resolution.url + '" data-lightbox="image-1"> <img src="' + value.images.standard_resolution.url + '" /></a>'; 
              hashtagItems += '</li>';
              hashtagItems += '<li class="profile">';
              hashtagItems += '<div class="wrapper1">';
              hashtagItems += '<img src="' + value.caption.from.profile_picture + '" />';
              hashtagItems += '</div>';
              hashtagItems += '<div class="wrapper2">'; 
              hashtagItems += '<h1>' + value.caption.from.username + '</h1>';
              hashtagItems += '<div class="comments">';
              hashtagItems += '<i class="fa fa-comments"></i>' + ' ' + value.comments.count + ' ' +'<i class="fa fa-heart"></i>' + ' ' + value.likes.count + ' '; 
              hashtagItems += '</div>';
              hashtagItems += '</div>';
              hashtagItems += '</li>';
              hashtagItems += '</ul>';
              hashtagItems += '</li>';
            });
         } else {
            hashtagItems += '<p style="margin-top: 18px;">Sorry, hashtag not found.</p>';
         }

         $hashtagUsername.append(hashtagItems);
         $hashtagList.append(hashtagItems);
               
      })

      .fail(function() {
         $hashtagList.append('<li>Sorry! There was a problem, please try again.</li>');
      })

      .always(function() {
        $('#dvloader').hide();
      });
   });
});