<template>
  <div class="classify" v-if="Object.keys(classifyList) !== 0">
		<p class="title">名人分类</p>
		<div class="c-top">
			<span v-for="(item,index) in classifyList" :key="index"
						class="item"
						@click="getInfo(item.famous_type)"
						:class="{select: index === currentIndex}">
				{{item.famous_type_title}}
			</span>
		</div>
		<div class="c-bottom">
			<span v-for="(item,index) in userList" :key="index">
				{{item.name}}
			</span>
		</div>
	</div>
</template>

<script>
	import { getClassifyInfo } from '@/network/famous.js'
	
  export default {
    props: {
			classifyList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				userList: [],
				currentIndex: 0
			}
		},
		created() {
			this._getClassifyInfo(1) 
		},
		methods: {
			getInfo(page) {
				this._getClassifyInfo(page)
				this.currentIndex = page - 1
			},
			_getClassifyInfo(page) {
				getClassifyInfo(page).then(res => {
					this.userList = res.data.famous_users[0].users
					console.log(this.userList)
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.classify {
		width: 695px;
		.title {
			margin: 0 0 30px 0;
			font-size: 24px;
			color: #444;
		}
		.c-top {
			width: 695px;
			padding-bottom: 20px;
			border-bottom: 1px solid #e9e9e9;
			.item {
				cursor: pointer;
				margin: 0 5px;
				font-size: 16px;
				color: #6b6b6b;
			}
			.select {
				color: #43c947;
			}
		}
		.c-bottom {
			width: 695px;
			margin-top: 20px;
			span {
				display: inline-block;
				width: 163px;
				height: 24px;
				line-height: 24px;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				font-size: 16px;
				color: #6b6b6b;
				margin: 0 5px;
				cursor: pointer;
			}
		}
	}
</style>
