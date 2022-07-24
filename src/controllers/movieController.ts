import { Request, Response } from "express";

import { MovieModel } from "../models/Movies";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Error on create movie");
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const movieId = req.params.id;
    const movie = await MovieModel.findById(movieId);

    return res.status(200).json(movie);
  } catch (error) {
    console.error(error);
    return res.status(404).json({ error: "movie not exists" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();

    return res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error on get all movies" });
  }
}

export async function removeMovie(req: Request, res: Response) {
  try {
    const movieId = req.params.id;
    const movie = await MovieModel.findById(movieId);

    if (!movie) {
      return res.status(404).send("movie not exists");
    }

    await movie.delete();

    return res.status(200).json({ success: true, id: movieId });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error on delete movie" });
  }
}

export async function updateMovie(req: Request, res: Response) {
  try {
    const movieId = req.params.id;
    const data = req.body;
    const movie = await MovieModel.findById(movieId);

    if (!movie) {
      return res.status(404).send("movie not exists");
    }

    await MovieModel.updateOne({ _id: movieId }, data);

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error on update movie" });
  }
}
