const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const queryText = `
    SELECT
	    "movies"."title" AS movie,
	    ARRAY_AGG("genres"."name") AS genres
    FROM "movies"
    JOIN "movies_genres"
	    ON "movies"."id" = "movies_genres"."movie_id"
    JOIN "genres"
	    ON "genres"."id" = "movies_genres"."genre_id"
    WHERE "movies"."id" = $1
    GROUP BY "movies"."title";
  `;

  const queryParams = [
    req.query.movieID
  ];

  pool.query(queryText, queryParams)
    .then(result => {
      res.send(result.rows);
    })
    .catch(error => {
      console.log('Error getting genres', error);
      res.sendStatus(500)
    })
});

module.exports = router;