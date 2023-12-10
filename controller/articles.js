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
      res.status(200).json(articles);
    })
    .catch((err) => console.error(err));
}

// Get articles DESCEND
async function getDescArticles(req, res, next) {
  await articles
    .findAll()
    .then(function (articles) {
      res.status(200).json(articles.reverse());
    })
    .catch((err) => console.error(err));
}

// Get articles by Date Descending
async function getArticleDateDesc(req, res, next) {
  let article = ''

  try {
      article = await articles.findAll({ order:[['createdAt', 'DESC']] })
      if (article == null) {
          return res.status(404).json({ message: 'Artikel tidak ditemukan' })
      }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }
  res.article = article
  next()
}


// Get articles by ID
async function getArticleById(req, res, next) {
  var id = req.params.id
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

// Get articles by Category
async function getArticleByCategory(req, res, next) {
  var kategori = req.params.kategori
  let article = ''  

  try {
      article = await articles.findAll({where: { category : kategori}})
      if (article == null) {
          return res.status(404).json({ message: 'Artikel tidak ditemukan' })
      }
  } catch (err) {
      return res.status(500).json({ message: err.message })
  }
  res.article = article
  next()
}

function builkInsArticle(req, res, next){
  articles.bulkCreate(inputData)
      .then(()=> res.json({message: "Successfully Bulked Insert in Article !"}))
      .catch(err=> {
          console.error(err);
          res.status(500).json({
              error: err
          })
      });
}

export default { addArticle, getArticles, getDescArticles, getArticleDateDesc, getArticleById, getArticleByCategory, builkInsArticle};

const inputData =[
{
    title: "Judul",
    content:
    `
    `,
    urlImage: "/assets/images/news/namafile",
    category: "kategori",
    author: "nama"
},
{
    title: "Judul",
    content:
    `
    `,
    urlImage: "/assets/images/news/namafile",
    category: "kategori",
    author: "nama"
},
{
    title: "Judul",
    content:
    `
    `,
    urlImage: "/assets/images/news/namafile",
    category: "kategori",
    author: "nama"
},
{
    title: "Judul",
    content:
    `
    `,
    urlImage: "/assets/images/news/namafile",
    category: "kategori",
    author: "nama"
},
{
    title: "Judul",
    content:
    `
    `,
    urlImage: "/assets/images/news/namafile",
    category: "kategori",
    author: "nama"
}
];
