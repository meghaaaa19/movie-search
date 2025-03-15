# 🎬 Movie Search App

A web application that allows users to search for movies, filter by year, and IMDb rating using the OMDB API.

## 🛠️ Prerequisites

Before running the project, ensure you have:
- Node.js (v14.x.x or above)
- npm (comes with Node.js)

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/meghaaaa19/movie-search.git
```

### 2. Install dependencies

```bash
cd movie-search
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root directory and add your OMDB API key:

```
OMDB_API_KEY=your_omdb_api_key_here
```

> 💡 You can get your OMDB API Key by signing up at [omdbapi.com](https://www.omdbapi.com/apikey.aspx)

### 4. Start the server

Using Nodemon (recommended for development):

```bash
npm run start
```

If you don't have Nodemon installed globally:

```bash
npm install -g nodemon
```

Or run directly with Nodemon:

```bash
nodemon index.js
```

Alternatively, use Node:

```bash
node index.js
```

The application will be available at [http://localhost:3000](http://localhost:3000)

## 💻 Development Mode

To run in development mode with auto-reloading:

```bash
npm run dev
```

## 📜 Available Commands

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm start` | Start the server |
| `npm run dev` | Start server in development mode |

## 🌐 Features

- 🔍 Search movies by title
- 📅 Filter results by year and IMDb rating
- ⭐ Save favorite movies (coming soon!)
- 📋 View detailed movie information

## 📝 License

[MIT](LICENSE)
