import { resolve } from "path";
import { defineConfig } from "vite";
import typescript from "@rollup/plugin-typescript";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [typescript({ outDir: "dist" }), vanillaExtractPlugin()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, "lib/main.ts"),
      name: "MyLib",
      fileName: "my-lib",
    },
  },
});
