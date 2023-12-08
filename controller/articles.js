import articles from "../model/article.js";

async function addArticle(req, res, next) {
  await articles
    .create({
      id: req.body.id,
      title: req.body.title,
      content: req.body.content,
      urlImage: req.body.urlImage,
      category: req.body.category,
      author: req.body.author,
    })
    .then(function () {
      res.status(201).json({
        message: "artikel berhasil ditambahkan",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
}

function getArticles(req, res, next) {
  articles
    .findAll()
    .then(function (articles) {
      res.status(200).json(articles);
    })
    .catch((err) => console.error(err));
}

export default { addArticle, getArticles };
