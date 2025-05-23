import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            sass: {
                api: "modern"
            }
        }
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },
    server: {
        proxy: {
            "/api": "http://localhost:6989",
        }
    }
});
