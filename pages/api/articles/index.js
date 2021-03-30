import { articles } from '../../../data'

export default function handler(req, res) {
  res.status(200).json(articles)
}

//you can make database calls in this folder, using data.js to mimic database

//when you create something in this folder its going to automatically be
//available at (yourURL)/api/(whatever you called your resource- in this case: articles)
//so in this example: https://localhost:3000/api/articles