import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import PostServices from "../services/PostServices";

class PostController{

    constructor(){}

    async createPost(req: Request, res: Response){
        const dados: Prisma.PostCreateInput = req.body;
        
        if(dados.title !== ""){
            const newpost = await PostServices.createPost(dados)
            res.status(200).json({
                status: 'ok',
                newpost: newpost
            });
        }else{
            res.status(400).json({
                status: 'error',
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listPost(req: Request, res: Response){
        const posts = PostServices.listPost();

        res.status(200).json({
            status: 'ok',
            posts: posts
        })
    }

    async updatePost(req: Request, res: Response){
        res.send('Update post');
    }

    async deletePost(req: Request, res: Response){
        res.send('Delete post');
    }
}

export default new PostController;