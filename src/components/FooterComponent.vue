<template>
	<div>
		<footer class="footer">
			<div class="footer__container">
				<div class="footer__info">
					<div class="footer__logo">
						<img class="footer__logo-img" src="../assets/logo.svg" alt="logo">
						<span class="footer__logo-text">Interno</span>
					</div>

					<p class="footer__text">It is a long established fact that a reader will be distracted lookings.</p>

					<div class="footer__socials">
						<svg width="25" height="25" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.6367 4.59375C16.6367 4.76953 16.6367 4.91016 16.6367 5.08594C16.6367 9.97266 12.9453 15.5625 6.16016 15.5625C4.05078 15.5625 2.11719 14.9648 0.5 13.9102C0.78125 13.9453 1.0625 13.9805 1.37891 13.9805C3.10156 13.9805 4.68359 13.3828 5.94922 12.3984C4.33203 12.3633 2.96094 11.3086 2.50391 9.83203C2.75 9.86719 2.96094 9.90234 3.20703 9.90234C3.52344 9.90234 3.875 9.83203 4.15625 9.76172C2.46875 9.41016 1.20312 7.93359 1.20312 6.14062V6.10547C1.69531 6.38672 2.29297 6.52734 2.89062 6.5625C1.87109 5.89453 1.23828 4.76953 1.23828 3.50391C1.23828 2.80078 1.41406 2.16797 1.73047 1.64062C3.55859 3.85547 6.30078 5.33203 9.35938 5.50781C9.28906 5.22656 9.25391 4.94531 9.25391 4.66406C9.25391 2.625 10.9062 0.972656 12.9453 0.972656C14 0.972656 14.9492 1.39453 15.6523 2.13281C16.4609 1.95703 17.2695 1.64062 17.9727 1.21875C17.6914 2.09766 17.1289 2.80078 16.3555 3.25781C17.0938 3.1875 17.832 2.97656 18.4648 2.69531C17.9727 3.43359 17.3398 4.06641 16.6367 4.59375Z"
								fill="#292F36" />
						</svg>
						<svg width="25" height="25" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path
								d="M4.14062 16V5.48828H0.871094V16H4.14062ZM2.48828 4.08203C3.54297 4.08203 4.38672 3.20312 4.38672 2.14844C4.38672 1.12891 3.54297 0.285156 2.48828 0.285156C1.46875 0.285156 0.625 1.12891 0.625 2.14844C0.625 3.20312 1.46875 4.08203 2.48828 4.08203ZM16.3398 16H16.375V10.2344C16.375 7.42188 15.7422 5.24219 12.4375 5.24219C10.8555 5.24219 9.80078 6.12109 9.34375 6.92969H9.30859V5.48828H6.17969V16H9.44922V10.7969C9.44922 9.42578 9.69531 8.125 11.3828 8.125C13.0703 8.125 13.1055 9.67188 13.1055 10.9023V16H16.3398Z"
								fill="#292F36" />
						</svg>

					</div>
				</div>

				<nav class="footer__nav">
					<ul class="footer__links">
						<li class="footer__heading">Pages</li>
						<li><router-link to="/" class="footer__link">Home</router-link></li>
						<li><router-link to="project" class="footer__link">Project</router-link></li>
						<li><router-link to="blog" class="footer__link">Blog</router-link></li>
					</ul>
				</nav>

				<div class="footer__contact">
					<span class="footer__heading">Contact</span>
					<p class="footer__contact-info">55 East Birchwood Ave. Brooklyn, New York 11201</p>
					<p class="footer__contact-info">contact@interno.com</p>
					<p class="footer__contact-info">(123) 456 - 7890</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import '../styles/vars.scss'

export default {
	name: 'FooterComponent'
}
</script>

<style scoped lang="scss">

@import '../styles/vars.scss';

.footer {
	margin: 0 $margin;

	&__container {
		width: 100%;
		padding-bottom: 8rem;
		display: flex;
		justify-content: space-between;
	}

	&__info {
		display: flex;
		flex-direction: column;
		max-width: 400px;
	}

	&__logo-img {
		width: 33px;
		height: 33px;
		margin-right: 10px;
	}

	&__logo-text {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 125%;
	}

	&__text {
		color: $textColor;
		font-family: Jost;
		font-size: 1.3rem;
		line-height: 150%;
		letter-spacing: 0.22px;
		margin: 1rem 0 2rem;
	}

	&__socials {
		display: flex;
		gap: 2rem;
	}

	&__links {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	&__link {
		color: $textColor;
		font-family: Jost;
		font-size: 1.3rem;
		letter-spacing: 0.22px;
	}

	&__heading {
		color: $headerColor;
		font-family: DM Serif Display;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: 125%;
	}

	&__contact {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		max-width: 300px;
	}

	&__contact-info {
		color: $textColor;
		font-family: Jost;
		font-size: 1.5rem;
		line-height: 125%;
		letter-spacing: 0.22px;
	}
}
</style>