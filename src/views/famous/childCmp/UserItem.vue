<template>
  <div class="swiper-slide" v-if="Object.keys(data).length !== 0">
		<a href="javascript:;">
			<img :src="data.avatar_150" />
			<span class="name">{{data.name}}</span>
		</a>
		<span class="fans">{{data.followed_count+'人'+'  '+'关注'}}</span>
	</div>
</template>

<script>
  export default {
    props: {
			data: {
				type: Object,
				default() {
					return {}
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.swiper-slide {
		height: 200px;
		width: 150px;
		padding: 0 25px;
		a {
			text-decoration: none;
			.name {
				display: block;
				height: 24px;
				line-height: 24px;
				font-size: 14px;
				color: #4a4a4a;
				&::after {
					content: 'v';
					font-size: 12px;
					padding: 1px 6px;
					color: #fff;
					background-color: #43c947;
					border-radius: 50%;
					margin-left: 5px;
				}
			}
		}
		.fans {
			display: block;
			height: 18px;
			line-height: 18px;
			font-size: 12px;
			color: #6b6b6b;
		}
	}
</style>
