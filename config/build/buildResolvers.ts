import { ResolveOptions } from "webpack";
import path from "path";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    alias: {
      src: path.resolve("./src"),
    },
  };
}
