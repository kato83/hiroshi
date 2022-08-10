import {defineConfig} from "vite";

export default defineConfig({
    root: 'src',
    plugins: [],
    server: {
        watch: {
            usePolling: true
        }
    }
});