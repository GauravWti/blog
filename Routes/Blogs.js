
const { addBlog, allBlog, getAllRelevantBlogs, getParticularBlog, addFavCategories, getAllFavCategories, deleteBlogById, updateBlogById } = require('../controller/BlogController.js');
const { Router } = require('express');

const BlogRouter = Router(); // Create an instance of the Router


BlogRouter.post('/addFavCategories',addFavCategories);
BlogRouter.get('/getFavCategoriesblog',getAllFavCategories);
BlogRouter.post('/addblog', addBlog);
BlogRouter.get('/allBlog', allBlog);
BlogRouter.get('/blogs/:slug', getParticularBlog);
BlogRouter.get('/getallRelativeBlog/:categoryWords', getAllRelevantBlogs);
BlogRouter.delete('/deletebyid',deleteBlogById);
BlogRouter.put('/updateblogbyId/:id',updateBlogById);

module.exports = BlogRouter;