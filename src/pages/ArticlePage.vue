<template>
	<div class="article-page">
		<NavbarComponent />

		<div class="hero">
			<header class="hero__header">
				<h1 class="hero__title">Articles & News</h1>
				<div class="hero__bread-crumbs">
					<a class="hero__link" href="#">Home</a>
					<a class="hero__link" href="#">Blog</a>
				</div>
			</header>
		</div>

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
						<img class="news__item_img" :src=article.img alt="kitchen">
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

			<ul class="news__pagination">
				<li class="news__btn">01</li>
				<li class="news__btn">02</li>
				<li class="news__btn">03</li>
				<li class="news__btn">
					<img src="../assets/vector.svg" alt="vector">
				</li>
			</ul>
		</div>

		<FooterComponent />
	</div>
</template>

<script>
import NavbarComponent from '../components/NavbarComponent'
import FooterComponent from '../components/FooterComponent'

export default {
	name: 'ArticlePage',
	components: {
		NavbarComponent,
		FooterComponent
	},
	data() {
		return {
			articles: [
				{
					id: 0,
					img: '../assets/homepage-design01.jpg',
					designRoom: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022'
				},
				{
					id: 1,
					img: '../assets/homepage-design02.jpg',
					designRoom: 'Living Design',
					title: 'Low Cost Latest Invented Interior Designing Ideas.',
					date: '22 December,2022'
				},
				{
					id: 2,
					img: '../assets/homepage-design03.jpg',
					designRoom: 'Interior Design',
					title: 'Best For Any Office & Business Interior Solution',
					date: '25 December,2022'
				},
				{
					id: 3,
					img: '../assets/news-design01.jpg',
					designRoom: 'Kitchen Design',
					title: 'Let’s Get Solution For Building Construction Work',
					date: '26 December,2022'
				},
				{
					id: 4,
					img: '../assets/news-design02.jpg',
					designRoom: 'Kitchen Design',
					title: 'Low Cost Latest Invented Interior Designing Ideas.',
					date: '22 December,2022'
				},
				{
					id: 5,
					img: '../assets/news-design03.jpg',
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

.hero {
	width: 100%;
	height: 356px;
	display: flex;
	align-items: end;
	justify-content: center;
	background-image: url(../assets/news-hero.jpg);

	&__header {
		border-radius: 37px 37px 0 0;
		width: 500px;
		height: 180px;
		background-color: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
	}

	&__title {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 50px;
		font-weight: 400;
		line-height: 125%;
	}

	&__link {
		color: $textColor;
		font-family: Jost;
		font-size: 22px;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__link:not(:last-child):after {
		content: '\/';
		margin-left: 3px;
	}
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

	&__pagination {
		display: flex;
		margin-top: 20px;
		margin-bottom: 200px;
		gap: 20px;
	}

	&__btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 52px;
		height: 52px;
		border: 1px solid #CDA274;
		border-radius: 50%;
	}

	&__btn:hover {
		background-color: $buttonColor;
		border-color: $buttonColor;
		cursor: pointer;
	}
}

.news__item:hover {
	background: $buttonColor;
}

.news__item:hover .news__item_button {
	background: #fff;
}
</style>


