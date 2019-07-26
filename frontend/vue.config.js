//vue.config.js是一个与package.json同级的配置文件
//会被@vue/cli-service 自动加载

module.exports = {
	//从vue cli 3.3 起，baseUrl弃用，publicPath为唯一标准
	//publicPath为部署应用包时的基本Url，默认值为'/'
	//publicPath为空''或者是相对路径'./'时，所有资源都会被链接为相对路径，
	//基本Url为相对路径时，打包出来的文件可被部署到任意路径
	//publicPath为相对路径的例外情况：
	//当使用基于html5 history.pushState 的路由时；
	//当使用pages选项，构建多页面应用时；
	publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',

	//打包文件输出目录，默认值为dist，可以传入相对路径
	//build时候指定目录会被删除，在运行build命令时，传入--no-clean 可关闭删除动作
	outputDir: '../dist',

	//放置打包后静态资源(js、css、img、fonts)的(相对于outputDir)目录
	//当生成的资源覆写filename或chunkFilename时，assetsDir会被忽略
	assetsDir: '',

	//指定生成index.html的路径（相对于outputDir），支持绝对路径
	indexPath: 'index.html',

	//静态资源文件名是否加入hash字符串（控制缓存）
	//文件名hash的前提时，index.html时通过vuecli生成的
	filenameHashing: true,

	//是否通过eslint-loader在每次保存lint代码，默认为true
	//如果想让该功能生效，必须安装插件@vue/cli-plugin-eslint
	//当配置为’error‘时，编译产生的警告将会导致编译失败
	//更详细的说明见：https://cli.vuejs.org/zh/config/#lintonsave
	//以下配置在生产构架时，禁用eslint-loader
	lintOnSave: process.env.NODE_ENV !== 'production',

	//是否使用包含运行时编译器的 Vue 构建版本
	runtimeCompiler: false,

	//babel显示转译依赖的列表
	transpileDependencies: [],

	//生产环境的sourceMap，设置false可以加速生产环境构建
	productionSourceMap: true,

	//设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性
	//模板（public/index.html）中的link、script标签不受影响
	crossorigin: '',

	//在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
	//模板（public/index.html）中的link、script标签不受影响
	integrity: false,

	//如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。
	//如果这个值是一个函数，则会接收被解析的配置作为参数。
	//该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
	configureWebpack: {},

	//是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。
	//允许对内部的 webpack 配置进行更细粒度的修改。
	//详见：https://cli.vuejs.org/zh/guide/webpack.html#%E9%93%BE%E5%BC%8F%E6%93%8D%E4%BD%9C-%E9%AB%98%E7%BA%A7
	chainWebpack: function() {},

	//是否为 Babel 或 TypeScript 使用 thread-loader。
	//该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建！
	parallel: require('os').cpus().length > 1,

	//向 PWA 插件传递选项
	pwa: {},

	//传递第三方插件选项
	pluginOptions: {
		// 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
		foo: {}
	},

	//CSS相关设置
	css: {
		//默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。
		//设置为true，去掉文件名中的module，并将所有的*.css类的文件视为css modules模块
		modules: false,
		//是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。
		//Default: 生产环境下是 true，开发环境下是 false
		extract: false,
		//是否为css构建sourceMap，关闭（影响性能）
		sourceMap: false,
		//向 CSS 相关的 loader 传递选项
		//详见：https://cli.vuejs.org/zh/guide/css.html#%E5%90%91%E9%A2%84%E5%A4%84%E7%90%86%E5%99%A8-loader-%E4%BC%A0%E9%80%92%E9%80%89%E9%A1%B9
		loaderOptions: {
			// 这里的选项会传递给 css-loader
			css: {},
			// 这里的选项会传递给 postcss-loader
			postcss: {}
		}
	},

	//所有 webpack-dev-server 的选项都支持
	devServer: {
		//指向开发环境 API 服务器的url
		//如果前端应用好后端API服务器没有在同一主机，proxy可以设置api的请求代理
		//设置代理后，服务器会将未知请求（没有匹配到静态文件）代理到proxy绑定的url
		//proxy 详细设置见：https://github.com/chimurai/http-proxy-middleware#proxycontext-config
		proxy: {
			'/api': {
				target: '<url>',
				ws: true, // proxy websockets
				changeOrigin: true // needed for virtual hosted sites
			},
			'/foo': {
				target: '<other_url>'
			}
		}
	}

	//在mulit-page下构建应用，默认为undefined
	//在mulit-page模式下，每个”page“都会对应一个JavaScript入口文件。
	/*pages: {
		index: {
			// page 的入口(必填项，其它可选)
			entry: 'src/index/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: 'Index Page',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		},
		// 当使用只有入口的字符串格式时，
		// 模板会被推导为 `public/subpage.html`
		// 并且如果找不到的话，就回退到 `public/index.html`。
		// 输出文件名会被推导为 `subpage.html`。
		subpage: 'src/subpage/main.js'
	},*/
}
