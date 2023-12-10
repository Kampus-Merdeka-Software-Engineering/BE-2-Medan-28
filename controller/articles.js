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

async function getArticles(req, res, next) {
  await articles
    .findAll()
    .then(function (articles) {
      res.status(200).json(articles.reverse());
    })
    .catch((err) => console.error(err));
}

async function getArticleById(req, res, next) {
  var id = req.params.id
  // console.log(id);
  let article = ''

  try {
      article = await articles.findByPk(id)
      if (article == null) {
          return res.status(404).json({ message: 'Artikel tidak ditemukan' })
      }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }
  res.article = article
  next()
}


function backfillArticle(req, res, next) {
  articles
    .bulkCreate([
      {
        title: "berita 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra massa ut lacinia porta. Sed vel nibh finibus, posuere justo semper, rutrum nisl. Vivamus id mattis risus. Sed id consequat massa. In condimentum massa quis felis efficitur, vitae luctus mauris finibus. Aliquam id pharetra arcu, in pretium ante. Curabitur efficitur, odio eu eleifend ullamcorper, mauris nunc consectetur leo, id ultrices justo felis sit amet nibh. In posuere iaculis nulla venenatis tempor. Vestibulum sodales, purus vel sodales porta, erat elit feugiat libero, in dapibus nisi mi eget diam. Curabitur sit amet lectus quis lacus iaculis ultricies. Donec turpis urna, luctus ut dolor id, venenatis laoreet nunc.",
        urlImage: "",
        category: "",
        author: "",
      },
      {
        title: "berita 2",
        content: "",
        urlImage: "",
        category: "",
        author: "",
      },
      {
        title: "berita 3",
        content: "",
        urlImage: "",
        category: "",
        author: "",
      },
      {
        title: "berita 4",
        content: "",
        urlImage: "",
        category: "",
        author: "",
      },
      {
        title: "berita 5",
        content: "",
        urlImage: "",
        category: "",
        author: "",
      },
    ])
    .then(() => res.json({ message: "Backfilled berhasil dilakukan" }))
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: err,
      });
    });
}

export default { addArticle, getArticles, backfillArticle, getArticleById };
