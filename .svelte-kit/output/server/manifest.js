export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-40865bd2.js","js":["start-40865bd2.js","chunks/vendor-0fb0a8b3.js"],"css":["assets/start-61d1577b.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/answer\/?$/,
				params: null,
				path: "/answer",
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/offer\/?$/,
				params: null,
				path: "/offer",
				a: [0,4],
				b: [1]
			}
		]
	}
};
