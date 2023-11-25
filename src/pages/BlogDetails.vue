<template>
	<div class="blog-page">
		<NavbarComponent />
		<HeaderImgComponent :imgSrc="require('../assets/news-hero.jpg')" />

		<div class="blog__container">

			<div class="blog__wrapper">
				<div class="blog" v-for="post in filteredPosts" :key="post.id">
					<h2 class="blog__title">{{ post.firstTitle }}</h2>
					<img class="blog__img" :src="post.firstImg" alt="kitchen">

					<div class="blog__nav">
						<div class="blog__date">{{ post.date }}</div>

						<div class="blog__bread-crumbs">
							<a class="blog__link" href="#">Interior</a>
							<a class="blog__link" href="./homepage.html">Home</a>
							<a class="blog__link" href="#">Decore</a>
						</div>

					</div>

					<p class="blog__text">{{ post.text1 }}</p>

					<p class="blog__text blog__text-pos">{{ post.text2 }}</p>

					<div class="blog__slogan">
						<span class="blog__commas">,,</span>
						<p class="blog__slogan-text">The details are not the details.<br>They make the design.</p>
					</div>

					<h2 class="blog__title">{{ post.secondTitle }}</h2>

					<p class="blog__text">{{ post.text3 }}</p>

					<ul class="blog__list">
						<li class="blog__list-item">
							<span class="blog__list-num">1</span>
							{{ post.listItem1 }}
						</li>
						<li class="blog__list-item">
							<span class="blog__list-num">2</span>
							{{ post.listItem2 }}
						</li>
						<li class="blog__list-item">
							<span class="blog__list-num">3</span>
							{{ post.listItem3 }}
						</li>
					</ul>

					<img class="blog__img" :src="post.secondImg" alt="kitchen">

					<p class="blog__text blog__text-pos ">
						{{ post.text4 }}
					</p>

				</div>
			</div>


			<div class="blog__tags">
				<h2 class="blog__tags-title">Tags</h2>
				<div class="blog__tags-wrapper" >
					<div class="blog__tags-item" v-for="(tag, index) in tags" :key="index" @click="findTag(tag)">
						<span class="blog__tags-name">{{ tag }}</span>
					</div>
				</div>
			</div>

		</div>

		<FooterComponent />
	</div>
</template>

<script>
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderImgComponent from '@/components/HeaderImgComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'HomePage',
	components: {
		NavbarComponent,
		FooterComponent,
		HeaderImgComponent
	},
	data() {
		return {
			tags: ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning'],
			findPostsTag: '',
		}
	},
	mounted() {
		this.fetchPosts()
	},
	methods: {
		...mapActions(['fetchPosts']),
		findTag(tag) {
			this.findPostsTag = tag
		}
	},
	computed: {
		...mapGetters(['posts']),
		filteredPosts() {
			if (this.findPostsTag) {
				return this.posts.filter((el) => el.tag === this.findPostsTag)
			} else {
				return this.posts
			}
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.blog-page {
	width: 100%;
}

.blog {

	&__container {
		display: flex;
		margin: 200px $margin 96px;
		gap: 52px;
	}

	&__wrapper {
		flex: 2;
		display: flex;
		flex-direction: column;
		gap: 100px;
	}

	&__title {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 50px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 1px;
		margin-bottom: 20px;
	}

	&__img {
		border-radius: 50px;
		width: 100%;
	}

	&__nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 47px 0;
	}

	&__date {
		color: $textColor;
		font-family: Jost;
		font-size: 16px;
		letter-spacing: 0.16px;
	}

	&__link {
		color: $textColor;
		font-family: Jost;
		font-size: 16px;
		font-weight: 400;
		line-height: 150%;
		letter-spacing: 0.16px;
		text-transform: capitalize;
	}

	&__link:not(:last-child):after {
		content: '\/';
		margin-left: 3px;
	}

	&__text {
		color: #4D5053;
		font-family: Jost;
		font-size: 22px;
		line-height: 150%;
		letter-spacing: 0.22px;
	}

	&__text-pos {
		margin-top: 40px;
	}

	&__slogan {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: end;
		padding: 53px 200px;
		border-radius: 50px;
		background: #F4F0EC;
		height: 267px;
		position: relative;
		margin: 35px 0;
	}

	&__commas {
		color: #CDA274;
		font-family: DM Serif Display;
		font-size: 200px;
		font-style: italic;
		line-height: 125%;
		letter-spacing: 4px;
		position: absolute;
		top: -35%
	}

	&__slogan-text {
		color: #CDA274;
		text-align: center;
		font-family: DM Serif Display;
		font-size: 25px;
		font-style: italic;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 0.5px;
	}

	&__list {
		margin: 24px 0 44px;
		display: flex;
		flex-direction: column;
		gap: 32px;
	}

	&__list-num {
		color: #CDA274;
		font-family: DM Serif Display;
		font-size: 20px;
		line-height: 125%;
		letter-spacing: 0.4px;
	}

	&__list-item {
		display: flex;
		gap: 11px;
		color: $textColor;
		font-family: Jost;
		font-size: 22px;
		line-height: 150%;
		letter-spacing: 0.22px;
	}


	&__tags {
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 24px;
	}

	&__tags-title {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 25px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 0.5px;
	}

	&__tags-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	&__tags-item {
		border-radius: 10px;
		background-color: $buttonColor;
		padding: 9px 30px;
	}

	&__tags-name {
		color: $headerColor;
		font-family: Jost;
		font-size: 18px;
		font-weight: 400;
		line-height: 125%;
		letter-spacing: 0.36px;
	}

	&__tags-item:hover {
		background-color: $headerColor;
		cursor: pointer;
	}

	&__tags-item:hover .blog__tags-name {
		color: #fff;
	}
}
</style>