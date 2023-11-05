<template>
	<div id="app">
		<BgLinesComponent />
		<ArticlePage />
	</div>
</template>

<script>
import BgLinesComponent from './components/BgLinesComponent.vue';
import ArticlePage from './pages/ArticlePage'

export default {
	name: 'App',
	components: {
		BgLinesComponent,
		ArticlePage
	}
}
</script>

<style lang="scss">
@import './styles/vars.scss';

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

ul {
	list-style: none;
}

a {
	text-decoration: none;
}

#app {
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
}

.arrow_btn {
	border-radius: 50%;
	border: none;
	background-color: $buttonColor;
}
</style>
