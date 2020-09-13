<template>
  <div class="nav">
  	<div class="back" @click="back">
  		<img src="http://www.app-echo.com/v/dist-prod/images/15df536ea53c26483fa9810992617687.png" />
  		<span>返回</span>
  	</div>
  	<div class="share">
  		<span>分享</span>
  		<div class="wechat"></div>
  		<div class="microblog"></div>
  	</div>
  </div>
</template>

<script>
  export default {
    methods: {
			back() {
				this.$router.go(-1)
			}
		}
  }
</script>

<style lang="less" scoped>
	.nav {
		height: 80px;
		line-height: 80px;
		width: 1000px;
		background: rgb(244,244,244);
		.back {
			display: inline-block;
			float: left;
			margin-left: 30px;
			cursor: pointer;
			span {
				font-size: 18px;
				color: #999;
			}
			img {
				margin-right: 10px;
				position: relative;
				bottom: -7px;
			}
		}
		.share {
			display: inline-block;
			float: right;
			margin-right: 30px;
			span {
				height: 30px;
				line-height: 30px;
				font-size: 18px;
				color: #999;
			}
			.wechat {
				display: inline-block;
				position: relative;
				bottom: -7px;
				margin: 0 15px;
				height: 30px;
				width: 30px;
				background: url(../../../assets/image/share.png) no-repeat;
				background-position: -76px 0;
				cursor: pointer;
			}
			.microblog {
				display: inline-block;
				position: relative;
				bottom: -7px;
				height: 30px;
				width: 31px;
				background: url(../../../assets/image/share.png) no-repeat;
				background-position: -114px 0;
				cursor: pointer;
			}
		}
	}
</style>
