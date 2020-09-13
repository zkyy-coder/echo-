<template>
  <div class="s-title">
  	<div class="name">{{info.name}}</div>
  	<div class="sound-status">
  		<div class="top">
  			<span class="channel">{{info.channel.name}}</span>频道
  			<span class="clips">{{info.channel.follow_count+'次'}}</span>播放
  		</div>
  		<div class="bottom">
  			<span class="exchange"></span>
  			<span>{{info.exchange_count}}</span>
  			<span class="like"></span>
  			<span>{{info.like_count}}</span>
  			<span class="comment"></span>
  			<span>{{info.comment_count}}</span>
  		</div>
  	</div>
  </div>
</template>

<script>
  export default {
    props: {
			info: {
				type: Object,
				default() {
					return {}
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.s-title {
		height: 84px;
		line-height: 84px;
		width: 1000px;
		.name {
			position: relative;
			left: -70px;
			font-size: 28px;
			color: #666;
			float: left;
			display: inline-block;
		}
		.sound-status {
			display: inline-block;
			position: relative;
			bottom: 10px;
			float: right;
			.top {
				height: 20px;
				color: #999;
				font-size: 12px;
				.channel {
					cursor: pointer;
					color: #8ed72b;
				}
				.clips {
					margin-left: 10px;
					color: #8ed72b;
				}
			}
			.bottom {
				font-size: 14px;
				color: #999;
				height: 20px;
				width: 200px;
				margin-top: 4px;
				.exchange {
					display: inline-block;
					margin-right: 4px;
					width: 18px;
					height: 18px;
					background: url(../../../assets/image/evaluate.png) no-repeat;
					background-position: 0 2px;
				}
				.like {
					display: inline-block;
					margin: 0 4px 0 10px;
					width: 18px;
					height: 18px;
					background: url(../../../assets/image/evaluate.png) no-repeat;
					background-position: -22px 2px;
				}
				.comment {
					display: inline-block;
					margin: 0 4px 0 10px;
					width: 18px;
					height: 18px;
					background: url(../../../assets/image/evaluate.png) no-repeat;
					background-position: -44px 2px;
				}
			}
		}
	}
</style>
