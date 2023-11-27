// const express = require('express');
// const app = express();
// const port = 5000;

// app.listen(port, (err) => {
//     if (err) {
//       console.error('Something bad happened');
//     } else {
//       console.log(`Server is listening on ${port}`);
//     }
//   });

//   app.get("/", (req, res) => {
//     res.send("Welcome to Express");
//   });




//   const welcomeName = (req, res) => {

//     res.send(`Welcome ${req.params.name}`);
//   };
  
//   app.get("/users/:name", welcomeName);


//   const cocktails = [
//     {
//       id: 1,
//       name: "Margarita",
//     },
//     {
//       id: 2,
//       name: "Mojito",
//     },
//     {
//       id: 3,
//       name: "Cuba Libre",
//     },
//   ];
  
//   const getCocktails = (req, res) => {
//     res.status(200).json(cocktails);
//   };
  
//   app.get("/api/cocktails", getCocktails);





  const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

app.get("/", (req, res) => {
    res.send("Welcome to my favourite movie list")
})

const getMovies = (req,res) => {
    res.status(200).json(movies)
}

app.get("/api/movies", getMovies)


const specifiedMovie = (req,res) => {
    const choicedMovie = movies.find((movie) => movie.id == `${req.params.id}`)
    console.log(choicedMovie)
    if (choicedMovie === undefined) {
        res.status(404).send("Not find !!!")
    }
    else {
        res.status(200).json(choicedMovie)
    }
    
}

app.get("/api/movies/:id", specifiedMovie)


// Créer une route GET /api/movies/:id qui ne retournera que le film correspondant à l'id défini dans l'url 
// (tu peux parcourir le tableau movies avec une boucle for, ou utiliser la méthode .find())

// S'il y a un film qui correspond aux paramètres, renvoie une réponse avec un statut 200 et le film correspondant comme objet json
// Sinon, renvoie un statut 404 avec un message "Not Found".