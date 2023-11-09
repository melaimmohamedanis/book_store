import express from"express";
import { Book } from "../models/bookmodel.js";
const router =express.Router();
router.post('/',async (request,response)=>{
    try {
        console.log("body",request.body)
        if(!request?.body?.title)
          {
                return response.status(400).send({
                    message:'Send all required fileds:title,author,publishYear'
                })
            }
            const newbook={
                title:request.body.title,
                author:request.body.author,
                publishYear:request.body.publishYear,
            };
            const book=await Book.create(newbook);
            return response.status(201).send(book);
    } catch (error) {
        console.log("errr",error)
        
    }
})
router.get("/",async (req,res)=>{
    try {
        const books=await Book.find({});
        return res.status(200).json(
          { count:books.length,
            data:books})
        
    } catch (error) {
        
    }
})
router.get("/:id",async (req,res)=>{
    try {
        const {id}=req.params
        console.log(id)
        const book=await Book.findById(id);
        console.log(book)
        return res.status(200).json(book)
        
    } catch (error) {
        
    }
})
router.put("/:id",async (req,res)=>{
    try {
        const {id}=req.params
        console.log(id)
        const result=await Book.findByIdAndUpdate(id,req.body);
        if(!result){
            return res.status(404).json({message:"book not found"})
        }
       
        return res.status(200).json({message:"book updated successfully"})
        
    } catch (error) {
        
    }
})
router.delete("/:id",async (req,res)=>{
    try {
       // const id=req.body.id;
       const {id}=req.params
    console.log(id)
        const result=await Book.findByIdAndDelete(id);
        console.log(result)
        if(!result){
            return res.status(404).json({message:"book not found"})
        }
       
        return res.status(200).json({message:"book deleted successfully"})
        
    } catch (error) {
        
    }
})
export default router;
/**
router.get("/",async (req,res)=>{
    try {
        
    } catch (error) {
        
    }
})
 */
