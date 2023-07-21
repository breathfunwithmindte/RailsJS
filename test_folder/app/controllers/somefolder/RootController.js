const Rails = require("../../../../framework/Rails");

/**
 * % @RestController
 * 
 * % @Docs := some docs ;; helklo world
 * % @Scope := some scope
 * % @Classname := Article
 * % @Entity := Some entity
 * % @Version := 1.0.0
 * % @Visibility := some access
 * % @RunBefore := passport | index, index1 ;; passport
 * % @RunBefore := passport ;; repository(read_many) | index ;; repository(create_one) | create
 * % @RunAfter :=  render(*)
 * % @Inject := repositories.user ;;
 */
module.exports = class RootController extends Rails.RestController
{

  constructor (req, res, options)
  {
    super(req, res, options)
    //console.log(this, "###");
  }

  async passport ()
  {
    
  }

  someindex = 0;


  /**
   * % @Repository := user
   * % @RepoMethod := read_many 
   * % @Validation := root::create_one
   */
  async index () {}


  /**
   * % @Replace := repository::user::read_many
   * % @Validation := create_user
   * % @Inject     := repositories::user
   */
  async index2 (injected_data)
  {
    //console.log({a: this});
    this.someindex ++;
    this.State.set("something", "\t wowowoow Kristina" + this.someindex);
  }

  async index1 ()
  {
    //console.log({a: this});
    this.someindex ++;
    this.State.set("something", "\t wowowoow Kristina" + this.someindex);
  }

  async form () {
    this.State.set("wowowowoowow", "Kristina trash");
    this.Response.status(200).json({
      message: "ok its working === " + this.State.get("wowowowoowow")
    });
  }

  async execute_this_too ()
  {
    this.Response.status(200).json({keys: this.State.keys()});
  }
  
}

