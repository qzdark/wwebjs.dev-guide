<template>
	<router-link :to="$localePath" class="guide-logo">
		<div class="site-name">1</div>
	</router-link>
</template>

<style lang="stylus">
.guide-logo .site-name {
	background: url('/assets/branding/light/banner_green_logo.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
	@media screen and (max-width: 600px) {
		text-indent: -9999px;
		padding-left: 0;
	}
}
.yuu-theme-red {
	.guide-logo .site-name {
		background-image: url('/assets/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-logo .site-name {
		background-image: url('/assets/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-logo .site-name {
		background-image: url('/assets/branding/light/banner_purple_logo.png');
	}
}

.yuu-theme-red .yuu-theme-dark {
	.guide-logo .site-name {
		background-image: url('/assets/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-blue .yuu-theme-dark {
	.guide-logo .site-name {
		background-image: url('/assets/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-purple .yuu-theme-dark {
	.guide-logo .site-name {
		background-image: url('/assets/branding/light/banner_purple_logo.png');
	}
}

</style>