const db = require("../dbConfig");

module.exports = {
  add,
  findBy,
  find
};

function find() {
  return db("users as u").select("u.id","u.email");
}

function add(user) {
  return db("users").insert(user);
}

function findBy(email) {
  return db("users")
    .where({ email })
    .first();
}
