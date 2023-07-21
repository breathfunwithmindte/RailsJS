const Rails = require("../../../framework/Rails");

/**
 * % @Validation
 * % @Classname := root
 */
module.exports = class RootValidation extends Rails.Validation
{
  
  /**
   * % @wowo
   */
  async build ()
  {
    console.log("###")
    this.classmethodnames = ["create_one", "update_one"];
    this.setQueryRequired("username");
    this.setQueryDefaultValue("username", "@kristina~2628");
    this.setQueryDefaultValue("fullName", "Kristina");
    this.classmethodnames = ["create_one"];
    this.addQuerySize("username", 12, 255);
    this.addQuerySize("fullName", 12, 255);

  }

  /**
   * % @Methodnames := create_one ;; update_one
   * % @Required
   * % @Size 12:255
   */
  username;


}