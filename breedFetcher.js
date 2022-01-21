const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  const breeds = process.argv.slice(2);
  const breed = breeds[0];
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(error);
      
      const data = JSON.parse(body);
      if (data.length === 0) {
        console.log('The requested breed was not found.');
      }
      console.log(typeof body);
      console.log(data);
      console.log(typeof data);
    }
  });
};

module.exports = { fetchBreedDescription };