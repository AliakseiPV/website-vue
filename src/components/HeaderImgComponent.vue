<template>
	<div class="hero">
		<header class="hero__header">
			<img class="hero__img" :src="imgSrc" alt="hero-image">
			<div v-if="header" class="hero__wrapper">
				<h1 class="hero__title">{{ header }}</h1>
				<div class="hero__bread-crumbs">
					<router-link class="hero__link" v-for="link in links" :key="link.id" :to="link.link">{{ link.name }}</router-link>
				</div>
			</div>
		</header>
	</div>
</template>

<script>
export default {
	name: 'HeaderImgComponent',
	props: {
		imgSrc: String,
		header: String,
		links: Array
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.hero {
	width: 100%;
	height: 356px;
	display: flex;
	align-items: end;
	justify-content: center;
	position: relative;

	&__img {
		position: absolute;
		top: 0;
		z-index: -1;
		width: 100%;
		height: 100%;
	}

	&__wrapper {
		border-radius: 37px 37px 0 0;
		width: 500px;
		height: 180px;
		background-color: #fff;
		z-index: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: center;
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
		margin-left: 2px;
	}
}
</style>