import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import CommentServices from "../services/CommentServices";

class CommentController{

    constructor(){}

    async createComment(req: Request, res: Response){
        const dados: Prisma.CommentCreateInput = req.body;
        
        if(dados.title !== "" && dados.comment !== ""){
            const newcomment = await CommentServices.createComment(dados)
            res.status(200).json({
                status: 'ok',
                newcomment: newcomment
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listComment(req: Request, res: Response){
        const comments = CommentServices.listComment();

        res.status(200).json({
            status: 'ok',
            comments: comments
        })
    }

    async updateComment(req: Request, res: Response){
        res.send('Update comment');
    }

    async deleteComment(req: Request, res: Response){
        res.send('Delete comment');
    }
}

export default new CommentController;