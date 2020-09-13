<template>
  <div class="r-item" v-if="Object.keys(news).length !== 0">
		<a href="javascript:;" class="top">
			<img class="img" :src="news.pic_200 || news.pic_url" />
			<span class="index">Top{{index+1}}</span>
			<span class="title">{{news.name}}</span>
		</a>
		<a href="javascript:;" class="bottom">
			<span class="author">奔跑怪物</span>
		</a>
	</div>
</template>

<script>
  export default {
    props: {
			news: {
				type: Object,
				default() {
					return {}
				}
			},
			index: Number
		}
  }
</script>

<style lang="less" scoped>
	.r-item {
		width: 245px;
		height: 320px;
		
		.top {
			display: block;
			width: 245px;
			height: 280px;
			text-decoration: none;
			.img {
				display: block;
				height: 245px;
				width: 100%;
			}
			.index {
				display: inline-block;
				color: pink;
				margin-right: 5px;
				height: 35px;
				line-height: 35px;
				font-size: 20px;
				width: 50px;
			}
			.title {
				display: inline-block;
				color: #4a4a4a;
				height: 35px;
				font-size: 14px;
				width: 190px;
				line-height: 35px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
		.bottom {
			display:  inline-block;
			color: #999;
			margin-left: 55px;
			width: 190px;
			height: 40px;
			text-decoration: none;
			.author {
				height: 100%;
				width: 100%;
				font-size: 16px;
			}
		}
	}
</style>
