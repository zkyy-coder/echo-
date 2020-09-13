<template>
  <div class='main-bar'>
		<!-- 菜单栏 -->
		<Menu :menu="menu" :submenu="submenu" class="menu" />
		
		<!-- logo -->
		<a class="logo" href="javascript:;">
			<img src="http://www.app-echo.com//v/dist-prod/images/2c35330d407d3f6edb9d09a4ce563da9.png" />
		</a>
		
		<!-- search -->
		<Search class="search" />
		
		<!-- upLoad -->
		<a class="upLoad" href="javascript:;">
			<span>上传作品</span>
		</a>
	
	<!-- login -->
	<a class="login" href="javascript:;">
		<span>登录</span>
	</a>
	</div>
</template>

<script>
	import Menu from '../Menu/Menu.vue'
	import Search from '../Search/Search.vue'
	
  export default {
    components: {
			Menu, Search
		},
    data() {
      return {
				menu: ['首页', '发现', '好友圈', '下载客户端'],
				submenu: ['频道', '名人', '商城', '活动', '专题', 'echo回声音乐节'],
			};
    },
		methods: {
		}
  }
</script>

<style lang='less' scoped>
  .main-bar {
    height: 80px;
		line-height: 80px;
    width: 100%;
    background: #fff;
		font-size: 14px;
		position: relative;
		min-width: 1080px;
		
		.menu {
			margin-left: 40px;
		}
		
		.logo {
			display: inline-block;
			height: 28px;
			width: 74px;
			position: absolute;
			top: 6px;
			left: 50%;
			transform: translateX(-37px);
			
			img {
				height: 100%;
				width: 100%;
			}
		}
		
		.search {
			right: 220px;
			position: absolute;
		}
		
		.upLoad {
			text-decoration: none;
			color: #fff;
			right: 100px;
			width: 90px;
			height: 32px;
			position: absolute;
			top: 24px;
			border-radius: 16px;
			background: rgb(110,213,108);
			
			span {
				display: block;
				position: relative;
				bottom: 24px;
				left: 50%;
				transform: translateX(-28px);
			}
		}
		
		.login {
			position: absolute;
			right: 40px;
			text-decoration: none;
			color: rgb(110,213,108);
			font-size: 18px;
		}
  }
</style>