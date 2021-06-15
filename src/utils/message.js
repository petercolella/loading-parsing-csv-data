const message = (data) => {
  let message = `${(d3.csvFormat(data).length / 1024).toFixed(2)} kB
${data.length} rows
${data.columns.length} columns`;

  return message;
};

export default message;
