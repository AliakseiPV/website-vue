<template>
	<div class="article-page">
		<NavbarComponent />
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
	}
}
</script>

<style lang="scss" scoped>
.article-page {
	width: 100%;
}
</style>