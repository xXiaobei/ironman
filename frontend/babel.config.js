//IE兼容处理(主要处理es6的语法，暂时关闭)
//首先npm安装包文件，@babel/polyfill -s。然后在presets节点配置polyfills

//移除console
//首先npm安装包文件，npm install babel-plugin-transform-remove-console --save-dev

const plugins = []
if (process.env.NODE_ENV == 'production') {
	//如果是生产环境，则移除console.log
	plugins.push('transform-remove-console')
}

module.exports = {
	presets: ['@vue/app'],
	plugins
}
