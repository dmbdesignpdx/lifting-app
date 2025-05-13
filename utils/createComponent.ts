import type { BunFile } from "bun";
import { parseArgs } from "util";
const __dirname = import.meta.dir;

const PATH = "./components";

const { values, positionals } = parseArgs({
  args: Bun.argv,
  options: {
    element: {
      type: "string",
      default: "div",
      short: "e",
    },
  },
  strict: true,
  allowPositionals: true,
});

const [,,name] = positionals;

const _component = Bun.file(`${__dirname}/_template/component.txt`);
const _styles = Bun.file(`${__dirname}/_template/styles.txt`);
const _test = Bun.file(`${__dirname}/_template/test.txt`);
const _types = Bun.file(`${__dirname}/_template/types.txt`);
const _index = Bun.file(`${__dirname}/_template/index.txt`);


async function replaceText(file: BunFile) {
  const text = await file.text();
  return text.replaceAll("%%#", name);
}


const types = await replaceText(_types);
const component = await replaceText(_component);
const test = await replaceText(_test);
// const styles = await replaceText(_styles);
const index = await replaceText(_index);


await Bun.write(`${PATH}/${name}/${name}.tsx`, component.replaceAll("#%%", values.element));
await Bun.write(`${PATH}/${name}/${name}.styles.ts`, _styles);
await Bun.write(`${PATH}/${name}/${name}.test.tsx`, test);
await Bun.write(`${PATH}/${name}/types.d.ts`, types);
await Bun.write(`${PATH}/${name}/index.ts`, index);
