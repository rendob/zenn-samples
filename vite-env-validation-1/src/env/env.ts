import { validateEnv } from "./validation";

export const env = validateEnv(import.meta.env);
