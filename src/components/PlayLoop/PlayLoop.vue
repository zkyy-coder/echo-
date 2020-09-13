<template>
  <div class="loop">
		<img :src="path" @click="showSub" />
		<div class="submenu" v-show="showSubMenu">
			<img v-for="(item,index) in imgList" :key="index"
					 :src="item"
					 @click="switchImg(index)" />
		</div>
	</div>
</template>

<script>
	import listImg from './img/list_loop.png'
	import singleImg from './img/single_loop.png'
	import randomImg from './img/random_loop.png'
	
  export default {
    data() {
			return {
				showSubMenu: false,
				imgList: [listImg, singleImg, randomImg],
				currentIndex: 0,
				path: listImg
			}
		},
		methods: {
			showSub() {
				this.showSubMenu = !this.showSubMenu
			},
			switchImg(index) {
				this.currentIndex = index
				if(index === 1) {
					this.path = singleImg
				}else if(index === 2) {
					this.path = randomImg
				}else {
					this.path = listImg
				}
				this.showSubMenu = false
			}
		}
  }
</script>

<style lang="less" scoped>
	.loop {
		position: relative;
		img {
			height: 20px;
			width: 20px;
			cursor: pointer;
		}
		.submenu {
			position: absolute;
			text-align: center;
			left: -6px;
			bottom: 24px;
			height: 86px;
			width: 32px;
			background-color: #fff;
			&>img {
				cursor: pointer;
			}
			&>img:nth-child(1) {
				margin-top: 12px;
			}
		}
	}
</style>
