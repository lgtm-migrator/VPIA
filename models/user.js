/* var bookshelf = require("../config/db");
bookshelf.plugin("registry");

var User = bookshelf.Model.extend({
  tableName: "users",
  articles: function() {
    return this.hasMany("Article");
  }
});

module.exports = bookshelf.model("User", User);
 */
var schema = require("../config/db");

var User = schema.define("user", {
  name: { type: schema.String, limit: 255 },
  email: { type: schema.String, limit: 255 },
  password: { type: schema.String, limit: 255 },
  about: { type: schema.String, limit: 255 },
  created_at: { type: schema.Date },
  updated_at: { type: schema.Date }
});

schema.automigrate();

module.exports = User;