<template>
	<div id="app">
		<BgLinesComponent />
		<router-view />
	</div>
</template>

<script>
import BgLinesComponent from './components/BgLinesComponent.vue'

export default {
	name: 'App',
	components: {
		BgLinesComponent,
	},

}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=DM+Serif+Display:regular,italic);
@import url(https://fonts.googleapis.com/css?family=Jost:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic);


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
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
