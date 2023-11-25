<template>
	<div class="project-details">

		<div class="modal__background" ref="modal">
			<div class="modal__active">
				<div class="modal__close">
					<img @click="closeSlide" src="../assets/cross.svg" />
				</div>
				<img class="modal__img" :src="activeSlide.img" alt="img">
			</div>
		</div>

		<NavbarComponent />
		<HeaderImgComponent :imgSrc="heroSection.img" />

		<div class="project-details__info">
			<div class="project-details__info-wrapper">
				<h2 class="project-details__title">
					Minimal Look Bedrooms
				</h2>
				<p class="project-details__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis
					dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim.
					Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum
					commodo.
				</p>
				<p class="project-details__text">In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus.
					Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non
					ante
					vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt
					ligula id purus porttitor.
				</p>
			</div>
		</div>

		<div class="project-details__slider">
			<SsrCarousel :show-dots="true" :loop="true" :gutter="10">
				<div class="slide" v-for="slide in createSlider" :key="slide.id">
					<img class="project-details__slider-img" :src="slide.img" alt="slide">
					<div class="project-details__search" @click="showSlide(slide)">
						<img src="../assets/search.svg" alt="zoom">
					</div>
				</div>
			</SsrCarousel>
		</div>


		<FooterComponent />
	</div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue'
import FooterComponent from '../components/FooterComponent'
import HeaderImgComponent from '../components/HeaderImgComponent.vue'
import SsrCarousel from 'vue-ssr-carousel'
import { mapActions, mapGetters } from 'vuex'




export default {
	name: 'ProjectDetailsPage',

	components: {
		NavbarComponent,
		FooterComponent,
		HeaderImgComponent,
		SsrCarousel,
	},
	data() {
		return {
			heroSection: {
				img: require('../assets/project-details-hero.jpg'),
				header: 'Project Details'
			},
			activeSlide: {},
		}
	},
	methods: {
		...mapActions(['fetchSlider']),

		showSlide(slide) {
			this.activeSlide = slide
			const modal = this.$refs.modal
			modal.style.display = 'flex'
			document.body.style.overflowY = 'hidden'
		},
		closeSlide() {
			const modal = this.$refs.modal
			modal.style.display = 'none'
			document.body.style.overflowY = 'auto'
			this.activeSlide = {}
		}
	},
	computed: {
		...mapGetters(['slider']),
		createSlider() {
			this.fetchSlider()
			return this.slider
		}
	},
	
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';
@import 'vue-ssr-carousel/index.css';

.project-details {
	width: 100%;
	position: relative;

	&__slider {
		margin: 100px $margin 200px;
	}

	&__info {
		margin: 200px $margin 0;
		display: flex;
		justify-content: center;
	}

	&__info-wrapper {
		display: flex;
		flex-direction: column;
		max-width: 658px;
		align-items: center;
		gap: 20px
	}

	&__title {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 50px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 1px;
	}

	&__text {
		color: $textColor;
		font-family: Jost;
		font-size: 22px;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__search {
		position: absolute;
		display: none;
		align-items: center;
		justify-content: center;
		background-color: #fff;
		width: 132px;
		height: 132px;
		border-radius: 50%;
		top: 44%;
		left: 44.5%;
		cursor: pointer;
	}

	&__slider:hover .project-details__search {
		display: flex;
	}

	&__slider-img {
		width: 100%;
	}
}

.slide {
	width: 100%;
	border-radius: 70px;
	position: relative;
}

.modal {
	&__background {
		display: none;
		align-items: center;
		justify-content: center;
		background: rgba(0, 0, 0, 0.8);
		position: fixed;
		width: 100%;
		height: 100%;
		cursor: pointer;
		z-index: 10;
		transition: all 0.7s ease-in-out;
	}

	&__active {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		cursor: default;
	}

	&__close {
		position: absolute;
		right: 5px;
		top: 5px;
		width: 50px;
		height: 50px;
		cursor: pointer;
	}

	&__img {
		width: calc(75vw)
	}
}
</style>