<template>
  <div class="r-top" v-if="Object.keys(daily).length !== 0">
		<div class="content">
			<div class="c-left">
				<a href="javascript:;"><img :src="daily[0].pic_200 || daily[0].pic_url" /></a>
			</div>
			<div class="c-right">
				<p>日榜  TOP1</p>
				<a href="javascript:;" class="name"><span>{{daily[0].name}}</span></a>
				<a href="javascript:;" class="u-name">
					<img :src="daily[0].user.avatar" />
					<span>{{daily[0].user.name}}</span>
				</a>
				<a href="javascript:;" class="play">
					<span>一键播放</span>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
			daily: {
				type: Array,
				default() {
					return []
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.r-top {
			height: 300px;
			width: 100%;
			background: rgb(248,165,165);
			.content {
				display: flex;
				justify-content: center;
				.c-left {
					margin-top: 80px;
					height: 270px;
					width: 435px;
					background: url('../../../assets/image/tape.png') no-repeat;
					background-size: 100%;
					a {
						img {
							position: relative;
							left: 87px;
							width: 246px;
							height: 246px;
						}
					}
				}
				.c-right {
					margin-top: 80px;
					color: #fff;
					p {
						font-size: 30px;
						margin-bottom: 15px;
					}
					a {
						color: inherit;
						display: block;
						text-decoration: none;
					}
					.name {
						font-size: 28px;
					}
					.u-name {
						margin-top: 15px;
						height: 28px;
						line-height: 28px;
						img {
							margin-right: 15px;
							width: 28px;
							height: 28px;
							border-radius: 50%;
						}
						span {
							position: relative;
							font-size: 18px;
							bottom: 8px;
						}
					}
					.play {
						margin-top: 15px;
						width: 160px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						padding: 5px 20px;
						background: #6ed56c;
						border-radius: 20px;
					}
				}
			}
	}
</style>
