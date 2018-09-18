const config = {
    htmloptions: { //html压缩的配置
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    },
    serveroptions: {//热更新服务
		root: './dist',
		port: 8011,
		livereload: true
	},
	pages: [ 'index' , 'list' , 'car','login','register' ],
	cssoptions: { //css配置
		'index': { //首页的配置
			'common':[
				'./src/stylesheets/reset.scss',
				'./src/views/index/stylesheets/common/*.scss'
			],
			'index': './src/views/index/stylesheets/index/*.scss'
		},
		'list': {
			'list':[
				'./src/stylesheets/reset.scss',
				'./src/views/list/*/*.scss'
			]
		},
		'login': {
			'login':[
				'./src/stylesheets/reset.scss',
				'./src/views/login/*/*.scss'
			]
		},
		'register': {
			'register':[
				'./src/stylesheets/reset.scss',
				'./src/views/register/*/*.scss'
			]
		}
	},
	jsoptions: { // js配置
		index: {
			index: './src/views/index/javascripts/index.js',
			vendor: './src/views/index/javascripts/vendor.js'
		},
		list: './src/views/list/javascripts/list.js',
		login: './src/views/login/javascripts/login.js',
		register: './src/views/register/javascripts/register.js'
	}
}


module.exports = config;