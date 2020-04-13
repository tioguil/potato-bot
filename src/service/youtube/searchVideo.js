const search = require('youtube-search');

const opts = {
    maxResults: 10,
    key: process.env.TOKEN_YOUTUBE
};

search('Vapo vapo', opts, function(err, results) {
    if(err) return console.log(err);

    console.dir(results);
});