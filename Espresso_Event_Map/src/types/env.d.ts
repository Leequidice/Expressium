interface ImportMetaEnv {
  VITE_API_BASE_URL: string;
  // Add other VITE_ variables here as needed
}

interface ImportMeta {
  env: ImportMetaEnv;
}
