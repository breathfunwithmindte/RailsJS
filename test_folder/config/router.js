const Rails = require("../../framework/Rails");

module.exports = class Router extends Rails.SysRouter
{


  /** @param {import("../../framework/core/Application")} instance */
  async mapRoutes (instance)
  {


    // this.root("root#homepage");
    this.post("/api/v1", "article#index");
    this.get("/api/v1", "article#form");

    // this
    //     .namespace("/api/v1/", "passport ;; logger")
    //     .get("/article", "article#index")
    //     .post("/article", "article#create_one")
    //     .namespace(null, null);


    // this.scafold("article", ["index", "something"]);

  }

}