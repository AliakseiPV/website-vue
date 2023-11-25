<template>
	<div>
		<nav class="navbar">
			<router-link to="/" class="navbar__logo">
				<img class="navbar__logo-img" src="../assets/logo.svg" alt="logo">
				<span class="navbar__logo-text">Interno</span>
			</router-link>
			<ul class="navbar__links">
				<li><router-link class="navbar__link" to="/">Home</router-link></li>
				<li><router-link class="navbar__link" to="/project">Project</router-link></li>
				<li><router-link class="navbar__link" to="/blog">Blog</router-link></li>
			</ul>
		</nav>
	</div>
</template>

<script>

export default {
	name: 'NavbarComponent',
	data() {
		return {
			// page: project,
		}
	},
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