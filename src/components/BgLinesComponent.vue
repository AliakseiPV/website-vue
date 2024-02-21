<template>
	<ul class="lines">
		<li class="lines__line"></li>
		<li class="lines__line"></li>
		<li class="lines__line"></li>
		<li class="lines__line"></li>
	</ul>
</template>

<script>
export default {
	name: 'BgLinesComponent',
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';

.lines {
	padding: 0 $margin;
	position: absolute;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	z-index: -10;

	&__line {
		width: 1px;
		height: 100%;
		background-color: #E6E6E6;
	}
}
</style>