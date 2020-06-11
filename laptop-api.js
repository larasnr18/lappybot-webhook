const axios = require("axios");

async function getLaptop() {
  let res = await axios.get("https://lappybot-api.herokuapp.com/laptop");

  let namaLaptop = res.data.nama_laptop;
  let merkLaptop = res.data.merk_laptop;

  const data = { namaLaptop, merkLaptop };
  // console.log(`# of followers: ${nOfFollowers}`);
  // console.log(`Location: ${location}`);

  return data;
}

getLaptop();

module.exports = { getLaptop };
