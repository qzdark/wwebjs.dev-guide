<template>
	<div router-link :to="$localePath" class="guide-logo">
		<div alt="Banner was not able to load" class="site-name"></div>
	</div>
</template>

<style lang="stylus">
.guide-logo .site-name {
	background-image: -webkit-image-set(
    	url('/branding/dark/banner_green_logo.png') 1x,
    	url('/branding/dark/banner_green_logo.png') 2x);
  	background-image: image-set(
    	url('/branding/dark/banner_green_logo.png') 1x,
    	url('/branding/dark/banner_green_logo.png') 2x);
	padding-left: 1.5em;
	max-height: 20%;
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
		image: url('/branding/dark/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-logo .site-name {
		image: url('/branding/dark/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-logo .site-name {
		image: url('/branding/dark/banner_purple_logo.png');
	}
}

.yuu-theme-dark {
	.guide-logo .site-name {
		image: url('/branding/light/banner_green_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-red {
	.guide-logo .site-name {
		image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-blue {
	.guide-logo .site-name {
		image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-purple {
	.guide-logo .site-name {
		image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>