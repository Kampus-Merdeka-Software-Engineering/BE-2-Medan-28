import articles from "../model/contact.js";

async function addContact(req, res, next) {
  await articles
    .create({
      id: req.body.id,
      name: req.body.name,
      email: req.body.email,
      instantion: req.body.instantion,
      message: req.body.message,
    })
    .then(function () {
      res.status(201).json({
        message: "kontak berhasil ditambahkan",
      });
    })
    .catch(function (err) {
      res.status(500).json({
        error: err,
      });
    });
}

async function getContacts(req, res, next) {
  await articles
    .findAll()
    .then(function (articles) {
      res.status(200).json(articles);
    })
    .catch((err) => console.error(err));
}

export default { addContact, getContacts };
