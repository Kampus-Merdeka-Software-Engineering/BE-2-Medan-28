import express from "express"
import articleController from "../controller/articles.js"
import contactController from "../controller/contacts.js"

const router = express.Router()

router.get("/articles", articleController.getArticles);
router.get("/articles/index", articleController.getDescArticles);
router.get("/articles/:id", articleController.getArticleById, (req, res) => {
    res.send(res.article);
});
router.get("/articles/category/:kategori", articleController.getArticleByCategory, (req, res) => {
    res.send(res.article);
});

router.post("/articles", articleController.addArticle);

router.get("/contacts", contactController.getContacts);

router.post("/sendContacts", contactController.addContact);

router.post('/bulkInsert', articleController.builkInsArticle);

export default router