<template>
	<div class="project-page">
		<NavbarComponent />
		<HeaderImgComponent :imgSrc="heroSection.img" :header="heroSection.header" :links="heroSection.links" />

		<div class="project-tags__wrapper">
			<ul class="project-tags">
				<li class="project-tags__item" v-for="( tag, index ) in roomTags" :key="index" @click="findTagHandler(tag)">
					{{ tag }}
				</li>
			</ul>
		</div>

		<div class="project-room__wrapper">
			<div class="project-room__item" v-for="item in filteredPosts" :key="item.id">
				<img v-if="item.liked" class="project-room__star" src="../assets/star.svg" alt="star">
				<img class="project-room__img" :src="item.img" alt="image">
				<div class="project-room__info">
					<div>
						<h3 class="project-room__title">{{ item.header }}</h3>
						<ul class="project-room__container">
							<li class="project-room__category" v-for="(category, index) in item.categories" :key="index">{{ category }}
							</li>
						</ul>
					</div>
					<router-link to="project-details" class="project-room__btn arrow_btn">
						<img src="../assets/vector.svg" alt="vector">
					</router-link>
				</div>
			</div>
		</div>

		<PaginationComponent />
		<FooterComponent />
	</div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent'
import PaginationComponent from '../components/PaginationComponent.vue'
import HeaderImgComponent from '../components/HeaderImgComponent.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'ProjectPage',
	components: {
		NavbarComponent,
		FooterComponent,
		PaginationComponent,
		HeaderImgComponent,
	},
	methods: {
		...mapActions(['fetchRoom']),
		findTagHandler(tag) {
			this.findTag = tag
		}
	},
	computed: {
		...mapGetters(['rooms']),
		filteredPosts() {
			if (this.findTag) {
				return this.rooms.filter((el) => el.tag === this.findTag)
			} else {
				return this.posts
			}
		}
	},
	mounted () {
		this.fetchRoom()
	},
	data() {
		return {
			findTag: 'Bed Room',
			heroSection: {
				img: require('../assets/project-hero.jpg'),
				header: 'Our Project',
				links: [
					{
						id: 0,
						name: 'Home',
						link: '/'
					},
					{
						id: 1,
						name: 'Project',
						link: '/project'
					}
				]
			},
			roomTags: ['Bathroom', 'Bed Room', 'Kitchen', 'Living Area'],
		}
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.project-page {
	width: 100%;
}

.project-tags {
	display: flex;
	justify-content: center;
	margin-top: 200px;
	margin-bottom: 60px;
	border: 1px solid #CDA274;
	border-radius: 18px;

	&__wrapper {
		display: flex;
		justify-content: center;
	}

	&__item {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 18px;
		height: 75px;
		width: 220px;
		padding: 26px, 66px;
		font-family: Jost;
		font-size: 18px;
		font-weight: 600;
		line-height: 125%;
		letter-spacing: 0.36px;
	}

	&__item:hover {
		background-color: #CDA274;
		color: #fff;
		cursor: pointer;
	}
}

.project-room {
	&__wrapper {
		margin: 0 $margin;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 30px;
	}

	&__item {
		position: relative;
	}

	&__star {
		position: absolute;
		right: 0;
	}

	&__img {
		width: 100%;
	}

	&__title {
		color: #292F36;
		font-family: DM Serif Display;
		font-size: 25px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 0.5px;
	}

	&__info {
		display: flex;
		justify-content: space-between;
	}

	&__container {
		display: flex;
	}

	&__category {
		color: #4D5053;
		font-family: Jost;
		font-size: 22px;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__category:not(:last-child):after {
		content: '\/';
		margin-right: 10px;
	}

	&__btn {
		width: 70px;
		height: 70px;
	}
}
</style>