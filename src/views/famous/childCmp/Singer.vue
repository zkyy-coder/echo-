<template>
  <div class="singer">
		<p class="title">
			<span>{{title}}</span>
		</p>
		<div class="back">
			<singer-item v-for="(item,index) in singerList" :key="index" 
									 :singer="item"/>
			<a href="javascript:;">查看全部 ></a>
		</div>
	</div>
</template>

<script>
	import SingerItem from './SingerItem.vue'
  export default {
		components: {
			SingerItem
		},
    props: {
			title: String,
			singerList: {
				type: Array,
				default() {
					return []
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.singer {
		margin: 15px;
		.title {
			width: 220px;
			height: 36px;
			text-align: center;
			font-size: 24px;
			margin: 10px 0;
			color: #444;
		}
		.back {
			position: relative;
			height: 320px;
			width: 207px;
			padding: 15px 0 0 13px;
			background-color: #f4f4f4;
			a {
				position: absolute;
				right: 10px;
				bottom: 10px;
				text-decoration: none;
				font-size: 12px;
				color: #6b6b6b;
			}
		}
	}
</style>
