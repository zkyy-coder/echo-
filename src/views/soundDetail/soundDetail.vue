<template>
  <div class="s-detail" v-if="Object.keys(info).length !== 0">
		<div class="content">
			<!-- 头部 -->
			<Nav />
			<!-- title -->
			<Title :info="info" />
			<!-- 中部图片区 -->
			<div class="bg-mask">
				<img class="backImg" :src="info.pic_1080" />
				<img class="pic" :src="info.pic_200">
			</div>
			<!-- 播放 -->
			<div class="play" @click="addToMusic">
				<span>点击播放</span>
			</div>
			<!-- 详情 -->
			<sound-info :info="info" :comments="comments" />
		</div>
	</div>
</template>

<script>
	import { 
		getSoundInfo
	} from '@/network/soundDetail.js'
	
	import Nav from './childCmp/Nav.vue' 
	import Title from './childCmp/Title.vue' 
	import SoundInfo from './childCmp/SoundInfo.vue' 
	
  export default {
		components: {
			Nav, Title, SoundInfo
		},
		data() {
			return {
				comments: [],
				info: {},
				soundInfo: {}
			}
		},
    created() {
			// 获取音乐详情
    	this._getSoundInfo()
    },
		methods: {
			addToMusic() {
				this.$store.dispatch('addToMusic', this.soundInfo)
				this.$bus.$emit('autoPlay', this.$store.state.id[0].source)
				// console.log(this.$store.state.id)
			},
			_getSoundInfo() {
				getSoundInfo(this.$route.query.id).then(res => {
					this.comments = res.data.comments
					this.info = res.data.info
					this.soundInfo.name = this.info.name
					this.soundInfo.pic = this.info.pic_100
					this.soundInfo.source = this.info.source
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.s-detail {
		display: flex;
		justify-content: center;
		margin: 4px 0 74px 0;
		padding: 20px 0;
		background: rgb(235,235,235);
		width: 100%;
		.content {
			background: #fff;
			width: 1000px;
			.bg-mask {
				position: relative;
				height: 420px;
				width: 1000px;
				background: #666;
				overflow: hidden;
				.backImg {
					position: relative;
					bottom: 200px;
					width: 100%;
					opacity: 0.2;
				}
				.pic {
					height: 292px;
					width: 292px;
					border: 4px solid #fff;
					border-radius: 4px;
					position: absolute;
					left: 60px;
					top: 60px;
				}
			}
			.play {
				height: 50px;
				line-height: 50px;
				span {
					font-size: 18px;
					padding: 0 5px;
					background: rgb(110,213,108);
					border-radius: 10px;
					user-select: none;
					cursor: pointer;
				}
			}
		}	
	}
</style>
