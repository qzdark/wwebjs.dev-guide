<template>
	<RouterLink :to="$localePath" class="guide-banner-home">

		<img class="guide-banner" :alt="Banner">

	</RouterLink>
</template>

<style lang="stylus">
:root {
 	--theme-banner: url('/branding/dark/banner_green_logo.png');
}

.guide-banner-home .guide-banner {
	content: var(--theme-banner);
	max-height: 2.5rem;
	display: flex;
	align-items: center;
	@media screen and (max-width: $MQMobile) {
		overflow: unset;
		padding-left: 0.3rem
	}
	@media screen and (max-width: 719px) {
		--theme-banner: url('/branding/dark/banner_green_normal.png');
	}
}

.yuu-theme-red {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/dark/banner_red_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/dark/banner_red_normal.png');
		}
	}
}
.yuu-theme-blue {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/dark/banner_blue_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/dark/banner_blue_normal.png');
		}
	}
}
.yuu-theme-purple {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/dark/banner_purple_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/dark/banner_purple_normal.png');
		}
	}
}

.yuu-theme-dark {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/light/banner_green_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/light/banner_green_normal.png');
		}
	}
}
.yuu-theme-dark.yuu-theme-red {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/light/banner_red_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/light/banner_red_normal.png');
		}
	}
}
.yuu-theme-dark.yuu-theme-blue {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/light/banner_blue_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/light/banner_blue_normal.png');
		}
	}
}
.yuu-theme-dark.yuu-theme-purple {
	.guide-banner-home .guide-banner {
		--theme-banner: url('/branding/light/banner_purple_logo.png');
		@media screen and (max-width: 719px) {
			--theme-banner: url('/branding/light/banner_purple_normal.png');
		}
	}
}
</style>