const search = require('youtube-search');

const opts = {
    maxResults: 1,
    key: process.env.TOKEN_YOUTUBE
};

module.exports = searchUrl = async (term) =>{
   return new Promise((resolve, reject) => {
        search(term, opts, (err, results) => {
            if(err) throw err.message;
            if (results.length === 0){
                resolve("");
            }
            resolve(results[0].link);
        })
    });
}