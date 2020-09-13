<template>
  <div class="h-music" v-if="Object.keys(list).length !== 0">
		<Head :title="headTitle" class="head" />
		<div class="content">
			<div v-for="(item,index) in list" :key="index" class="item">
				<a href="javascript:;" 
					 class="top"
					 @click="goSoundDetail(item.obj_id)" >
					<img :src="item.sound.pic_100" />
					<p>{{item.sound.name}}</p>
				</a>
				<a href="javascript:;">{{item.sound.channel.name}}</a>
				<div class="evaluate">
					<span>
						<i></i>
						<p>{{item.sound.share_count}}</p>
					</span>
					<span>
						<i></i>
						<p>{{item.sound.like_count}}</p>
					</span>
					<span>
						<i></i>
						<p>{{item.sound.comment_count}}</p>
					</span>
				</div>
			</div>
		</div>
		<div class="loadMore">
			<button @click="loadMore">加载更多</button>
		</div>
	</div>
</template>

<script>
	import Head from '@/components/Head/Head.vue'
	
	import {formatDate} from '@/common/utils.js'
	
  export default {
		components: {
			Head
		},
    props: {
			list: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				headTitle: ['今日推荐', '一键播放']
			}
		},
		methods: {
			loadMore() {
				this.$emit('loadMore')
			},
			goSoundDetail(id) {
				this.$router.push({
					path: '/sound',
					query: {
						id
					}
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.h-music {
		margin: 90px 30px 30px 30px;
		width: 695px;
		.head {
			height: 24px;
			width: 200px;
		}
		.content {
			width: 695px;
			margin-top: 20px;
			display: flex;
			flex-wrap: wrap;
			.item {
				background: rgb(244,244,244);
				margin: 5px;
				width: 160px;
				.top {
					text-decoration: none;
					display: inline-block;
					img {
						display: inline-block;
						height: 160px;
						width: 160px;
					}
					p {
						margin-top: 14px;
						margin: 0;
						font-size: 14px;
						line-height: 18px;
						height: 36px;
						color: #4a4a4a;
						width: 160px;
						overflow: hidden;
						word-break: break-all;
					}
				}
				&>a:nth-child(2) {
					text-decoration: none;
					color: #6ed56c;
					width: 130px;
					font-size: 14px;
					height: 16px;
					display: inline-block;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.evaluate {
					margin-top: 10px;
					display: flex;
					width: 150px;
					text-align: center;
					position: relative;
					left: 5px;
					span {
						flex: 1;
						i {
							display: block;
							height: 14px;
							width: 14px;
							position: relative;
							left: 19px;
						}
						p {
							margin: 0;
							font-size: 12px;
							color: #999;
						}
					}
					span:nth-child(1) {
						i {
							background: url(../../../../assets/image/evaluate.png) no-repeat;
							background-position: 0 -23px;
						}
					}
					span:nth-child(2) {
						i {
							background: url(../../../../assets/image/evaluate.png) no-repeat;
							background-position: -16px -23px;
						}
					}
					span:nth-child(3) {
						i {
							background: url(../../../../assets/image/evaluate.png) no-repeat;
							background-position: -34px -23px;
						}
					}
				}
			}
		}
		.loadMore {
			padding: 10px 0px 30px 0;
			position: relative;
			width: 100%;
			button {
				cursor: pointer;
				outline: none;
				border: none;
				width: 94%;
				height: 40px;
				line-height: 40px;
				position: absolute;
				font-size: 16px;
				color: #999;
				left: 50%;
				transform: translateX(-50%);
				display: inline-block;
			}
		}
	}
</style>
