const https = require('https');
const fs = require('fs');

const apiURL = 'https://api.whoisdatacenter.com/v1/download/expiring?apiKey={place_your_api_key_here}&date=2024-01-30';

const file = fs.createWriteStream('downloaded_data.zip');

https.get(apiURL, response => {
response.pipe(file);
});
