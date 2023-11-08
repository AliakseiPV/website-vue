<template>
	<div class="article-page">
		<NavbarComponent />

		<HeaderImgComponent :imgSrc="heroSection.img" :header="heroSection.header" :links="heroSection.links"/>

		<div class="post">
			<h1 class="post__title">Latest Post</h1>

			<div class="post__wrapper">
				<img class="post__img" src="../assets/news-post.jpg" alt="postImg">

				<div class="post__container">
					<h2 class="post__heading">Low Cost Latest Invented Interior Designing Ideas</h2>
					<p class="post__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim
						maximus.posuere in.Contrary to popular
						belief.</p>
					<p class="post__text">Lorem Ipsum is not simply random text. It has roots in a piece of classica</p>

					<div class="post__nav">
						<span class="post__date">
							26 December,2022
						</span>
						<button class="post__button arrow_btn">
							<img src="../assets/vector.svg" alt="vector">
						</button>
					</div>

				</div>

			</div>

		</div>

		<div class="news">
			<h2 class="news__title">Articles & News</h2>

			<div class="news__container">
				<div class="news__item" v-for="article in articles" :key="article.id">
					<div class="news__item_img-container">
						<img class="news__item_img" :src="article.img" alt="kitchen">
						<span class="news__item_type">{{ article.designRoom }}</span>
					</div>
					<h3 class="news__item_title">{{ article.title }}</h3>
					<div class="news__item_wrapper">
						<span class="news__item_date">{{ article.date }}</span>
						<button class="news__item_button arrow_btn">
							<img src="../assets/vector.svg" alt="vector">
						</button>
					</div>
				</div>
			</div>

			
		</div>
		<PaginationComponent />

		<FooterComponent />
	</div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'
import PaginationComponent from '../components/PaginationComponent.vue'
import HeaderImgComponent from '../components/HeaderImgComponent.vue'

export default {
	name: 'ArticlePage',
	components: {
		NavbarComponent,
		FooterComponent,
		PaginationComponent,
		HeaderImgComponent,
	},
	data() {
		return {
			heroSection: {
				img: require('../assets/news-hero.jpg'),
				header: 'Articles & News',
				links: [
					{
						id: 0,
						name: 'Home',
						href: '#'
					},
					{
						id: 1,
						name: 'Blog',
						href: '#'
					}
				]
			},
			articles: [
				{
					id: 0,
					img: require('../assets/homepage-design01.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022'
				},
				{
					id: 1,
					img: require('../assets/homepage-design02.jpg'),
					designRoom: 'Living Design',
					title: 'Low Cost Latest Invented Interior Designing Ideas.',
					date: '22 December,2022'
				},
				{
					id: 2,
					img: require('../assets/homepage-design03.jpg'),
					designRoom: 'Interior Design',
					title: 'Best For Any Office & Business Interior Solution',
					date: '25 December,2022'
				},
				{
					id: 3,
					img: require('../assets/news-design01.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022'
				},
				{
					id: 4,
					img: require('../assets/news-design02.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Low Cost Latest Invented Interior Designing Ideas.',
					date: '22 December,2022'
				},
				{
					id: 5,
					img: require('../assets/news-design03.jpg'),
					designRoom: 'Kitchen Design',
					title: 'Best For Any Office & Business Interior Solution',
					date: '25 December,2022'
				},
			]
		}
	}

}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.article-page {
	width: 100%;
}

.post {
	margin: 200px $margin 150px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	&__title {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 50px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 1px;
	}

	&__wrapper {
		display: flex;
		align-items: center;
		gap: 65px;
		padding: 22px;
		border-radius: 62px;
		border: 1px solid #E7E7E7;
		box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
	}

	&__heading {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 25px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 0.5px;
		margin-bottom: 22px;
	}

	&__text {
		color: $textColor;
		font-family: Jost;
		font-size: 22px;
		line-height: 150%;
		letter-spacing: 0.22px;
		margin-bottom: 50px;
	}

	&__nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__date {
		color: $textColor;
		font-family: Jost;
		font-size: 16px;
		letter-spacing: 0.16px;
	}

	&__button {
		width: 52px;
		height: 52px;
	}

}

.news {
	margin: 0 $margin;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 30px;

	&__title {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 50px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 1px;
	}

	&__container {
		display: grid;
		gap: 30px;
		grid-template-columns: repeat(3, 380px);
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
	background: $buttonColor;
}

.news__item:hover .news__item_button {
	background: #fff;
}
</style>


