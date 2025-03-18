import { z } from "zod";

/** 環境変数のスキーマ */
const envSchema = z.object({
  MODE: z.enum(["development", "staging", "production"]),
  VITE_SAMPLE_TITLE: z.string(),
  VITE_SAMPLE_URL: z.string().url(),
  VITE_GENERATE_SOURCE_MAP: z
    .enum(["true", "false"])
    .transform((arg) => arg === "true"),
});

/** 環境変数のバリデーション */
export const validateEnv = envSchema.parse;
