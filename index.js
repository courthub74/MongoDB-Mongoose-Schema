import mongoose from "mongoose";
import Blog from "./model/Blog.js";

mongoose.connect("mongodb+srv://mongo:ws9aNiYfRZiPK2Zy@courdevscluster.rs7vdal.mongodb.net/test");

// Create a new blog post object
// const article = await Blog.findById
// ("643730e3e4a4018322bf0826","title slug content").exec;

// article.title = "The Most Awesomest Post!";
// await article.save();

// // Insert the article in our MongoDB database
// await article.save();

// // Find a single blog post
// // const firstArticle = await Blog.findOne({});
// console.log(article);

const blog = await Blog.deleteOne({ title: "Awesome Post!"})

console.log(blog)