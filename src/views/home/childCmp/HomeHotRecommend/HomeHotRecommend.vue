<template>
  <div class="h_hot" v-if="Object.keys(recommend).length !== 0">
		<!-- 头部 -->
		<Head :title="headTitle" class="head" :little="true" />
		<!-- 热门推荐 -->
		<div class="r_hot">
			<a href="javascript:;" class="item"
				 v-for="(item,index) in recommend" :key="index">
				<img :src="item.pic_100" />
				<div class="info">
					<p>{{item.name}}</p>
					<p>{{item.channel.name}}</p>
				</div>
			</a>
		</div>
	</div>
</template>

<script>
	import Head from '@/components/Head/Head.vue'
	
  export default {
    components: {
			Head
		},
		props: {
			recommend: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				headTitle: ['每日精选', '播放全部']
			}
		}
  }
</script>

<style lang="less" scoped>
	.h_hot {
		width: 230px;
		
		.head {
			width: 100%;
			height: 18px;
			line-height: 18px;
			margin: 20px 0;
		}
		
		.r_hot {
			.item {
				margin: 15px 0;
				display: flex;
				text-decoration: none;
				font-size: 12px;
				img {
					display: inline-block;
					width: 68px;
					height: 69px;
				}
				.info {
					padding: 3px 0 3px 5px;
					p:nth-child(1) {
						margin: 0;
						color: #666;
					}
					p:nth-child(2) {
						margin: 0;
						position: relative;
						bottom: -20px;
						color: #999;
					}
				}
			}
		}
	}
</style>
