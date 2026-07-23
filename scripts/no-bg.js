/*
import { removeBackground } from "@imgly/background-removal-node";
import fs from "fs";
import path from "path";

const inputDir = "public/images";
const outputDir = "public/images/no-bg";

async function run() {
  fs.mkdirSync(outputDir, { recursive: true });
  const files = fs.readdirSync(inputDir).filter(f => /\.(jpg|jpeg|png)$/i.test(f));

  for (const file of files) {
    console.log("Processing:", file);
    const blob = await removeBackground(path.join(inputDir, file));
    const buffer = Buffer.from(await blob.arrayBuffer());

    // same exact filename, no rename
    fs.writeFileSync(path.join(outputDir, file), buffer);
  }
  console.log("Done — check public/images/no-bg/");
}

run();
*/
