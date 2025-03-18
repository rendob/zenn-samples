import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { validateEnv } from "./src/env/validation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: "environment variables validation",
      configResolved: (config) => {
        // 環境変数のバリデーション
        validateEnv(config.env);
      },
    },
  ],
});
