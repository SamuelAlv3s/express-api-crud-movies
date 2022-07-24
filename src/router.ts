import { Request, Response, Router } from "express";
import {
  createMovie,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from "./controllers/movieController";
import { validate } from "./middlewares/handleValidator";
import { movieCreateValidation } from "./middlewares/movieValidator";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send("Working");
});

router.post("/movie", movieCreateValidation(), validate, createMovie);
router.get("/movie/:id", findMovieById);
router.get("/movies", getAllMovies);
router.delete("/movie/:id", removeMovie);
router.patch("/movie/:id", updateMovie);

export default router;
