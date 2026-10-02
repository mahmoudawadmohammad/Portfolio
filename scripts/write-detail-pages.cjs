/**
 * Writes *_details.html from scripts/detail-page-skeleton.html
 * Run: node scripts/write-detail-pages.cjs
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const skel = fs.readFileSync(
  path.join(__dirname, "detail-page-skeleton.html"),
  "utf8"
);

const pages = {
  "lister_details.html": "lister",
  "mallToGo_details.html": "mallToGo",
  "my_medicine_details.html": "my_medicine",
  "smart_pill_box_details.html": "smart_pill_box",
};

for (const [filename, id] of Object.entries(pages)) {
  const out = skel.replace(/__DETAIL_ID__/g, id);
  fs.writeFileSync(path.join(root, filename), out, "utf8");
  console.log("Wrote", filename);
}
