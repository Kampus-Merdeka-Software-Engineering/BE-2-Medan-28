import { DataTypes } from "sequelize";

import db from "../config/Database.js";

const contacts = db.define("contacts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  instantion: {
    type: DataTypes.STRING,
  },
  message: {
    type: DataTypes.TEXT('long'),
  },
});

export default contacts;