<template>
  <div class="singer-item" v-if="Object.keys(singer).length !== 0">
		<a href="javascript:;">
			<img :src="singer.avatar" />
			<span :class="{v: true, blue:singer.content==0}">v</span>
			<div class="info">
				<p class="name">{{singer.name}}</p>
				<p class="describe">{{singer.content}}</p>
			</div>
		</a>
		<img src="../../../assets/image/add_icon.png" class="add" />
	</div>
</template>

<script>
  export default {
    props: {
			singer: {
				type: Object,
				default() {
					return {}
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.singer-item {
		height: 40px;
		width: 200px;
		margin-bottom: 15px;
		a {
			font-size: 12px;
			text-decoration: none;
			img {
				display: inline-block;
				height: 40px;
				width: 40px;
				border-radius: 50%;
			}
			.v {
				position: relative;
				left: -10px;
				height: 10px;
				width: 10px;
				padding: 0 4px;
				border-radius: 50%;
				background: #43c947;
				color: #fff;
			}
			.blue {
				background-color: #67c3ec;
			}
			.info {
				display: inline-block;
				width: 130px;
				.name {
					height: 18px;
					line-height: 18px;
					margin: 0;
					color: #4a4a4a;
				}
				.describe {
					width: 130px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin: 5px 0 0 0;
					height: 14px;
					line-height: 14px;
					color: #6b6b6b;
				}
			}
		}
		.add {
			display: inline-block;
			position: relative;
			bottom: 14px;
			height: 15px;
			width: 15px;
			cursor:pointer;
		}
	}
</style>
