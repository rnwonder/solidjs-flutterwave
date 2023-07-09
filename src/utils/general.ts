export const getEnv = (env: string | null = null) => {
  if (!env) return import.meta.env;
  return import.meta.env[env] || "ss";
};
