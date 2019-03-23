module.exports = {
	exportPathMap: () => ({ '/': { page: '/' } }),
	assetPrefix: '/cogo-toast/', // Comment this for Development
	webpack: (config, { dev }) => ({
		...config,
		devtool: dev ? 'cheap-module-source-map' : config.devtool,
	}),
};
