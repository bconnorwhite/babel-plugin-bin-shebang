import { resolve } from "path";
import { test, expect } from "@jest/globals";
import { transform } from "@babel/core";

import binShebang, { shebang } from "../source";

const src = "console.log('ok');";

const srcWithShebang = `#!/some/shebang\n${src}`

test(("basic js"), () => {
  const dest = transform(src, {
    filename: resolve(process.cwd(), "source/dir/no-shebang.js"),
    sourceFileName: "../../source/dir/no-shebang.js",
    plugins: [binShebang]
  });
  expect(dest?.code).toBe(`#!${shebang}\n${src}`);
});

test(("basic ts"), () => {
  const dest = transform(src, {
    filename: resolve(process.cwd(), "source/dir/no-shebang.ts"),
    sourceFileName: "../../source/dir/no-shebang.ts",
    plugins: [binShebang]
  });
  expect(dest?.code).toBe(`#!${shebang}\n${src}`);
});

test(("undefined filename"), () => {
  const dest = transform(src, {
    plugins: [binShebang]
  });
  expect(dest?.code).toBe(src);
});

test(("already has shebang"), () => {
  const dest = transform(srcWithShebang, {
    filename: resolve(process.cwd(), "source/dir/shebang.ts"),
    sourceFileName: "../../source/dir/shebang.ts",
    plugins: [binShebang]
  });
  expect(dest?.code).toBe(srcWithShebang);
});

test(("string bin"), () => {
  process.env.TEST_STRING = "1";
  const dest = transform(src, {
    filename: resolve(process.cwd(), "source/dir/no-shebang.js"),
    sourceFileName: "../../source/dir/no-shebang.js",
    plugins: [binShebang]
  });
  expect(dest?.code).toBe(`#!${shebang}\n${src}`);
})
