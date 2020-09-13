<template>
	<div class="u-swiper" v-if="Object.keys(userList).length !== 0">
			<p class="title">echo名人</p>
			<swiper class="swiper" :options="swiperOption" >
				<swiper-slide class="swiper-slide" v-for="(item,index) in userList" :key="index">
						<user-item :data="item"></user-item>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
				<div class="swiper-button-prev" slot="button-prev"></div>
				<div class="swiper-button-next" slot="button-next"></div>
			</swiper>
	</div>
</template>

<script>
	import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	
	import UserItem from './UserItem.vue'
	
  export default {
		components: {
			Swiper, SwiperSlide,
			UserItem
		},
		props: {
			userList: {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				// 轮播图
				swiperOption: {
						slidesPerView: 3, // 每页展示几条数据
						slidesPerGroup: 3, // 每屏滚动几条数据
						autoplay: false, // 是否自动播放
						navigation: {
								nextEl: '.swiper-button-next',
								prevEl: '.swiper-button-prev'
						},
						pagination: {
								el: '.swiper-pagination',
								type: ''
						},
						observer: true,
						observeParents: true,
				}
			}
		}
  }
</script>

<style lang="less" scoped>
	.u-swiper {
		height: 243px;
		width: 650px;
		.title {
			height: 28px;
			padding-left: 50px;
			font-size: 24px;
			color: #444;
			margin: 0 0 15px 0;
		}
		.swiper {
			width: 600px;
			height: 200px;
			margin-left: 25px;
			padding: 0 25px;
			&:hover .swiper-button-prev {
				display: block;
			}
			&:hover .swiper-button-next {
				display: block;
			}
			.swiper-button-prev {
				display: none;
			}
			.swiper-button-next {
				display: none;
			}
		}
	}
	
	
</style>
