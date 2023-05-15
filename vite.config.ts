import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const manifest = defineManifest({
  manifest_version: 3,
  name: "ExtensionName",
  version: "1.0.0",
  description: "Extension Descriptions",
  permissions: [
    "storage", 
    "tabs", 
    "bookmarks"
  ],
  icons: {},
  host_permissions: ["*://*/*"],
  action: {
    default_popup: "public/index.html",
  },
  background: { service_worker: "src/background/index.ts" },
  content_scripts: [
  ],
  commands: {
    _execute_action: {
  //     suggested_key: {
  //       default: "Alt+*",
  //     },
    },
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
});
