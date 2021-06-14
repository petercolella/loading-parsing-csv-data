import React, { useEffect, useState } from "react";

const csvUrl =
  "https://gist.githubusercontent.com/curran/b236990081a24761f7000567094914e0/raw/cssNamedColors.csv";

const FetchContainer = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    const fetchTextAsync = async (url) => {
      try {
        const response = await fetch(url, { signal });
        const data = await response.text();
        if (!signal.aborted) {
          setData(data);
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
      <h1>Our data will be below:</h1>
      <p>{data ? data : "Waiting for data..."}</p>
    </div>
  );
};

export default FetchContainer;
