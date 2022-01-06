import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',  // path to public directory
			assets: 'build',  // path to public directory
			fallback: null,
		}),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		paths: {
			//base: '/webRTC-Demo',
		},
	},
};

export default config;
