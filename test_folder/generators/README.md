

# gem gen model {modelname} field1;;field2;;field3

# gem gen controller {controllername} method1;;method2;;method3

# gem gen view {viewname} {viewtype < form | table | none > }

# gem gen scaffold {sectorname} { scaffold type < view | rest | none > } field1;;field2;;field3



// default methods VIEW     index, form, one
// default methods REST     index, create, delete, update, one

// default pages  index, form, one


Article     ->    RestController --json --xml
ArticlePage ->    ViewController --html