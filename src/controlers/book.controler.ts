import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";


const bookRepository = new PrismaClient().book;




export const createBoook = async (req: Request, res: Response) => {
    try {
        const { title, author_id } =  req.body;
        await bookRepository.create({
            data: {
                title,
                authorId: author_id,
            },
        });

        res.status(201).send({
            msg: "Succes create book",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed create book",
            error: error,
        });
    }
}



export const updateBook = async (req: Request, res: Response) => {
    try {
        const bookId = req.params.id;
        const data = req.body;
        await bookRepository.update({
            where: { id: bookId },
            data,
        });


        res.status(201).send({
            msg: "Success update book",
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed update book",
            error: error,
        })
    }
}




export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await bookRepository.findUnique({
            where: { id: req.params.id }
        });

        res.status(200).send({
            msg: "Succes get book",
            data: book,
        });
    } catch (error) {
        console.error(error)
        res.status(500).send({
            msg: "Failled get book",
            error: error,
        });
    }
}




export const getAllBook = async (req: Request, res: Response) => {
    try {
        const book = await bookRepository.findMany();


        res.status(200).send({
            msg: "Succes get all books",
            data: book,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed get all books",
            error: error,
        });
    }
}



export const deleteBook = async (req: Request, res: Response) => {
    try {
        await bookRepository.delete({
            where: {id: req.params.id},
        });

        res.status(200).send({
            msg: "Success delete books"
        })
    } catch (error) {
        console.error(error);
        res.status(500).send({
            msg: "Failed delete books",
            error: error,
        })
    }
}
