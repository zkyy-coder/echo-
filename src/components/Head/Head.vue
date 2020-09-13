<template>
  <div class="head">
		<span :class="getSpan">{{title[0]}}</span>
		<a href="javascript:;"
			 :class="getA">
			<span>{{title[1]}}</span>
		</a>
	</div>
</template>

<script>
  export default {
    props: {
			little: Boolean,
			title: {
				type: Array,
				default() {
					return []
				}
			}
		},
		computed: {
			getSpan() {
				return this.little ? 't_small' : 't_big'
			},
			getA() {
				return this.little ? 'a_small' : 'a_big'
			}
		}
  }
</script>

<style lang="less" scoped>
	.head {
		.t_small {
			float: left;
			display: inline-block;
			font-size: 18px;
			color: #666;
		}
		.t_big {
			float: left;
			display: inline-block;
			font-size: 24px;
			color: #666;
		}
		.a_small {
			float: right;
			display: inline-block;
			text-decoration: none;
			font-size: 12px;
			color: #fff;
			background: url('http://www.app-echo.com/v/dist-prod/images/b99faa6fcbf72a7ac2843043864e2236.png') no-repeat;
			background-position: 1px 1px;
			background-color: #6ed56c;
			padding: 2px 14px;
			border-radius: 14px;
			span {
				position: relative;
				left: 10px;
			}
		}
		.a_big {
			float: right;
			display: inline-block;
			position: relative;
			top: 4px;
			text-decoration: none;
			font-size: 14px;
			color: #fff;
			background: url('http://www.app-echo.com/v/dist-prod/images/b99faa6fcbf72a7ac2843043864e2236.png') no-repeat;
			background-position: 1px 1px;
			background-color: #6ed56c;
			padding: 2px 14px;
			border-radius: 14px;
			span {
				position: relative;
				left: 10px;
			}
		}
	}
</style>
