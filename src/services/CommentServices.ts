import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class CommentService {
    constructor(){

    }

    async listComment(id?: string){
        try{
            if(id){
                const comment = await prisma.comment.findUnique({
                    where: {
                        id
                    }
                });
                return comment;
            }else{
                const comments = await prisma.comment.findMany();
                return comments;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createComment(comment: Prisma.CommentCreateInput){
        try{
            const newcomment = await prisma.comment.create({
                data: comment
            });
            return newcomment;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateComment(id: string, comment: Prisma.CommentCreateInput){
        try{
            const updatedComment = await prisma.comment.update({
                where: {
                    id
                },
                data: comment
            });

            return updatedComment;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteComment(id: string){
        try{
            const deletedComment = await prisma.comment.delete({
                where: {
                    id
                }
            });

            return deletedComment;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new CommentService();