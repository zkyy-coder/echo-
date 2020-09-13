<template>
  <div class="home-rank" v-if="Object.keys(rankArr).length !== 0">
		<div class="header">
			<span class="h-title">{{title}}</span>
			<span class="h-enter" @click="goRankDetail">
				<a href="javascript:;">进入榜单</a>
			</span>
		</div>
		
		<div class="content">
			<div class="content-left">
				<a href="javascript"><img :src="imgUrl" /></a>
				<a href="javascript"><img :src="rankArr.daily[0].pic || rankArr.daily[0].pic_url"></a>
				<div class="info">
					<p>Top1</p>
					<a href="javascript:;" class="describe"><span>{{rankArr.daily[0].name}}</span></a>
					<a href="javascript:;" class="user">
						<img :src="rankArr.daily[0].user.photo || rankArr.daily[0].user.avatar" />
						<span>{{rankArr.daily[0].user.name}}</span>
					</a>
				</div>
			</div>
			
			<div class="content-right">
				<div v-for="(item, index) in rankArr.daily" :key="index"
						 v-show="index !== 0"
						 class="item">
					<a href="javascript" class="imgA"><img :src="item.pic || item.pic_url" /></a>
					<div class="info">
						<div>
							<span>{{index + 1}}</span>
							<a href="javascript:;" class="name"><span>{{item.name}}</span></a>
						</div>
						<a href="javascript:;" class="user-name">{{item.user.name}}</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
			rankArr: {
				type: Object,
				default() {
					return {}
				}
			},
			title: String,
			imgUrl: String,
			type: String
		},
		methods: {
			goRankDetail() {
				this.$router.push({
					path: '/rank',
					query: {
						type: this.type
					}
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.home-rank {
		height: 197px;
		width: 695px;
		margin: 30px 30px;
		
		.header {
			padding: 10px 0;
			height: 28px;
			line-height: 28px;
			.h-title {
				font-size: 24px;
				color: #000;
				float: left;
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
			
			.content-left {
				position: relative;
				margin-right: 6px;
				display: flex;
				width: 417px;
				.describe {
					text-decoration: none;
					color: #666;
					span {
						display: inline-block;
						font-size: 14px;
						line-height: 20px;
						width: 143px;
						height: 39px;
						margin: 10px auto 28px;
						overflow: hidden;
					}
				}
				p {
					color: pink;
					font-size: 18px;
					margin: 15px 0 10px 0;
				}
				a:nth-child(2) {
					height: 150px;
					width: 150px;
					margin-left: 4px;
					
					img {
						height: 100%;
						width: 100%;
					}
				}
				.info {
					border: 1px solid #f4f4f4;
					padding-left: 10px;
					width: 182px;
					height: 150px;
					.user {
						position: absolute;
						bottom: 5px;
						display: block;
						height: 22px;
							text-decoration: none;
						img {
							display: inline-block;
							margin-right: 10px;
							height: 18px;
							width: 18px;
						}
						span {
							font-size: 12px;
							color: rgb(120, 120, 120);
						}
					}
				}
			}
			
			.content-right {
				width: 272px;
				height: 75px;
				.item {
					display: flex;
						border: 1px solid #f4f4f4;
					.imgA {
							height: 74px;
							width: 74px;
						img {
							height: 100%;
							width: 100%;
						}
					}
					.info {
						margin: 15px 0 0 10px;
						position: relative;
						&>div {
							width: 171px;
							height: 37px;
							overflow: hidden;
							
							&>span {
								display: inline-block;
								position: relative;
								bottom: 1px;
								font-size: 10px;
								padding: 2px 4px;
								background: pink;
								color: #fff;
								margin-right: 5px;
							}
							.name {
								text-decoration: none;
								color: #666;
									font-size: 13px;
								.span {
									display: inline-block;
								}
							}
						}
						.user-name {
							position: absolute;
							bottom: 5px;
							text-decoration: none;
							color: rgb(120, 120, 120);
							display: block;
							font-size: 11px;
						}
					}
				}
			}
		}
	}
</style>
