const PrimaryRepository = require("./PrimaryRepository");

/**
 * 
 */
module.exports = class UserRepository extends PrimaryRepository 
{
  

  async read_many ()
  {
    await this.model.find();
  }

}