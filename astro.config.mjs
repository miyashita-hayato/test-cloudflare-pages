// @ts-check
import { defineConfig } from 'astro/config';

const branch = process.env.CF_PAGES_BRANCH || 'unknown';

const apiUrl = (() => {
    switch (branch) {
        case 'main':
            return 'https://jsonplaceholder.typicode.com/posts/1';
        case 'staging':
            return 'https://jsonplaceholder.typicode.com/posts/2';
        default:
            return 'https://jsonplaceholder.typicode.com/posts/3';
    }
})();

// https://astro.build/config
export default defineConfig({
    vite: {
        define: {
            'process.env.PUBLIC_API_URL': JSON.stringify(apiUrl),
        }
    }
});
