console.log('replierBot is starting...')

var Twit = require('twit')
var config = require('./config')

var T = new Twit(config)

// RETWEET BOT ==========================

// find latest tweet according the query 'q' in params
function retweet() {
  var params = {
    q: '#UPR, UPR',  // REQUIRED
    result_type: 'recent'
  }
    // for more parameters, see: https://dev.twitter.com/rest/reference/get/search/tweets

  T.get('search/tweets', params, function(err, data) {
    // if there no errors
    if (!err) {
      // var fs = require('fs');
      // var json = JSON.stringify(data,null,2);
      // fs.writeFile("tweet.json", json);

      // grab ID of tweet to retweet
      var retweetId = data.statuses[0].id_str;
      // Tell TWITTER to retweet
      T.post('statuses/retweet/:id', {
              id: retweetId
      }, function(err, response) {
        if (response) {
          console.log('Retweeted!!!');
        }
        // if there was an error while tweeting
        if (err) {
          console.log('Something went wrong while RETWEETING... Duplication maybe...');
        }
      });
    }
    // if unable to Search a tweet
    else {
      console.log('Something went wrong while SEARCHING...');
    }
  });
}

retweet()
setInterval(retweet, 30000)
