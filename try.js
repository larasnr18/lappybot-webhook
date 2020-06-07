const axios = require("axios");

async function getNumberOfFollowers() {
  let res = await axios.get("https://api.github.com/users/janbodnar");

  let nOfFollowers = res.data.followers;
  let location = res.data.location;

  const data = { nOfFollowers, location };
  // console.log(`# of followers: ${nOfFollowers}`);
  // console.log(`Location: ${location}`);

  return "hello";
}

getNumberOfFollowers();

module.exports = { getNumberOfFollowers };
