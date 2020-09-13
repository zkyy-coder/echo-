<template>
  <div class="h-album" v-if="Object.keys(albumList).length !== 0">
		<div class="header">
			<span class="h-title">{{title}}</span>
			<span class="h-enter"><a href="javascript:;">进入榜单</a></span>
		</div>
		<div class="content">
			<div v-for="(item,index) in albumList" :key="index"
					 v-if="showIndex(index)">
				<a href="javascript:;" class="item">
					<img :src="item.cover_url" />
					<p class="name">{{item.name}}</p>
					<p class="user">{{item.user.name}}</p>
					<div class="score">
						<span class="star" 
									v-for="count of 5" :key="count" 
									:class="{on: count*2 <= item.score.average_score}" >
						</span>
						<span>{{item.score.average_score}}</span>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
			title: String,
			albumList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		methods: {
			showIndex(index) {
				if(index < 4) {
					return true
				}else {
					return false
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.h-album {
		height: 197px;
		width: 695px;
		margin: 30px 30px 60px 30px;
		
		.header {
			padding: 10px 0;
			height: 28px;
			line-height: 28px;
			.h-title {
				color: #000;
				float: left;
				font-size: 24px;
			}
			.h-enter {
				float: right;
				a{
					text-decoration: none;
					color: rgb(110,213,108);
				}
			}
		}
		
		.content {
			display: flex;
			.item {
				color: #666;
				text-decoration: none;
				p {
					margin: 2px 0;
				}
				img {
					height: 150px;
					width: 150px;
				}
				.name {
					width: 150px;
					height: 20px;
					line-height: 20px;
					font-size: 14px;
					display: inline-block;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
				}
				.user {
					width: 150px;
					height: 12px;
					overflow: hidden;
					text-overflow:ellipsis;
					white-space: nowrap;
					font-size: 12px;
				}
				.score {
					font-size: 12px;
					.star {
						display: inline-block;
						height: 11px;
						width: 12px;
						margin-right: 5px;
						background: url('http://www.app-echo.com//v/dist-prod/images/7a06cb7b570284e3b0cec6d78ab1103d.png') no-repeat;
						background-size: 12px 11px;
					}
					.on {
						background: url('http://www.app-echo.com/v/dist-prod/images/8550c78282875886bf69eaa715c49ad7.png');
						background-size: 12px 11px;
					}
					&>span:last-child {
						margin-left: 15px;
					}
				}
			}
		}
	}
</style>
