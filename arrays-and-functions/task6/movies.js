const movies = [];

const count = parseInt(prompt('How many movies to rate?'));

for (let i = 0; i < count; i++) {
  const movieTitle = prompt('Enter movie title');
  const movieRating = parseInt(prompt('Enter rating (1-5)'));

  const movie = {
    title: movieTitle,
    rating: movieRating,
  };

  movies.push(movie);
}

movies.sort((a, b) => b.rating - a.rating);

document.body.appendChild(
  Object.assign(document.createElement('p'), {
    textContent: 'Sorted movies by rating (high to low):',
  })
);

for (const movie of movies) {
  document.body.appendChild(
    Object.assign(document.createElement('p'), {
      textContent: `${movie.title} (${movie.rating})`,
    })
  );
}

const bestMovie = movies[0];

document.body.appendChild(
  Object.assign(document.createElement('p'), {
    textContent: `Highest-rated movie: ${bestMovie.title} (${bestMovie.rating})`,
  })
);
