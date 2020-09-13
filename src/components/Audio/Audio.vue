<template>
  <div class="audio">
		<div class="top">
			<span class="name">{{name}}</span>
			<span class="timeDuration">{{timeDuration | formatTime}}</span>
			<span class="timeNow">{{showTime | formatTime}}/</span>
		</div>
		<div class="bottom">
			<audio class="myAudio" 
					   ref="player"
						 :src="mp3"
						 autoplay="auto" />
			<div class="propress"
					 @mousedown="mouseDown"
					 @mouseup="mouseUp">
				<el-slider class="slider" 
												:value="progressIndex" 
												:show-tooltip="false"
												@change="changProgress(progressIndex)"
												@input="inputProgress" />
			</div>				 
		</div>
	</div>
</template>

<script>
  export default {
		data() {
			return {
				progressIndex: 0,
				name: 'echo回声',
				time: '00:00',
				timeNow: 0,
				showTime: 0,
				timeDuration: 0,
				isProgress: true,
				soundInfo: [],
				mp3: '111',
				auto: false
			}
		},
		created() {
		},
		mounted() {
			// 获取音乐列表
			// this._getMusicList()
			// 获取音频的总时长和当前时长
			// this.$refs.audio.addEventListeners()
		},
		beforeDestroy() {
			this.removeEventListeners()
		},
		filters: {
			// 对时长进行格式化
			formatTime(value) {
				let result = parseInt(value)
				let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600);
				let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60));
				let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60));
		 
				let res = '';
				if(h !== '00') res += `${h}`;
				res += `${m}`;
				res += `:${s}`;
				return res;
			}
		},
		computed: {
			getIndex() {
				return this.timeNow/this.timeDuration*100
			}
		},
		methods: {
			// 进度条位置
			getProgress() {
				if(this.isProgress) {
					this.progressIndex = (this.timeNow/this.timeDuration*100)
				}
			},
			// 鼠标点击时,禁止对进度条赋值
			mouseDown() {
				this.isProgress = false
			},
			// 鼠标松开时,允许对进度条赋值
			mouseUp() {
				this.isProgress = true
			},
			playOK(url) {
				this.mp3 = url
				this.auto = true
			},
			_getMusicList() {
				this.soundInfo = this.$store.getters.getMusicList
			},
			// 设置音频音量
			audioVolume(value) {
				if(this.$refs.audio) {
					this.$refs.player.volume = value/100
				}
			},
			// 播放音频
			audioPlay() {
				this.$refs.player.play()
			},
			// 暂停音频
			audioStop() {
				this.$refs.player.pause()
			},
			// 拖动进度条
			inputProgress(value) {
				this.progressIndex = value
				this.showTime = this.progressIndex/100*this.timeDuration
			},
			// 在指定时间播放音频
			changProgress(value) {
				this.progressIndex = value
				this.timeNow = this.progressIndex/100*this.timeDuration
				this.$refs.player.currentTime = this.timeNow
			},
			
			// 监听或者去除音频的总时长和当前时间
			addEventListeners() {
				this.$refs.player.addEventListener('timeupdate', this._currentTime),
				this.$refs.player.addEventListener('canplay', this._durationTime)
			},
			removeEventListeners() {
				this.$refs.player.removeEventListener('timeupdate', this._currentTime)
				this.$refs.player.removeEventListener('canplay', this._durationTime)
			},
			_currentTime() {
				this.timeNow = this.$refs.player.currentTime
				this.getProgress()
			},
			_durationTime() {
				this.timeDuration = this.$refs.player.duration
			}
		}
  }
</script>

<style lang="less" scoped>
	.audio {
		.top {
			margin-top: 14px;
			font-size: 14px;
			color: #666;
			width: 475px;
			height: 15px;
			.name {
				float: left;
			}
			.timeNow {
				float: right;
			}
			.timeDuration {
				float: right;
			}
		}
		.bottom {
			position: relative;
			width: 475px;
			height: 20px;
			.propress {
				position: absolute;
				bottom: 0;
				width: 475px;
				height: 6px;
				z-index: 99;
			}
		}
	}
</style>

<style scoped>
	.slider /deep/ .el-slider__runway {
		margin: 0;
	}
</style>
