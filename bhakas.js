import bhakas from "./app.js";
const bhakas_port = 3000;

bhakas.listen(bhakas_port, () => {
  console.log(`bhakas running at ${bhakas_port}`);
});
