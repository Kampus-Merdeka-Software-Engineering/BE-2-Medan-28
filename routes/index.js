import express from "express"
import articleController from "../controller/articles.js"
import contactController from "../controller/contacts.js"

const router = express.Router()

router.get("/articles", articleController.getArticles)

router.post("/articles", articleController.addArticle)

router.get("/contacts", contactController.getContacts)

router.post("/contacts", contactController.addContact)

export default router