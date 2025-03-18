import { z } from "zod";

/** Vite 側で設定される環境変数のスキーマ */
const viteEnvSchema = z.object({
  MODE: z.enum(["development", "staging", "production"]),
});

/** .env で設定する環境変数のスキーマ */
const customEnvSchema = z.object({
  VITE_SAMPLE_TITLE: z.string(),
  VITE_SAMPLE_URL: z.string().url(),
  VITE_GENERATE_SOURCE_MAP: z
    .enum(["true", "false"])
    .transform((arg) => arg === "true"),
});

/** 上記2つを合わせた環境変数スキーマ */
const envSchema = viteEnvSchema.and(customEnvSchema);

/** Vite 側で設定される環境変数のバリデーション */
export const validateViteEnv = viteEnvSchema.parse;

/** .env で設定する環境変数のバリデーション */
export const validateCustomEnv = customEnvSchema.parse;

/** 全ての環境変数のバリデーション */
export const validateEnv = envSchema.parse;
