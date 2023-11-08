<template>
	<ul class="pagination">
		<li class="pagination__btn">01</li>
		<li class="pagination__btn">02</li>
		<li class="pagination__btn">03</li>
		<li class="pagination__btn">
			<img src="../assets/vector.svg" alt="vector">
		</li>
	</ul>
</template>

<script>
export default {
	name: 'PaginationComponent',
	data() {
		return {

		}
	},
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';
.pagination {
	width: 100%;
	justify-content: center;
	display: flex;
	margin-top: 60px;
	margin-bottom: 200px;
	gap: 20px;

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
</style>