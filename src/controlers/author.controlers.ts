import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const authorRepository = new PrismaClient().author;



// ------------------- CREATE ------------------
export const createAuthor = async (req: Request, res:Response) => {
    try {
        await authorRepository.create({
            data: req.body,
        });

        res.status(201).send({
            msg: "succes create author"
        });

    } catch(error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed create author",
            err: error,
        });
    }
}



// --------------------- READ -------------------
export const getAuthorByID = async (req: Request, res: Response) => {
    try {
        const authorId = req.params.id;
        const author = await authorRepository.findUnique({
            where: {
                id: authorId,
            },
            include: {
                books: true,
            },
        });


        res.status(200).send({
            msg: "Succes get author",
            data: author,
        });
    } catch (error) {
        res.status(500).send({
            msg: "Failled get author",
            error: error,
        });
    }
}


// ------------------ UPDATE -----------------------
export const updateAuthor = async (req: Request, res: Response) => {
    try {
        const authorId = req.params.id;
        const data = req.body;

        await authorRepository .update({
            where: { id: authorId },
            data,
        });


        res.status(201).send({
            msg: "Succes update author",
        });
    } catch (error) {
        res.status(500).send({
            msg: "Failed update author",
            error: error,
        });
    }
}




// ------------------ DELETE ----------------------
export const deleteAuthor = async (req: Request, res: Response) => {
    try {
        await authorRepository.delete({
            where: {id: req.params.id},
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed delete author",
            error: error,
        })
    }
}




// ----------------- READ ALL ---------------------
export const getAllAuthor = async (req: Request, res: Response) => {
    try {
        const author = await authorRepository.findMany({
            include: {
                books: true,
            }
        });

        res.status(200).send({
            msg: "Succes get all authors",
            data: author,
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed get all authors",
            error: error,
        });
    }
}