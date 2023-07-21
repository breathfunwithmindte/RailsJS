const Rails = require("../../../framework/Rails");

/**
 * % @Ignore
 */
module.exports = class PrimaryRepository extends Rails.MongoDBRepository
{

  /**
   * 
   * @param {import("mongoose").Model} model 
   */
  constructor (model) { this.model = model; }


  read_many ()
  {
    this.model.find(query)
  }

}