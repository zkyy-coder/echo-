<template>
  <div class="famous">
		<div class="main">
			<div class="main-left">
				<!-- echo名人 -->
				<user-swiper :userList="userList" class="user" />
				<!-- echo群星 -->
				<stars :data="starList" class="star" />
				
				<div class="recommends">
					<!-- 新入驻 -->
					<singer title="新入驻" :singerList="singerList.latest" />
					<!-- echo推荐 -->
					<singer title="echo推荐" :singerList="singerList.recommend" />
					<!-- 24小时热门 -->
					<singer title="24小时热门" :singerList="singerList.commend" />
				</div>
				<!-- 名人分类 -->
				<classify :classifyList="classifyList" class="classify" />
			</div>
		</div>
	</div>
</template>

<script>
	import {
		getFamousUser,
		getFamousStars,
		getFamousSingers,
		getFamousClassify
	} from '@/network/famous.js'
	
	import UserSwiper from './childCmp/UserSwiper.vue'
	import Stars from './childCmp/Stars.vue'
	import Singer from './childCmp/Singer.vue'
	import Classify from './childCmp/Classify.vue'
	
  export default {
		components: {
			UserSwiper, Stars, Singer, Classify
		},
		data() {
			return {
				userList: [],
				starList: [],
				singerList: {
					'latest': [],
					'recommend': [],
					'commend': []
				},
				classifyList: []
			}
		},
    created() {
			// 获取echo名人
			this._getFamousUser()
			// 获取echo群星
			this._getFamousStars()
			// 获取新入驻
			this._getFamousSingers('/latest-users')
			// 获取echo推荐
			this._getFamousSingers('/recommend-users')
			// 获取24小时热门
			this._getFamousSingers('/daily-commend-users')
			// 获取名人分类
			this._getFamousClassify()
		},
		methods: {
			_getFamousUser() {
				getFamousUser().then(res => {
					this.userList = res.data.lists
				})
			},
			_getFamousStars() {
				getFamousStars().then(res => {
					this.starList = res.data.lists
				})
			},
			_getFamousSingers(type) {
				getFamousSingers(type).then(res => {
					if(type.indexOf('latest') == 1){
						this.singerList.latest = res.data.lists
					}else if(type.indexOf('recommend') == 1) {
						 this.singerList.recommend = res.data.lists
					}else {
						this.singerList.commend = res.data.lists
					}
				})
			},
			_getFamousClassify() {
				getFamousClassify().then(res => {
					this.classifyList = res.data.lists
				})
			}
		}
  }
</script>

<style lang="less" scoped>
	.famous {
		display: flex;
		justify-content: center;
		margin-top: 4px;
		background: rgb(235,235,235);
		padding: 20px 0 30px 0;
		.main {
			background-color: #fff;
			margin-top: 20px;
			.main-left {
				.user {
					margin: 30px 0 0 25px;
				}
				.star {
					margin: 30px 0 0 75px;
				}
				.recommends {
					display: flex;
				}
				.classify {
					margin: 20px 0 0 25px;
				}
			}
		}
	}
</style>
