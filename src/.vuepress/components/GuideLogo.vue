<template>
	<div router-link :to="$localePath" class="guide-logo"><div>
		<span class="site-name">12</span>
	</router-link>
</template>

<style lang="stylus">
.guide-logo {
	background: url('/branding/dark/banner_green_logo.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
	@media screen and (max-width: 100%) {
		padding-left: 0;
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

.yuu-theme-red and yuu-theme-dark {
	.guide-logo {
		background-image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-blue and yuu-theme-dark {
	.guide-logo {
		background-image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-purple and yuu-theme-dark {
	.guide-logo {
		background-image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>