import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import { validateCustomEnv, validateViteEnv } from "./src/env/validation";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // .env で設定する環境変数用のバリデーション
  const customEnv = validateCustomEnv(loadEnv(mode, process.cwd()));

  return {
    plugins: [
      react(),
      {
        name: "environment variables validation",
        configResolved: (config) => {
          // Vite 側で設定される環境変数用のバリデーション
          validateViteEnv(config.env);
        },
      },
    ],
    build: {
      // バリデーション済み環境変数の使用例
      sourcemap: customEnv.VITE_GENERATE_SOURCE_MAP,
    },
  };
});
