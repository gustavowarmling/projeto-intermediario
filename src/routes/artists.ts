/* eslint-disable no-undef */
import { Router } from 'express';
import axios from 'axios';
import { parse } from 'node-html-parser';

const route = Router();

const PAGE_ULR = 'https://www.billboard.com/charts/artist-100';

interface Movie {
  artist: string;
  rank: string;
  PeakPosition: string;
  timestamp: Date;
}

route.get('/', async (req, res) => {
  const query = req.query.artist ? String(req.query.artist) : false;

  const { data } = await axios.get(PAGE_ULR);
  const root = parse(data);
  const artistsList = root.querySelectorAll('.chart-list-item');

  const artists: Movie[] = [];

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

export default route;
