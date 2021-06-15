import React, { useEffect, useState } from "react";
import message from "./utils/message";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const styles = {
  pre: {
    fontSize: "2rem",
  },
};

// The previous method for fetching and parsing data is commented outerHeight.

const FetchContainer = () => {
  // const [data, setData] = useState("");
  const [data2, setData2] = useState(null);

  useEffect(() => {
    // const abortController = new AbortController();
    // const { signal } = abortController;

    //     const fetchTextAsync = async (url) => {
    //       try {
    //         const response = await fetch(url, { signal });
    //         const text = await response.text();
    //         if (!signal.aborted) {
    //           const data = d3.csvParse(text);
    //           let message = `${(text.length / 1024).toFixed(2)} kB
    // ${data.length} rows
    // ${data.columns.length} columns`;
    //           setData(message);
    //         }
    //       } catch (err) {
    //         console.log(err);
    //       }
    //     };

    //     fetchTextAsync(csvUrl);

    d3.csv(csvUrl).then(setData2);

    // return () => {
    //   abortController.abort();
    // };
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <h1>Our data details:</h1>
      {/* <pre style={styles.pre}>{data ? data : "Waiting for data..."}</pre> */}
      <pre style={styles.pre}>
        {data2 ? message(data2) : "Waiting for data..."}
      </pre>
    </div>
  );
};

export default FetchContainer;
