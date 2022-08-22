<template>
	<router-link :to="$localePath" class="guide-logo">
		<p class="site-banner"></p>
	</router-link>
</template>

<style lang="stylus">
.guide-logo site-banner {
	background-image: url('/branding/dark/banner_green_logo.png');
	padding-left: 1.5em;
	height: 200px
	width: 200px
	max-height: 20%;
	align-items: center;
	display: flex;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
	@media screen and (max-width: 600px) {
		padding-left: 0;
	}
}
.yuu-theme-red {
	.guide-logo site-banner {
		image: url('/branding/dark/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-logo site-banner {
		image: url('/branding/dark/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-logo site-banner {
		image: url('/branding/dark/banner_purple_logo.png');
	}
}

.yuu-theme-dark {
	.guide-logo site-banner {
		image: url('/branding/light/banner_green_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-red {
	.guide-logo site-banner {
		image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-blue {
	.guide-logo site-banner {
		image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-purple {
	.guide-logo site-banner {
		image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>