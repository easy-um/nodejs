module.exports = {
	devServer: {
		// before(app) {
		// 	app.use(require('esm')(module)('./server/api/').default)
		// },
		proxy: 'http://localhost:3000'
	}
}
