import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const App = () => {
  useEffect(() => {
    const fetchText = async (url) => {
      try {
        const response = await fetch(url);
        return await response.text();
      } catch (err) {
        console.log(err);
      }
    };

    fetchText(csvUrl).then((data) => console.log(data));
  }, []);

  return <h1>Hello World!</h1>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
