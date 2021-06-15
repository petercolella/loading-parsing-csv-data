import React, { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const styles = {
  pre: {
    fontSize: "2rem",
  },
};

const FetchContainer = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchTextAsync = async (url) => {
      try {
        const response = await fetch(url, { signal });
        const text = await response.text();
        if (!signal.aborted) {
          const data = d3.csvParse(text);
          let message = `${(text.length / 1024).toFixed(2)} kB
${data.length} rows
${data.columns.length} columns`;
          setData(message);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchTextAsync(csvUrl);

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div style={{ margin: 20 }}>
      <h1>Our data details:</h1>
      <pre style={styles.pre}>{data ? data : "Waiting for data..."}</pre>
    </div>
  );
};

export default FetchContainer;
