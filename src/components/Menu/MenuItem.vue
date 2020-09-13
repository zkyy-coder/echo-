<template>
  <div class="menu-item">
		<div  @mouseenter="enterMenu"
					@mouseleave="enterLeave"
					:class="{activeMou: isEnter}">
			<slot name="menu"></slot>
		</div>
		
		<div v-show="isShowSub">
			<slot name="submenu"></slot>
		</div>
	</div>
</template>

<script>
  export default {
		props: {
			isShowSub: Boolean
		},
		data() {
			return {
				isEnter: false
			}
		},
    methods: {
			// 鼠标移入菜单的判断
			enterMenu() {
				this.isEnter = !this.isEnter
			},
			// 鼠标移出菜单的判断
			enterLeave() {
				this.isEnter = !this.isEnter
			}
		}
  }
</script>

<style scoped>
	.menu-item {
		height: 80px;
		float: left;
		display: block;
	}
	.activeMou {
		color: rgb(110,213,108);
	}
</style>
