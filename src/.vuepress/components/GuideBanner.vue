/*Need to work on this
* Banner does not fit right in the navbar
* Maybe add a Guide banner also
*/

<template>
	<RouterLink :to="$localePath" class="guide-banner-home">

		<img class="guide-banner" :alt="Banner">

	</RouterLink>
</template>

<style lang="stylus">
.guide-banner-home .guide-banner {
	content: url('/branding/dark/banner_green_logo.png');
	padding-left: 1.5em;
	display: flex;
	max-height: 40px;
	max-width 225px;
	align-items: center;
	display: inline-block;

	@media screen and (max-width: $MQMobile) {
		overflow: unset;
	}

	@media screen and (max-width: 719px) {
		max-hight: 40px;
		max-wight: auto;
		text-indent: -9999px;
		padding-left: 0;
	}
}
.yuu-theme-red {
	.guide-banner-home .guide-banner {
		content: url('/branding/dark/banner_red_logo.png');
	}
	::-webkit-scrollbar-thumb {
  		background: #1a1a1a;
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