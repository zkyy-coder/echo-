<template>
  <div class="stars" v-if="Object.keys(data).length !== 0">
		<p class="title">echo群星</p>
		<div class="star-list">
			<a class="item"
				 href="javascript:;"
				 v-for="(item,index) in data" :key="index">
				<img :src="item.avatar" />
				<p class="name">{{item.name}}</p>
				<p class="describe">{{item.content}}</p>
		  </a>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
			data: {
				type: Array,
				default() {
					return []
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.stars {
		width: 650px;
		.title {
			font-size: 24px;
			color: #444;
		}
		.star-list {
			display: flex;
			flex-wrap: wrap;
			.item {
				width: 100px;
				text-decoration: none;
				text-align: center;
				img {
					display: block;
					position: relative;
					left: 25px;
					width: 50px;
					height: 50px;
					border-radius: 50%;
				}
				.name {
					display: block;
					width: 100px;
					height: 16px;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					margin: 10px 0;
					font-size: 14px;
					color: #4a4a4a;
				}
				.describe {
					margin: 10px 0;
					font-size: 12px;
					color: #6b6b6b;
				}
			}
		}
	}
</style>
