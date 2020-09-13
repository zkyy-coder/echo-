<template>
  <div class="b-bar">
		<div class="play-left">
			<div class="last-song" title="上一首"></div>
			<div class="play" @click="showPlay">
				<div class="play-song" v-if="!isPlay" title="播放" @click="play"></div>
				<div class="stop-song" v-if="isPlay" title="停止" @click="stop"></div>
			</div>
			<div class="next-song" title="下一首"></div>
		</div>
		
		<div class="play-center">
			<div class="image">
				<img src="./img/echo.png" />
			</div>
			<div class="voice">
				<Audio ref="audio" />
			</div>
		</div>
		
		<div class="play-right">
			<!-- 播放样式 -->
			<play-loop class="loop" />
			<img class="like" src="./img/like.png" />
			<img class="delete" src="./img/delete.png" />
			<!-- 声音控制 -->
			<play-sound @changeSound="changeSound" class="play-sound" />
			<!-- 音乐列表 -->
			<music-list />
		</div>
	</div>
</template>

<script>
	import Audio from '../Audio/Audio.vue'
	import PlayLoop from '../PlayLoop/PlayLoop.vue'
	import PlaySound from '../PlaySound/PlaySound.vue'
	import MusicList from '../MusicList/MusicList.vue'
	
  export default {
		components: {
			Audio, PlayLoop, PlaySound, MusicList
		},
    data() {
			return {
				isPlay: false,
				sound_progress: 0
			}
		},
		mounted() {
			this.$bus.$on('autoPlay', (source) => {
				this.isPlay = true
				this.$refs.audio.playOK(source)
				this.$refs.audio.addEventListeners()
			})
		},
		beforeDestroy () {
			this.bus.$off('autoPlay');
		},
		methods: {
			// 显示播放还是暂停按钮
			showPlay() {
				this.isPlay = !this.isPlay
			},
			// 点击播放音频
			play() {
				this.$refs.audio.audioPlay()
			},
			// 点击暂停音频
			stop() {
				this.$refs.audio.audioStop()
			},
			// 调整音量
			changeSound(value) {
				this.$refs.audio.audioVolume(value)
			}
		}
  }
</script>

<style lang="less" scoped>
	.b-bar {
		position: fixed;
		display: flex;
		bottom: 0;
		left: 0;
		z-index: 99;
		height: 73px;
		width: 100%;
		min-width: 1080px;
		background: rgb(254,254,254);
		border-bottom: 1px solid #e8e8e8;
		.play-left {
			display: inline-block;
			margin-left: 148px;
			position: relative;
			bottom: -13.5px;
			width: 220px;
			height: 46px;
			text-align: center;
			.last-song {
				margin: 0 5px;
				display: inline-block;
				cursor: pointer;
				width: 40px;
				height: 40px;
				background: url(img/last_song.png) no-repeat;
				background-color: #fff;
				background-position: center;
				background-size: 30px 30px;
				border: 1px solid rgb(194, 192, 192);
				border-radius: 50%;
				&:hover {
					background: url(img/last_song_hover.png) no-repeat;
					background-color: #fff;
					background-position: center;
					background-size: 30px 30px
				}
			}
			.play {
				display: inline-block;
				.play-song {
					margin: 0 5px;
					display: inline-block;
					cursor: pointer;
					width: 40px;
					height: 40px;
					background: url(img/play.png) no-repeat;
					background-color: #fff;
					background-position: 8px 5px;
					background-size: 30px 30px;
					border: 1px solid rgb(194, 192, 192);
					border-radius: 50%;
					&:hover {
						background: url(img/play_hover.png) no-repeat;
						background-color: #fff;
						background-position: 8px 5px;
						background-size: 30px 30px
					}
				}
				.stop-song {
					margin: 0 5px;
					display: inline-block;
					cursor: pointer;
					width: 40px;
					height: 40px;
					background: url(img/stop.png) no-repeat;
					background-color: #fff;
					background-position: 8px 8px;
					background-size: 25px 25px;
					border: 1px solid rgb(194, 192, 192);
					border-radius: 50%;
					&:hover {
						background: url(img/stop_hover.png) no-repeat;
						background-color: #fff;
						background-position: 8px 8px;
						background-size: 25px 25px
					}
				}
			}
			.next-song {
				margin: 0 5px;
				display: inline-block;
				cursor: pointer;
				width: 40px;
				height: 40px;
				background: url(img/next_song.png) no-repeat;
				background-color: #fff;
				background-position: center;
				background-size: 30px 30px;
				border: 1px solid rgb(194, 192, 192);
				border-radius: 50%;
				&:hover {
					background: url(img/next_song_hover.png) no-repeat;
					background-color: #fff;
					background-position: center;
					background-size: 30px 30px
				}
			}
		}
		.play-center {
			display: inline-block;
			width: 542px;
			.image {
				display: inline-block;
				position: relative;
				bottom: 14px;
				width: 50px;
				height: 50px;
				border: 1px solid rgb(194, 192, 192);
				img {
					position: relative;
					width: 46px;
					height: 46px;
					top: 2px;
					left: 2px;
				}
			}
			.voice {
				display: inline-block;
				margin-left: 15px;
				width: 475px;
				height: 73px;
			}
		}
		.play-right {
			display: flex;
			width: 436px;
			height: 74px;
			margin-left: 25px;
			.loop {
				top: 24px;
				margin: 0 10px;
			}
			.like, .delete {
				position: relative;
				top: 24px;
			}
			.play-sound {
				position: relative;
				top: 6px;
			}
			&>img {
				height: 20px;
				width: 20px;
				margin: 0 10px;
				cursor: pointer;
			}
		}
	}
</style>
