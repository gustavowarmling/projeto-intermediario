/* eslint-disable no-undef */
const express = require("express");
const axios = require('axios').default;
const parse = require('node-html-parser').parse;

const route = express.Router();

const PAGE_ULR = 'https://www.billboard.com/charts/artist-100';

route.get('/', async (req, res) => {
  const query = req.query.artist ? String(req.query.artist) : false;

  const { data } = await axios.get(PAGE_ULR);
  const root = parse(data);
  const artistsList = root.querySelectorAll('.chart-list-item');

  const artists = [];

  artistsList.map(film => {
    const artist = film.attrs['data-title'];
    const rank = film.attrs['data-rank'];
    const PeakPosition = film.querySelector('.chart-list-item__weeks-at-one')
      .innerHTML;

    const artistPosition = {
      artist,
      rank,
      PeakPosition,
      timestamp: new Date(),
    };

    if (!query) {
      artists.push(artistPosition);
    } else if (
      artistPosition.artist.toUpperCase().includes(query.toUpperCase())
    ) {
      artists.push(artistPosition);
    }
    return null;
  });

  res.json(artists);
});

module.exports = route;
