export function getPackageJSON() {
  return {
    readSync: () => ({
      bin: {
        "shebang": "build/dir/shebang.js",
        "no-shebang": "build/dir/no-shebang.js"
      }
    })
  }
}
