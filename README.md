# Simplified Flix

A movie search app built with React. Search for any movie, sort the results, and click a movie to see its details. Movie data comes from the [OMDb API](https://www.omdbapi.com/).

This is the reference solution for the React module's capstone project. In the AI Augmented Development module, we use it to practise working with GitHub Copilot.

**Already have your own version of this project from the React module?** Feel free to use that instead. Everything in these lessons works on either one.

## Getting started

You'll need [Node.js](https://nodejs.org/) installed.

1. Clone this repo and open the folder in VS Code.
2. Create your own branch to work on:
   ```bash
   git checkout -b my-work
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the app:
   ```bash
   npm run dev
   ```
5. Open the link shown in your terminal (usually http://localhost:5173).

## API key

The app reads its OMDb API key from the `.env` file. An example of the `.env` file can be seen in `.env.example`.

Get a free API key from [omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) (or reuse a previously attained key), create an `.env` file using the format specified in `.env.example`, paste in your key and and restart with `npm run dev`. For example:

```
VITE_OMDB_API_KEY="<your_key_here>"
```

## Tech stack

- [React](https://react.dev/) with [Vite](https://vite.dev/)
- [React Router](https://reactrouter.com/) for pages
- [Axios](https://axios-http.com/) for API requests

Not sure where something lives in the code? Ask Copilot.
