import { Router } from "express";
import {
    createAuthor,
    deleteAuthor,
    getAllAuthor,
    getAuthorByID,
    updateAuthor
} from "../controlers/author.controlers";


const authorRouter = Router();

authorRouter.post("/", createAuthor);
authorRouter.put("/:id", updateAuthor);
authorRouter.get("/", getAllAuthor);
authorRouter.get("/:id", getAuthorByID);
authorRouter.get("/:id", deleteAuthor);


export default authorRouter;