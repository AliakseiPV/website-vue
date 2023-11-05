<template>
	<nav class="navbar">
		<div class="navbar__logo">
			<img class="navbar__logo-img" src="../assets/logo.svg" alt="logo">
			<span class="navbar__logo-text">Interno</span>
		</div>
		<ul class="navbar__links">
			<li><a class="navbar__link" href="#">Home</a></li>
			<li><a class="navbar__link" href="#">Project</a></li>
			<li><a class="navbar__link" href="#">Blog</a></li>
		</ul>
	</nav>
</template>

<script>

export default {
	name: 'NavbarComponent',
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.navbar {
	margin: 0 $margin;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 3.4rem 0;

	&__logo-img {
		width: 34px;
		margin-right: 10px;
	}

	&__logo-text {
		font-family: DM Serif Display;
		color: $headerColor;
		font-size: 2.5rem;
		line-height: 125%;
	}

	&__links {
		display: flex;
		gap: 3rem;
		align-items: center;
	}

	&__link {
		font-family: Jost;
		color: $headerColor;
		font-size: 1.25rem;
		line-height: 125%;
	}
}
</style>