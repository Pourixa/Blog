const express = require("express")
const postRouter = express.Router()
const err = require("../lib/error")
const db = require("../lib/prisma")
const {authenticateToken} = require("../middleware/auth")
postRouter.get("/",async (req,res,next) => {
    try {
        const posts = await db.prisma.post.findMany();
    res.json(posts)
    }catch(e) {
        next(new err("Something went wrong." , 500))
    }
})

postRouter.get("/:id/comments", async (req, res, next) => {
    try {
        const comments = await db.prisma.comment.findMany({
            where: {
                postID: parseInt(req.params.id)
            },
                include: {
                    user:{
                        select:{
                            isAuthor:true,
                            username:true
                        }
                    }
                }
        });

        res.json(comments);
    } catch (e) {
        next(new err("Something went wrong.", 500));
    }
});

postRouter.get("/:id",async (req,res,next) => {
    try {
        const post = await db.prisma.post.findUnique({where:{id:parseInt(req.params.id)}});
    res.json(post)
    }catch(e) {
        next(new err("Something went wrong." , 500))
    }
})


postRouter.post("/",authenticateToken,async (req,res,next) => {
    try {
    if(!req.user.isAuthor)
        return next(new err("You are not an author.", 403));
    await db.prisma.post.create({
        data:{
            title:req.body.title,
            text:req.body.text,
            isPublic:true,
            userID:req.user.username
        }
    })
    res.json("Blog added.")
        }catch(e) {
        next(new err("Something went wrong." , 500))
    }
})

postRouter.post("/:id/comments",authenticateToken,async (req,res,next) => {
    try {
        await db.prisma.comment.create({
            data:{
            text:req.body.text,
            userID:req.user.username,
            postID:parseInt(req.params.id)
        }})
        res.json("Comment added.")
    }catch(e) {
        next(new err("Something went wrong." , 500))
    }
})

postRouter.put("/:id/comments/:commentID",authenticateToken, async (req,res,next) => {
    try {
        if(req.user.isAuthor)
        {
            await db.prisma.comment.update({where:{
                id:parseInt(req.params.commentID)
            },data:{
                text:req.body.text
            }})
            return res.json("Comment edited.")
        }
        else {
            const comment = await db.prisma.comment.findUnique({where:{
                id:parseInt(req.params.commentID)
            }}) 
            if(req.user.username === comment.userID)
            {
            await db.prisma.comment.update({where:{
                id:parseInt(req.params.commentID)
            },data:{
                text:req.body.text
            }}) 
            return res.json("Comment edited.")
            } else {
                next(new err("You are not authorized to edit this comment.",403))
            }
        }
    } catch(e){
        next(new err("Something went wrong." , 500))
    }
})

postRouter.delete("/:id/comments/:commentID",authenticateToken,async (req,res,next) => {
    try {
        if(req.user.isAuthor)
        {
            await db.prisma.comment.delete({where:{
                id:parseInt(req.params.commentID)
            }})
        return res.json("Comment deleted.")
        }
        else {
            const comment = await db.prisma.comment.findUnique({where:{
                id:parseInt(req.params.commentID)
            }}) 
            if(req.user.username === comment.userID)
            {
            await db.prisma.comment.delete({where:{
                id:parseInt(req.params.commentID)
            }}) 
            return res.json("Comment deleted.")
            } else {
                next(new err("You are not authorized to delete this comment.",403))
            }
        }
    } catch(e){
        next(new err("Something went wrong." , 500))
    }
})

postRouter.put("/:id",authenticateToken,async (req,res,next) => {
    try {
        const post = await db.prisma.post.findUnique({
        where: { id: parseInt(req.params.id) }
        });

        if (!post) {
        return next(new err("Post not found", 404));
        }

        if (post.userID !== req.user.username) {
        return next(new err("You are not the author of this post.", 403));
        }

        await db.prisma.post.update({
        where: { id: parseInt(req.params.id) },
        data: {
            title: req.body.title,
            text: req.body.text,
            isPublic: req.body.isPublic,
        },
        });      res.json("Blog updated.")
       }catch(e) {
        next(new err("Something went wrong." , 500))
    }
})

postRouter.delete("/:id",authenticateToken, async (req,res,next) => {
    try {
        const post = await db.prisma.post.findUnique({
        where: { id: parseInt(req.params.id) }
        });

        if (!post) {
        return next(new err("Post not found", 404));
        }

        if (post.userID !== req.user.username) {
        return next(new err("You are not the author of this post.", 403));
        }

        await db.prisma.post.delete({
            where:{
                id:parseInt(req.params.id)
            }
        })
            res.json("Blog deleted.")
    } catch(e) {
        next(new err("Something went wrong.",500))
    }
})
module.exports = postRouter