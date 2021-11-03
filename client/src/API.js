const axios = require('axios');

module.exports = {
  post: (input, callback) => {
    axios.post('/calculate', input)
      .then((data) => {
        callback(data.data);
      })
      .catch((err) => {
        console.log('AXIOS POST ERROR: ', err);
      });
  }
};