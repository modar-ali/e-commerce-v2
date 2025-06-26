/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string // env vars are always strings
  // add any other VITE_... you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
