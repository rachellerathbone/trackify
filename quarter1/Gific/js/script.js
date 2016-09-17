(function() {
  'use strict';

  var $selectedImg;

  var randomGifUrl = function(image) {
    var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=';

    $.getJSON(url, function(object) {
      var imageSource = object.data.image_original_url;

      $(image).attr('src', imageSource);
      $(image).show();
    });
  };

  var replaceGifUrl = function(image, search) {
    var url = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + search;

    $.getJSON(url, function(responseData) {
      // Use for of instead as you can create a variable name instead of i.
      for (var i = 0; i < responseData.data.length; i++) {
        var $newImg = $('<img/>').attr('src',
          responseData.data[i].images.fixed_width.url);
        var refresh = $('#search').val();

        $($newImg).click(function() {
          $($selectedImg).attr('src', $(this).attr('src'));
          $('#myModal').modal('toggle');
          $(refresh).removeData();
        });
        $('#search-results').prepend($newImg);
      }

      $('body').on('hidden.bs.modal', '.modal', function() {
        $('.modal').find('input[type="text"]').each(function() {
          if (this.defaultValue !== '' || this.value !== this.defaultValue) {
            this.value = this.defaultValue;
          } else {
            this.value = '';
          }
        });
      });
    });
  };

  $('#random').click(function() {
    randomGifUrl($selectedImg);
    $('#myModal').modal('toggle');
  });

  $('div.img').click(function() {
    $selectedImg = $('img', this)[0];
  });

// Don't define function inline, define separately and then call it by name.
// This will allow me to remove it later. Also, as it is an an anonymous function
// I won't be able to grab it again later if I need to. It will allow me to name
// it
  $('#enter').click(function() {
    replaceGifUrl($selectedImg);
  });

  $('#search').keypress(function(e) {
    if (e.which === 13) {
      replaceGifUrl('#placeholdit', $('#search').val());
    }
  });

  $('#search-button').click(function() {
    replaceGifUrl('#placeholdit', $('#search').val());
  });

  $('form').submit(function() {
    return false;
  });

  $(function() {
    // next time put this in a separate file
    var adjectives = ['reflective', 'itchy', 'irrational',
    'uneducated', 'selfish', 'impossible', 'undesirable',
    'inquisitive', 'clumsy', 'sparkling', 'tightfisted', 'somber',
    'unbecoming', 'plastic', 'careless', 'malicious', 'bad', 'zesty',
    'messy', 'holy', 'shallow', 'crabby', 'jealous', 'purple', 'drunk',
    'untrustworthy', 'sleazy', 'phobic', 'stiff', 'crabby', 'mean',
    'sexy', 'jaded', 'hideous', 'charming', 'bouncy', 'unhealthy',
    'cheeky', 'gifted', 'trashy', 'dramatic', 'careful', 'greedy', 'ritzy',
    'chunky', 'grotesque', 'panicky', 'hilarious', 'small', 'depressed',
    'nervous', 'sadistic', 'dead', 'hairless', 'abnormal', 'slimy', 'naked',
    'sticky', 'filthy', 'insane', 'flirty', 'sinister', 'offensive', 'divorced',
    'hungover'];
    var nouns = ['banana', 'monkey', 'turkey', 'Donald Trump', 'vampire',
    'computer', 'test tube', 'idiot', 'toaster', 'psychic', 'kitty', 'grandma',
    'sandwich', 'death wish', 'french chef', 'coffee pot', 'antidepressant',
    'candlestick maker', 'White Walker', 'trust fund', 'toothbrush', 'turnip',
    'pacemaker', 'police officer', 'vacuum cleaner', 'sponge', 'pebble',
    'machete', 'cucumber', 'unicorn', 'rainbow', 'pancake', 'cupcake',
    'mermaid egg', 'bush', 'ankle', 'broomstick', 'butler', 'chicken', 'fork',
    'leprechaun', 'president', 'pencil', 'waffle', 'neck beard', 'weenis',
    'chopstick', 'toupee'];

    $('#random-title').click(function() {
      var randomAdjective = adjectives[Math.floor(
        Math.random() * adjectives.length)];
      var randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

      $('#title').val('The ' + randomAdjective + ' ' + randomNoun);
    });

    $('#remove-random-title').click(function() {
      $('#title').val('');
    });
  });

  $('#submit').click(function() {
    var comicStrips = [];
    var template = [];
    var gificTitle = {
      title: $('textarea').val()
    };

    $('div.img').each(function(index, item) {
      var modelItem = {
        image: $('img', item).attr('src'),
        text: $('.main-text', item).val()
      };
      template.push(modelItem);
    });
    gificTitle.template = template;
    comicStrips.push(gificTitle);
    localStorage.setItem('Gific', JSON.stringify(comicStrips));
  });

  $('.btn-close').click(function() {
      $('.alert').removeClass('in').show();
  	$('.alert').delay(200).addClass('in').fadeOut(4000);
  });

  // Working on text-to-speech feature
  // $('a.say').click(function(e) {
  //   e.preventDefault();
  //   var text = $('textarea#title').val();
  //
  //   text = encodeURIComponent(text);
  //   var url = 'http://translate.google.com/translate_tts?ie=UTF-8&tl=fr&q=' + text + '&client=tw-ob';
  //
  //   $('audio').attr('src', url).get(0).play();
  // });
})();
