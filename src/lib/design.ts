import { readFileSync } from "fs";
import path from "path";

export function readDesign(name: string) {
  return readFileSync(path.join(process.cwd(), "src/design/screens", `${name}.html`), "utf8");
}
