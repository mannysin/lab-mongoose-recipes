const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const data = require('./data.js');

mongoose.connect('mongodb://localhost/recipeApp')
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  const theRecipe = new Recipe({title: "yoyoyo"})    

  theRecipe.save()
  .then((theThingIGetBackFromDB)=>{

      console.log(theThingIGetBackFromDB);

  })
  .catch((theErrorThing)=>{

      console.log(theErrorThing);
      
  })

// Recipes.create({title: "yo"})
// .then((theSingleCat)=> {
//   console.log(theSingleCat)
// })
// .catch((err)=> {

//     console.log(err);
    
// })
