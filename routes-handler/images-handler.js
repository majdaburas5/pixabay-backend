const { API_URL } = require("../constants/constants");
const { filterImages } = require("../helper-functions/helper-functions");
const axios = require("axios");
const getPhotos = async function (req, res) {
  try {
    const { pageNumber, category } = req.query;
    const response = await axios.get(
      `${API_URL}${category}&page=${pageNumber}&per_page=9`
    );
    if (!response) {
      res.status(400).json("something went wrong with the api request");
      return;
    }
    res.status(200).json(filterImages(response.data.hits));
  } catch (err) {
    res.status(500).json("server error");
  }
};

module.exports = { getPhotos };
