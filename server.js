import dotenv from 'dotenv';
import express from 'express';
import axios from 'axios';

dotenv.config();
const app = express();
const PORT = 3000;
const OMDB_API_KEY = process.env.OMDB_API_KEY;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files
app.use(express.static('public'));

// Homepage - Search Movies
app.get('/', async (req, res) => {
    const searchQuery = req.query.search 
    let movies = [];

    if (searchQuery) {
        try {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${searchQuery}`);
            movies = response.data.Search || [];
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    }

    res.render('index', { movies, searchQuery });
});

// Movie Details Page
app.get('/movie/:id', async (req, res) => {
    const movieId = req.params.id;

    try {
        const response = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}&plot=full`);
        res.render('movie', { movie: response.data });
    } catch (error) {
        console.error('Error fetching movie details:', error);
        res.send('Movie not found!');
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
