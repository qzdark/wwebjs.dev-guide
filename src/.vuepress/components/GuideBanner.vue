<template>
	<RouterLink :to="$localePath" class="guide-banner-home">

		<img class="guide-banner" :src="$withBase('/branding/dark/banner_green_logo.png')" :alt="Banner">

	</RouterLink>
</template>

<style lang="stylus">
.guide-logo .sguide-banner {
	background-image: url('/branding/dark/banner_green_logo.png');
	padding-left: 1.5em;
	max-height: 200px;
	max-width: 50px;
	display: flex;
}
.yuu-theme-red {
	.guide-logo .guide-banner {
		src: url('/branding/dark/banner_red_logo.png');
	}
}
.yuu-theme-blue {
	.guide-logo .guide-banner {
		image: url('/branding/dark/banner_blue_logo.png');
	}
}
.yuu-theme-purple {
	.guide-logo .guide-banner {
		image: url('/branding/dark/banner_purple_logo.png');
	}
}

.yuu-theme-dark {
	.guide-logo .guide-banner {
		content:url('/branding/light/banner_green_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-red {
	.guide-logo .guide-banner {
		image: url('/branding/light/banner_red_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-blue {
	.guide-logo .guide-banner {
		image: url('/branding/light/banner_blue_logo.png');
	}
}
.yuu-theme-dark.yuu-theme-purple {
	.guide-logo .guide-banner {
		image: url('/branding/light/banner_purple_logo.png');
	}
}
</style>