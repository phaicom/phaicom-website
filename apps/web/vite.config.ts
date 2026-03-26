import contentCollections from "@content-collections/vite";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => ({
  resolve: {
    tsconfigPaths: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    tailwindcss(),
    ...(mode === "test" ? [] : [contentCollections()]),
    Icons({ compiler: "jsx", jsx: "react" }),
    tanstackStart({
      srcDirectory: "src",
    }),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    ...(mode === "test" ? [] : [nitro()]),
  ],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.tsx",
  },
}));
