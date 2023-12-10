import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const articles = db.define("articles", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
  },
  content: {
    type: DataTypes.TEXT('long'),
  },
  urlImage: {
    type: DataTypes.STRING,
  },
  category: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
  }
});

export default articles;