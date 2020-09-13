<template>
  <div class="menu">
		<menu-item v-for="(item, index) in menu" :key="index"
							 :class="{selMenu: menuIndex===index}"
							 class="menu-item"
							 :isShowSub="isShowSub">
			<a href="javascript:;" 
				 slot="menu"
				 @click="menuClick(index)"
				 @mouseenter="enterFind(index)"
				 class="menuA">
			 {{item}}
		 </a>
		 
		 <div @mouseleave="leaveSub" 
					slot="submenu"
				  v-if="index === 1"
					class="submenu">
			 <sub-menu-item  v-for="(subItem, subIndex) in submenu" :key="subIndex">
				 <a href="javascript:;" 
						slot="submenu" 
						class="subA"
						@click="subClick(subIndex)">
					{{subItem}}
				</a>
			 </sub-menu-item>
		 </div>
		</menu-item>
	</div>
</template>

<script>
	import MenuItem from './MenuItem.vue'
	import SubMenuItem from './SubMenuItem.vue'
	
	export default {
		components:{
			MenuItem, SubMenuItem
		},
		props: {
			menu: {
				type: Array,
				default() {
					return []
				}
			},
			submenu: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				menuIndex: 0,
				isShowSub: false,
				menuPath: ['/home', '/friend'],
				subPath: ['/channel', '/famous', '/store']
			}
		},
		methods: {
			// 一级菜单的点击
			menuClick(index) {
				// 1.点击的样式切换
				if(index !== 1 && index !== 3) {
					this.menuIndex = index
				}
				
				// 2.点击的路由跳转
				let path = ''
				let oldPath = this.$route.path
				switch(index) {
					case 0: 
						path = this.menuPath[0]
						break
					case 2:
						path = this.menuPath[1]
				}
				if(path !== '' && path !== oldPath) { 
					this.$router.replace(path) 
				}
			},
			// 鼠标平移入发现栏的判断
			enterFind(index) {
				this.isShowSub = false
				
				if(index === 1) {
					this.isShowSub = true
				}
			},
			// 鼠标离开二级菜单
			leaveSub() {
				this.isShowSub = false
			},
			// 二级菜单的点击
			subClick(index) {
				if(index !== 3 && index !== 4 && index !== 5) {
					let path = ''
					let oldPath = this.$route.path
					switch(index) {
						case 0:
							path = this.subPath[0]
							break
						case 1:
							path = this.subPath[1]
							break
						case 2:
							path = this.subPath[2]
							break
					}
					if(path !== '' && path !== oldPath) {
						this.$router.replace(path) 
					}
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.menu {
		color: black;
		font-size: 14px;
		
		.menu-item {
			
			&:nth-child(2) {
				width: 58px;
			}
			
			.menuA {
				display: inline-block;
				height: 80px;
				text-decoration: none;
				color: inherit;
				padding: 0 15px;
			}
			
			.subA {
				display: block;
				height: 40px;
				text-decoration: none;
				color: inherit;
				padding: 0 0 0 15px;
			}
		}
		
		.submenu {
			position: absolute;
			display: block;
			background: #fff;
			z-index: 99;
		}
		
		.selMenu {
			border-bottom: 4px solid rgb(110,213,108);
		}
	}
</style>
