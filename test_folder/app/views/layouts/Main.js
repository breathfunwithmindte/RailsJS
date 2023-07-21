class TemplateView
{

  html (){return this}
  h1(){}
  h2(){}
  h3(){}
  h4(){}
  h5(){}
  h6(){}
  image(){}
  video(){}
  div(){}
  element(){}
  doctype(){}
  head(){}
  meta(){}
  title(){}
  link(){}
  body(){}
  html(){}
  strong(){}

  main (){}
  aside(){}

  view (){}

  component (){}

  btn () {}

  render(){}
  build(){}

}

const buildobj = {
  view: {
    doctype: {},
    html: {
      head: {

      },
      body: {
        div: {

        }
      }
    }
  }
}

const buildmap = new Map();
buildmap.set("view", {})
buildmap.set("view.doctype", `<!DOCTYPE html>`)
buildmap.set("view.html", `<html lang="en">--!%%rails_view_component%%!--</html>`)
buildmap.set("view.html.head", `<head>--!%%rails_view_component%%!--</head>`)
buildmap.set("view.html.body", `<body>--!%%rails_view_component%%!--</body>`)
buildmap.set("view.html.body.div", `<div>--!%%rails_view_component%%!--</div>`)
buildmap.set("view.html.body.div.main", `<main>--!%%rails_view_component%%!--</main>`)
buildmap.set("view.html.body.div.aside", `<aside>--!%%rails_view_component%%!--</aside>`)
buildmap.set("view.html.body.div.aside.btn", `<button @rails-id='some id' style="color: red">Click me</button>`)

let html = "";
buildmap.forEach((v, k) => {
  /// html = html + 
})

module.exports = class MainView extends TemplateView
{

  async build ()
  {
    return this.view(
      this.doctype(),
      this.html(
        [
          this.head(
            [
              this.meta({ charset: "UTF-8" }),
              this.meta({ "http-equiv": "X-UA-Compatible", "content": "IE=edge" }),
              this.meta({ "name": "viewport", "content": "width=device-width, initial-scale=1.0" }),
              this.title(["Document"])
            ]
          ),
          this.body(
            [
              this.div(
                [
                  this.main([
                    this.component("root::page")
                  ]),
                  this.aside([
                    this.btn(["Click me"], {
                      "onclick": "somethind(event)",
                      "@onclick": (app, element) => {
                        // do something
                      }
                    })
                  ])
                ]
              )
            ]
          )
        ]
      )
    )
  }

}