import { Router } from "express";
import {
    createBoook,
    deleteBook,
    getAllBook,
    getBookById,
    updateBook 
} from "../controlers/book.controler";

const bookRouter = Router();

bookRouter.post("/", createBoook);
bookRouter.put("/:id", updateBook);
bookRouter.get("/", getAllBook);
bookRouter.get("/:id", getBookById);
bookRouter.delete("/:id", deleteBook);

export default bookRouter;