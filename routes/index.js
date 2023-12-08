import express from "express"
import articleController from "../controller/articles.js";

const router = express.Router()

router.get("/articles", articleController.getArticles)

router.post("/articles", articleController.addArticle)

export default router