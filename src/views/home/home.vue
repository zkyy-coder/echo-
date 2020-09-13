<template>
  <div class='home'>
		<div class="main-left">
			<!-- rank榜单 -->
			<div class="rank">
				<home-rank title="热门回声榜" :rankArr="rank.sound_hot" 
																		 :imgUrl="rankImg[0]" 
																		 type="/sound-hot" />
				<home-rank title="原创回声榜" :rankArr="rank.sound_origin" 
																		 :imgUrl="rankImg[1]" 
																		 type="/sound-origin" />
				<home-rank title="视频回声榜" :rankArr="rank.mv_hot" 
																		 :imgUrl="rankImg[2]" 
																		 type="/mv-hot" />
			</div>
			<!-- 名人 -->
			<div class="famous">
				<home-famous :famousArr="famousList" title="echo名人" />
			</div>
			<!-- 专辑 -->
			<div class="album">
				<home-album title="专辑" :albumList="albumList" />
			</div>
			<!-- 今日精选 -->
			<div>
				<home-music-recommend :list="goods.list" @loadMore="loadMore" />
			</div>
		</div>
		<div class="main-right">
			<!-- 每日精选 -->
			<home-hot-recommend :recommend="this.hotRecommend" class="hot" />
		</div>
	</div>
</template>

<script>
	import {
		getHomeIndex,
		getHomeFamous,
		getHomeAlbum,
		getHomeSound
	} from '@/network/home.js'
	
	import HomeRank from './childCmp/HomeRank/HomeRank.vue'
	import HomeFamous from './childCmp/HomeFamous/HomeFamous.vue'
	import HomeAlbum from './childCmp/HomeAlbum/HomeAlbum.vue'
	import HomeHotRecommend from './childCmp/HomeHotRecommend/HomeHotRecommend.vue'
	import HomeMusicRecommend from './childCmp/HomeMusicRecommend/HomeMusicRecommend.vue'
	
  export default {
    components: {
			HomeRank, HomeFamous, HomeAlbum, HomeHotRecommend, HomeMusicRecommend
		},
    data() {
      return {
				rank: {},
				rankImg: ['http://www.app-echo.com/v/dist-prod/images/b6718ed159e896bde882ba27b7b98015.png',
									'http://www.app-echo.com/v/dist-prod/images/5735c4af669429c7b43cbd3fe165d0bf.png',
									'http://www.app-echo.com/v/dist-prod/images/06b1c58597a0447c6c68c4c1505663cd.png'
								 ],
			  famousList: [],
				albumList: [],
				hotRecommend: [],
				goods: {
					page: 0,
					list: []
				}
			};
    },
		created() {
			// 获取首页榜单和每日精选数据
			this._getHomeIndex()
			// 获取首页名人数据
			this._getHomeFamous()
			// 获取首页专辑数据
			this._getHomeAlbum()
			// 获取首页推荐(歌)的数据
			this._getHomeSound()
		},
		methods: {
			loadMore() {
				this._getHomeSound()
			},
			
			/* 网络请求 */
			_getHomeIndex() {
				getHomeIndex().then(res => {
					const data = res.data
					// 1.获取rank榜单数据
					this.rank = data.rank
					// 2.获取热门精选数据
					this.hotRecommend = data.hot_recommend
				})
			},
			_getHomeFamous() {
				getHomeFamous().then(res => {
					const data = res.data
					// 1.获取名人推荐数据
					this.famousList = data.lists
				})
			},
			_getHomeAlbum() {
				getHomeAlbum().then(res => {
					const data = res.data
					// 1.获取专辑推荐数据
					this.albumList = data.list
				})
			},
			_getHomeSound() {
				// console.log('1'+this.goods)
				const page = this.goods.page + 1
				getHomeSound(page).then(res => {
					const data = res.data
					// 1.获取今日推荐歌数据
					this.goods.list.push(...data.list)
					// this.goods.list = data.list
					this.goods.page += page
					// console.log(this.goods)
				})
			}
		}
  }
</script>

<style lang='less' scoped>
	.home {
		margin-bottom: 74px;
		padding: 20px 0 20px 0 ;
		display: flex;
		justify-content: center;
		width: 100%;
		background: rgb(235,235,235);
		
		.main-left {
			background: #fff;
		}
		
		.main-right {
			.hot {
				margin-left: 15px;
			}
		}
	}
</style>