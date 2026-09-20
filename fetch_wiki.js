const https = require('https');

function fetchWiki(url, keyword) {
  https.get(url, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const urls = data.match(/upload\.wikimedia\.org\/wikipedia\/commons\/thumb\/[^\"\'\s]+(\.jpg|\.JPG)/g);
      if (urls) {
        // Replace thumb URL with original URL to get high-res
        const highResUrls = [...new Set(urls)].map(u => {
           // Example thumb: upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Panthera_tigris_tigris.jpg/220px-Panthera_tigris_tigris.jpg
           // We want to extract up to the actual .jpg
           const parts = u.split('/');
           // The last part is the thumb sizing (e.g. 220px-...). The second to last is the filename.
           const original = 'https://' + parts.slice(0, -1).join('/').replace('/thumb', '');
           return original;
        });
        console.log(`--- ${keyword} ---`);
        console.log(highResUrls.slice(0, 8));
      }
    });
  });
}

fetchWiki('https://en.wikipedia.org/wiki/Bengal_tiger', 'Tiger');
fetchWiki('https://en.wikipedia.org/wiki/Sundarbans', 'Sundarbans');
