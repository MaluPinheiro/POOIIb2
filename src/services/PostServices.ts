import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class PostService {
    constructor(){

    }

    async listPost(id?: string){
        try{
            if(id){
                const post = await prisma.post.findUnique({
                    where: {
                        id
                    }
                });
                return post;
            }else{
                const posts = await prisma.post.findMany();
                return posts;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createPost(post: Prisma.PostCreateInput){
        try{
            const newpost = await prisma.post.create({
                data: post
            });
            return newpost;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updatePost(id: string, post: Prisma.PostCreateInput){
        try{
            const updatedPost = await prisma.post.update({
                where: {
                    id
                },
                data: post
            });

            return updatedPost;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deletePost(id: string){
        try{
            const deletedPost = await prisma.post.delete({
                where: {
                    id
                }
            });

            return deletedPost;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new PostService();