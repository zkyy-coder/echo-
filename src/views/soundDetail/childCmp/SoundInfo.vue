<template>
  <div class="infos">
  	<div class="left">
  		<h2>简历</h2>
  		<p>{{info.info || info.lrc}}</p>
  	</div>
  	<div class="right">
  		<h2>热门评论</h2>
  		<div class="comment"
  				 v-for="(item,index) in comments" :key="index">
  			<div class="left">
  				<img :src="item.user.avatar" />
  				<span class="u-name">{{item.user.name}}</span>
  				<span class="u-time">{{item.create_time | formatTime}}</span>
  				<span class="u-content">{{item.original_content}}</span>
  			</div>
  			<div class="right">
  				<span class="u-reply">回复</span>
  				<span class="u-like">赞({{item.like}})</span>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
	import { formatDate } from '@/common/utils.js'
	
  export default {
    props: {
			info: {
				type: Object,
				default() {
					return {}
				}
			},
			comments: {
				type: Array,
				default() {
					return {}
				}
			}
		},
		filters: {
			formatTime(value) {
				const date = new Date(value * 1000)
				return formatDate(date, "yyyy-MM-dd")
			}
		}
  }
</script>

<style lang="less" scoped>
	.infos {
		width: 100%;
		display: flex;
		padding-top: 20px;
		background: rgb(235,235,235);
		.left {
			width: 420px;
			margin-right: 15px;
			background: #fff;
			border-radius: 5px;
			h2 {
				margin-left: 20px;
				font-size: 24px;
				color: #6b6b6b;
			}
			p {
				padding: 0 40px;
				word-break: break-all;
				word-wrap: break-word;
				white-space: pre-line;
				color: #333;
			}
		}
		.right {
			width: 565px;
			background: #fff;
			border-radius: 5px;
			h2 {
				margin-left: 20px;
				font-size: 24px;
				color: #6b6b6b;
			}
			.comment {
				display: flex;
				margin-left: 20px;
				width: 515px;
				padding: 10px 0 20px 0;
				border-bottom: 1px solid #999;
				&>.left {
					position: relative;
					img {
						display: inline-block;
						height: 50px;
						width: 50px;
						border-radius: 50%;
						margin-right: 10px;
						cursor: pointer;
					}
					.u-name {
						position: absolute;
						top: 0;
						left: 60px;
						font-size: 14px;
						color: #898989;
					}
					.u-time {
						position: absolute;
						top: 0;
						left: 170px;
						font-size: 12px;
						color: #b7b7b7;
					}
					.u-content {
						position: absolute;
						bottom: 0;
						left: 60px;
						font-size: 14px;
						color: #535353;
					}
				}
				&>.right {
					position: relative;
					width: 85px;
					font-size: 12px;
					color: #b7b7b7;
					.u-reply {
						position: absolute;
						bottom: 0;
						cursor: pointer;
					}
					.u-like {
						position: absolute;
						bottom: 0;
						left: 40px;
						cursor: pointer;
					}
				}
			}
		}
	}
</style>
