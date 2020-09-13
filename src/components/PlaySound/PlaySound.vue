<template>
  <div class="sound">
  	<img v-show="sound_progress > 0" src="./img/voice_play.png" @click="voicePlay" />
  	<img v-show="sound_progress == 0" src="./img/voice_stop.png" @click="voicePlay" />
  	<div class="sliderDeep">
			<el-slider class="bottom-sound-bar-slider slider"
								 v-model="sound_progress"
								 :show-tooltip="false"
									@input="inputSound"/>
		</div>
  </div>
</template>

<script>
  export default {
    data() {
			return {
				sound_progress: 30,
			}
		},
		methods: {
			voicePlay() {
				if(this.sound_progress === 0) {
					this.sound_progress = 30
				}else {
					this.sound_progress = 0
				}
			},
			inputSound(value) {
				this.$emit('changeSound', this.sound_progress)
			}
		}
  }
</script>

<style lang="less" scoped>
	.sound {
		display: inline-block;
		margin-left: 30px;
		&>img {
			height: 20px;
			width: 20px;
			cursor: pointer;
		}
		.sliderDeep {
			display: inline-block;
			.slider {
				display: inline-block;
				position: relative;
				bottom: -8px;
				width: 140px;
				padding-right: 30px;
				margin-left: 15px;
				border-right: 1px solid #999;
			}
		}
	}
</style>

<style scoped>
	.sliderDeep /deep/ .el-slider .el-slider__runway .el-slider__bar {
		background: rgb(68,192,140);
	}
	.sliderDeep /deep/ .el-slider .el-slider__runway .el-slider__button-wrapper .el-slider__button {
		border: 2px solid rgb(68,192,140);
		background: rgb(68,192,140);
		width: 5px;
		height: 5px;
		cursor: pointer;
	}
</style>
