const axios = require('axios');

module.exports = {
  post: (input, callback) => {
    axios.post('/calculate', input)
      .then((data) => {
        callback(null, data.data);
      })
      .catch((err) => {
        console.log('AXIOS POST ERROR: ', err);
        callback(err);
      });
  }
};