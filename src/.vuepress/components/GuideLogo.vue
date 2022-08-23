<template>
	<RouterLink :to="$localePath" class="guide-banner-home">

		<img class="guide-banner" :src="$withBase('/branding/dark/banner_green_logo.png')" :alt="$siteTitle">

	</RouterLink>
</template>

<style lang="stylus">
.guide-logo .site-name {
	background-image: url('/branding/dark/banner_green_logo.png');
	padding-left: 1.5em;
	max-height: 200px;
	max-width: 50px;
	display: flex;
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