let main = require("./output/Main/index");

window.onload = () => {
  main.init();
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept("./output/Main/index", function () {
    let main = require("./output/Main/index");
    main.onreload();
  });

  import.meta.webpackHot.dispose((data) => {
    // Clean up and pass data to the updated module...
    console.log("TODO", data);
  });
}
