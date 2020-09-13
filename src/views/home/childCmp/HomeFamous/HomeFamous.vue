<template>
  <div class="h-famous" v-if="Object.keys(famousArr).length !== 0">
		<div class="header">
			<span class="h-title">{{title}}</span>
			<span class="h-enter">
				<a href="javascript:;" @click="goFamousDetail">进入榜单</a>
			</span>
		</div>
		<div class="content">
			<div v-for="(item, index) in famousArr" :key="index" class="item">
				<a href="javascript:;">
					<img :src="item.avatar_100" />
					<p class="name">{{item.name}}</p>
					<p class="fans">{{item.followed_count + " " + '关注'}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
		props: {
			famousArr: {
				type: Array,
				default() {
					return []
				}
			},
			title: String
		},
		methods: {
			goFamousDetail() {
				this.$router.push({
					path: '/famous'
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.h-famous {
		height: 197px;
		width: 695px;
		margin: 30px 30px;
		
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
				margin-right: 35px;
				a {
					text-decoration: none;
					img {
						height: 107px;
						width: 107px;
					}
					p {
						margin: 5px 0;
					}
					.name {
						color: #666;
						font-size: 14px;
						display: inline-block;
						width: 107px;
						height: 16px;
						overflow: hidden;
						text-overflow:ellipsis;
						white-space: nowrap;
						&::after {
							margin-left: 4px;
							display: inline-block;
							text-align: center;
							height: 14px;
							line-height: 14px;
							width: 14px;
							vertical-align: top;
							content: 'v';
							border-radius: 50%;
							background: rgb(67,201,71);
							color: #fff;
						}
					}
					.fans {
						font-size: 12px;
						color: rgba(102,102,102,0.8);
					}
				}
			}
		}
	}
</style>
