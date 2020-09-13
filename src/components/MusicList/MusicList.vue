<template>
  <div class="music-list">
		<div class="list" v-show="isShowList">
			<div class="tab-control">
				<span>播放列表</span>
				<span>我喜欢的</span>
				<span>我的离线</span>
			</div>
			<div class="clear">清空</div>
			<div class="info-list">
				<div v-for="(item,index) in arr" :key="index"
						 class="item" >
					<span class="name">{{item.name}}</span>
					<span class="el-icon-circle-close" @click="subList(index)"></span>
				</div>
			</div>
		</div>
  	<img src="./img/musiclist.png" @click="showList" />
  </div>
</template>

<script>
  export default {
		data() {
			return {
				isShowList: false,
				arr: []
			}
		},
		created() {
			this.arr = this.$store.getters.getMusicList
		},
    methods: {
			showList() {
				this.isShowList = !this.isShowList
			},
			subList(index) {
				this.$store.dispatch('subToMusic', index)
			}
		}
  }
</script>

<style lang="less" scoped>
	.music-list {
		display: inline-block;
		position: relative;
		margin-left: 30px;
		height: 74px;
		width: 50px;
		img {
			position: absolute;
			top: 8px;
			left: 0;
			height: 50px;
			width: 50px;
			cursor: pointer;
		}
		.list {
			position: relative;
			right: 300px;
			bottom: 500px;
			width: 500px;
			height: 500px;
			background: #fff;
		}
		.tab-control {
			height: 40px;
			width: 240px;
			margin: 0 auto;
			padding-top: 40px;
			span {
				padding: 0 8px;
				cursor: pointer;
			}
			span:nth-child(1) {
				border-bottom: 1px solid #00FF00;
			}
		}
		.clear {
			position: relative;
			height: 40px;
			right: 20px;
			float: right;
			cursor: pointer;
			color: #00FF00;
		}
		.info-list {
			height: 380px;
			width: 500px;
			overflow-x: hidden;
			overflow-y: auto;
			.item {
				width: 100%;
				height: 20px;
				padding: 10px 0;
				border-bottom: 1px solid #666;
				.name {
					display: inline-block;
					margin-left: 15px;
					width: 295px;
					height: 20px;
					font-size: 14px;
					color: #999;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					cursor: pointer;
				}
				.el-icon-circle-close {
					margin-right: 60px;
					float: right;
					cursor: pointer;
				}
			}
		}
	}
	::-webkit-scrollbar {
	  width: 0.3rem;
	  height: 0.5rem;
	}
	::-webkit-scrollbar-track {
	  border-radius: 0;
	}
	::-webkit-scrollbar-thumb {
	  border-radius: 0;
	  background: #999;
	  transition: all .2s;
	  border-radius: 0.25rem;
	}
	::-webkit-scrollbar-thumb:hover {
	  background-color: rgba(95, 95, 95, 0.7);
	}
</style>
