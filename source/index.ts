import { NodePath } from "@babel/core";
import { Program } from "@babel/types";
import { resolve, parse } from "path";
import { getPackageJSON } from "@bconnorwhite/package";

type Path = NodePath<Program> & {
  hub: {
    file: {
      shebang: string;
    }
  }
}

type State = {
  filename: string;
  file: {
    opts: {
      sourceFileName: string;
    }
  }
}

export const shebang = "/usr/bin/env node";

export default function plugin() {
  // eslint-disable-next-line no-sync
  const pkg = getPackageJSON().readSync();
  const binRelatives: string[] = [];
  if(typeof pkg?.bin === "string") {
    binRelatives.push(pkg.bin);
  } else if(typeof pkg?.bin === "object") {
    binRelatives.push(...Object.values(pkg.bin));
  }
  const binPaths = binRelatives.map((relative) => resolve(process.cwd(), relative));
  return {
    visitor: {
      Program(path: Path, state: State) {
        if(state.filename && !path.hub.file.shebang && state.file.opts.sourceFileName) {
          const match = binPaths.some((binPath) => {
            const bin = parse(binPath);
            const source = parse(state.filename);
            if(bin.name === source.name && (source.ext === ".ts" || source.ext === ".js")) {
              const binRelativeSource = resolve(bin.dir, state.file.opts.sourceFileName);
              return binRelativeSource === state.filename;
            } else {
              return false;
            }
          });
          if(match) {
            path.hub.file.shebang = shebang;
          }
        }
      }
    }
  }
}
