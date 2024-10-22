// model folder is responsible for interacting directly with the database

import pool from "../configs/db.js";

class UserModel {
  #params = [];
  #sql = "";

  async createUser(email, password) {
    console.log(email, password);
    this.#sql = "INSERT INTO users(email, password) VALUES($1, $2)";
    this.#params = [email, password];

    try {
      const result = await pool.query(this.#sql, this.#params);
      return result;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  }
}

export default new UserModel();
