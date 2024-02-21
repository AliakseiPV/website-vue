<template>
	<div class="home-page">
		<NavbarComponent />

		<div class="hero__wrapper">
			<div class="hero">
				<div class="hero__container">
					<h1 class="hero__title">Let Your Home Be Unique</h1>
					<p class="hero__text">There are many variations of the passages of lorem Ipsum fromavailable, majority.</p>
					<button class="hero__button">
						Get Started
						<img src="../assets/arrow.svg" alt="arrow">
					</button>
				</div>
			</div>
		</div>

		<div class="progects">
			<div class="progects__desc">
				<h2 class="progects__title">Follow Our Projects</h2>
				<p class="progects__text">It is a long established fact that a reader will be distracted by the of readable
					content of page lookings at its layouts points.</p>
			</div>

			<div class="progects__container">
				<div class="progects__item" v-for="project in projects" :key="project.id">
					<img :class="`progects__item_img${project.id + 1}`" :src="project.img" alt="kitchen">
					<div class="progects__item_container">
						<div class="progects__item_desc">
							<h3 class="progects__item_title">{{ project.title }}</h3>
							<span class="progects__item_info">{{ project.info }}</span>
						</div>
						<router-link to="project-details" class="progects__item_button arrow_btn">
							<img src="../assets/vector.svg" alt="vector">
						</router-link>
					</div>
				</div>

			</div>
		</div>

		<div class="trust">
			<div class="trust__item">
				<span class="trust__number">12</span>
				<p class="trust__text">Years Of Experiance</p>
			</div>

			<div class="trust__item">
				<span class="trust__number">85</span>
				<p class="trust__text">Success Project</p>
			</div>

			<div class="trust__item">
				<span class="trust__number">15</span>
				<p class="trust__text">Active Project</p>
			</div>

			<div class="trust__item">
				<span class="trust__number">95</span>
				<p class="trust__text">Happy Customers</p>
			</div>
		</div>

		<div class="news__wrapper">
			<div class="news">
				<div class="news__desc">
					<h2 class="news__title">Articles & News</h2>
					<p class="news__text">It is a long established fact that a reader will be distracted by the of readable
						content of a page when lookings at its
						layouts the points of using.</p>
				</div>
				<div class="news__container">
					<div class="news__item" v-for="article in outputArticles" :key="article.id">
						<div class="news__item_img-container">
							<img class="news__item_img" :src="article.img" alt="kitchen">
							<span class="news__item_type">{{ article.designRoom }}</span>
						</div>

						<h3 class="news__item_title">{{ article.title }}</h3>

						<div class="news__item_wrapper">
							<span class="news__item_date">{{ article.date }}</span>
							<router-link to="blog-details" class="news__item_button arrow_btn">
								<img src="../assets/vector.svg" alt="vector">
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>

		<FooterComponent />

	</div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'HomePage',
	components: {
		NavbarComponent,
		FooterComponent,
	},
	mounted() {
		this.fetchArticle()
		this.fetchProject()
	},
	methods: {
		...mapActions(['fetchArticle', 'fetchProject'])
	},
	computed: {
		...mapGetters(['articles', 'projects']),
		outputArticles() {
			return this.articles.filter(item => item.id <= 2)
		}
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.home-page {
	width: 100%;
}

.hero {
	background-image: url(../assets/homepage-hero.jpg);
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	width: 100%;
	height: 758px;
	border-radius: 70px;
	display: flex;
	align-items: center;
	padding: 3rem;

	&__wrapper {
		margin: 0 $margin 6rem;
	}

	&__container {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		max-width: 27rem;
	}

	&__title {
		font-family: DM Serif Display;
		font-size: 4rem;
		line-height: 125%;
		font-weight: 400;
		color: $headerColor;
	}

	&__text {
		color: $textColor;
		font-family: Jost;
		font-size: 1.3rem;
		font-style: normal;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__button {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		width: 13.7rem;
		height: 4.7rem;
		border-radius: 18px;
		background-color: $headerColor;
		color: #FFF;
		font-family: Jost;
		font-size: 1.1rem;
		font-weight: 600;
		line-height: 125%;
		letter-spacing: 0.36px;
		border: none;
		cursor: pointer;
	}
}

.progects {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 6rem;

	&__desc {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		max-width: 46rem;
	}

	&__title {
		text-align: center;
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 3.1rem;
		line-height: 125%;
		letter-spacing: 1px;
		font-weight: 400;
	}

	&__text {
		text-align: center;
		color: $textColor;
		font-family: Jost;
		font-size: 1.3rem;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__container {
		display: grid;
		grid-template-columns: repeat(2, 550px);
		row-gap: 3.4rem;
		column-gap: 6.25rem;
	}

	&__item {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;

		&_img1 {
			border-radius: 0 80px 0 0;
		}

		&_img2 {
			border-radius: 80px 0 0 0;
		}

		&_img3 {
			border-radius: 0 0 80px 0;
		}

		&_img4 {
			border-radius: 0 0 0 80px;
		}

		&_container {
			display: flex;
			justify-content: space-between;
		}

		&_desc {
			display: flex;
			flex-direction: column;
			gap: 0.25rem;
		}

		&_title {
			color: $headerColor;
			font-family: DM Serif Display;
			font-size: 1.5rem;
			line-height: 125%;
			letter-spacing: 0.5px;
			font-weight: 400;
		}

		&_info {
			color: $textColor;
			font-family: Jost;
			font-size: 22px;
			line-height: 150%;
			letter-spacing: 0.22px;
		}

		&_button {
			width: 70px;
			height: 70px;
		}
	}
}

.trust {
	margin: 6rem 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: $buttonColor;
	gap: 4.75rem;
	height: 475px;

	&__item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__number {
		color: #CDA274;
		font-family: DM Serif Display;
		font-size: 5rem;
		font-style: normal;
		line-height: 125%;
		letter-spacing: 1.7px;
	}

	&__text {
		color: $textColor;
		font-family: Jost;
		font-size: 1.3rem;
		font-style: normal;
		line-height: 150%;
		letter-spacing: 0.22px;
	}
}

.trust__item:not(:last-child) {
	border-right: 1px solid #CDA274;
	padding-right: 4.75rem;
}

.news {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 3.25rem;
	margin-bottom: 6rem;

	&__wrapper {
		margin: 0 $margin;
	}

	&__desc {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	&__title {
		color: $headerColor;
		text-align: center;
		font-family: DM Serif Display;
		font-size: 3rem;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 1px;
	}

	&__text {
		color: $textColor;
		text-align: center;
		font-family: Jost;
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__container {
		display: flex;
		gap: 1.6rem;
	}

	&__item {
		border-radius: 62px;
		border: 1px solid #E7E7E7;
		box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
		padding: 1.3rem;

		&_img-container {
			position: relative;
		}

		&_img {
			border-radius: 45px 45px 0px 0px;
		}

		&_type {
			display: block;
			border-radius: 8px 8px 8px 0px;
			background: #FFF;
			position: absolute;
			bottom: 1.25rem;
			left: 1.25rem;
			height: 41px;
			width: 124px;
			display: flex;
			align-items: center;
			justify-content: center;
			color: $textColor;
			font-family: Jost;
			font-size: 1rem;
			line-height: 150%;
			letter-spacing: 0.16px;
		}

		&_title {
			margin: 1.25rem 0 1.8rem 0;
			color: $headerColor;
			font-family: DM Serif Display;
			font-size: 1.5rem;
			font-weight: 400;
			line-height: 125%;
			letter-spacing: 0.5px;
			max-width: 305px;
		}

		&_wrapper {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&_date {
			color: $textColor;
			font-family: Jost;
			font-size: 1rem;
			line-height: 150%;
			letter-spacing: 0.16px;
		}

		&_button {
			width: 52px;
			height: 52px;
			cursor: pointer;
		}
	}

}

.news__item:hover {
	background: #F4F0EC;
}

.news__item:hover .news__item_button {
	background: #fff;
}
</style>