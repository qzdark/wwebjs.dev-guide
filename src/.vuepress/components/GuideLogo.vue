<template>
	<router-link :to="$localePath" class="guide-logo">
		<span class="site-name">
			<span class="site-banner"></span>
		</span>
	</router-link>
</template>

<style lang="stylus">
.guide-logo .site-name {
	background: url('/branding/dark/banner_green_logo.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
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
.yuu-theme-dark yuu-theme-red {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark yuu-theme-blue {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark yuu-theme-purple {
	.guide-logo .site-name {
		background-image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>