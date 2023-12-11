import express from "express";
import articleController from "../controller/articles.js";
import contactController from "../controller/contacts.js";

const router = express.Router();

router.get("/articles", articleController.getArticles);

router.get("/desc-articles", articleController.getArticlesDesc);

router.post("/articles", articleController.addArticle);

router.get("/articles/:id", articleController.getArticleById, (req, res) => {
  res.send(res.article);
});

router.post("/backfill-articles", articleController.backfillArticle);

router.get("/contacts", contactController.getContacts);

router.post("/contacts", contactController.addContact);

export default router;
