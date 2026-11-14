import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages(https://azusumaho.github.io/task-board/)用のベースパス
export default defineConfig({
  base: "/task-board/",
  plugins: [react()],
});
