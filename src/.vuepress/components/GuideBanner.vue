<template>
	<RouterLink :to="$localePath" class="guide-banner-home">

		<img class="guide-banner" :alt="Banner">

	</RouterLink>
</template>

<style lang="stylus">
.guide-banner-home .guide-banner {
	content: url('/branding/dark/banner_green_logo.png');
	padding-left: 1em;
	display: flex;
	max-height: 10%;
	max-width 40%;
	align-items: center;

	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}
}
.yuu-theme-red {
	.guide-banner-home .guide-banner {
		content: url('/branding/dark/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-banner-home .guide-banner {
		content: url('/branding/dark/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-banner-home .guide-banner {
		content: url('/branding/dark/banner_purple_logo.png');
	}
}

.yuu-theme-dark {
	.guide-banner-home .guide-banner {
		content: url('/branding/light/banner_green_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-red {
	.guide-banner-home .guide-banner {
		content: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-blue {
	.guide-banner-home .guide-banner {
		content: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-purple {
	.guide-banner-home .guide-banner {
		content: url('/branding/light/banner_purple_logo.png');
	}
}
</style>