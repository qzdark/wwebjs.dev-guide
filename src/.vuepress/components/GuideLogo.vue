<template>
	<router-link :to="$localePath" class="guide-logo">
		<span class="site-name">12</span>
	</router-link>
</template>

<style lang="stylus">
.guide-logo {
	background: url('/branding/dark/banner_green_logo.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 90%;
	display: flex;
	align-items: center;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
	@media screen and (max-width: 600px) {
		padding-left: 0;
	}
	@media screen and (max-width: 600px) {
		
	}
}
.yuu-theme-red {
	.guide-logo {
		background-image: url('/branding/dark/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-logo {
		background-image: url('/branding/dark/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-logo {
		background-image: url('/branding/dark/banner_purple_logo.png');
	}
}

.yuu-theme-dark and .yuu-theme-red {
	.guide-logo {
		background-image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark and .yuu-theme-blue {
	.guide-logo {
		background-image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark and .yuu-theme-purple {
	.guide-logo {
		background-image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>