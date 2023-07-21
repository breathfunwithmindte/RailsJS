const HtmlEngineImpl = require("../framework/libs/html_engine/HtmlEngineImpl");
const Application = require("./config/application");

(async () => {


  const app = new Application();

  await app.run();
  
  return;

  const htmlEngine = new HtmlEngineImpl();


  htmlEngine.div(
    htmlEngine.h1(
      "Hello, World {{ user.username }} !!", "Kristina bitch", htmlEngine.h1("Inside h1"), { class: "some class", "@onclick": () => {} }
    ),
    htmlEngine.h1("Kristina trash"),
    htmlEngine.img({ src: "hello world src" })
  )




  await htmlEngine.build()

  console.log(htmlEngine.callbacks)

  require("fs").writeFileSync(require("path").resolve() + "/index.html", htmlEngine.htmls.join("\n"));
  console.log(htmlEngine.htmls)


  //htmlEngine.elements.forEach(v => v.log());

})();