<template>
	<div router-link :to="$localePath" class="guide-logo">
		<img src="/branding/dark/banner_green_logo.png" alt="Banner was not able to load">
	</div>
</template>

<style lang="stylus">
.guide-logo {
	padding-left: 1.5em;
	max-height: 100%;
	align-items: center;
	display: flex;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
	@media screen and (max-width: 600px) {
		padding-left: 0;
	}
	@media screen and (max-width: 450px) {
		
	}
}
.yuu-theme-red {
	.guide-logo .site-name {
		background-image: url('/branding/dark/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-logo .site-name {
		background-image: url('/branding/dark/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-logo .site-name {
		background-image: url('/branding/dark/banner_purple_logo.png');
	}
}

.yuu-theme-dark {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_green_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-red {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-blue {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-purple {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>