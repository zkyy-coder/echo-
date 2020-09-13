<template>
  <div class="sub-item" 
			 @mouseenter="enterSub"
			 @mouseleave="leaveSub"
			 :class="{classSub: avtiveSub}">
		<slot name="submenu"></slot>
	</div>
</template>

<script>
  export default {
		data() {
			return {
				avtiveSub: false
			}
		},
		methods: {
			enterSub() {
				this.avtiveSub = !this.avtiveSub
			},
			leaveSub() {
				this.avtiveSub = !this.avtiveSub
			}
		}
	}
</script>

<style lang="less" scoped>
	.sub-item {
		width: 137px;
		height: 40px;
		line-height: 40px;
	}
	.classSub {
		color: rgb(110,213,108);
		background: rgb(248,248,248);
	}
</style>
