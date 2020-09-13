<template>
  <div class="r-detail">
		<!-- rank顶部 -->
		<rank-top :daily="daily" class="r-top" />
		<!-- 内容 -->
		<div class="content">
			<!-- 热门日榜 -->
			<div class="daily">
				<div v-for="(item,index) in daily" :key="index"
						 v-if="index !== 0"
						 class="d-item">
					<rank-item :news="item" :index="index" />
				</div>
			</div>
			
			<!-- 回声周榜 -->
			<Head :title="wTitle" :little="false" class="head" />
			<div class="weekly">
				<div v-for="(item,index) in weekly" :key="index"
						 class="w-item">
					<rank-item :news="item" :index="index" />
				</div>
			</div>
			
			<!-- 回声月榜 -->
			<Head :title="mTitle" :little="false" class="head" />
			<div class="monthly">
				<div v-for="(item,index) in monthly" :key="index"
						 class="m-item">
					<rank-item :news="item" :index="index" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {getRankDeatil} from '@/network/rankDetail.js'
	
	import RankTop from './childCpms/RankTop.vue'
	import RankItem from './childCpms/RankItem.vue'
	
	import Head from '@/components/Head/Head.vue'
	
  export default {
		components: {
			RankTop, RankItem,
			Head
		},
		data() {
			return {
				daily: [],
				weekly: [],
				monthly: [],
				wTitle: ['热门回声周榜', '播放全部'],
				mTitle: ['热门回声月榜', '播放全部'],
			}
		},
    created() {
    	this._getDaily()
    	this._getWeekly()
    	this._getMonthly()
    },
		methods: {
			_getDaily() {
				getRankDeatil(this.$route.query.type, 'daily', 10).then(res => {
					this.daily = res.data.lists.daily
				})
			},
			_getWeekly() {
				getRankDeatil(this.$route.query.type, 'weekly', 10).then(res => {
					this.weekly = res.data.lists.weekly
				})
			},
			_getMonthly() {
				getRankDeatil(this.$route.query.type, 'monthly', 10).then(res => {
					this.monthly = res.data.lists.monthly
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.r-detail {
		margin-top: 4px;
		width: 100%;
		.content {
			width: 1100px;
			margin: 0 auto;
			.head {
				margin: 100px 0 0 14px;
				padding-bottom: 30px;
				width: 300px;
			}
			.daily {
				display: flex;
				flex-wrap: wrap;
				margin-top: 100px;
				width: 1100px;
				.d-item {
					margin: 0 15px;
				}
			}
			.weekly {
				display: flex;
				flex-wrap: wrap;
				width: 1100px;
				margin-top: 30px;
				.w-item {
					margin: 0 15px;
				}
			}
			.monthly {
				display: flex;
				flex-wrap: wrap;
				width: 1100px;
				margin: 30px 0 100px 0;
				.m-item {
					margin: 0 15px;
				}
			}
		}
	}
</style>
