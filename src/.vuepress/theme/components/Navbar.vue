<template>
	<header class="navbar">
		<sidebar-button @toggle-sidebar="$emit('toggle-sidebar')" />
		<div v-if="yuuConfig.logo" ref="yuuLogo" class="navbar-logo">
			<component :is="yuuConfig.logo" @hook:mounted="handleLinksWrapWidth()" />
		</div>
		<router-link v-else :to="$localePath" class="home-link">
			<img v-if="$site.themeConfig.logo" class="logo" :src="$withBase($site.themeConfig.logo)"
				:alt="$siteTitle" />
			<span v-if="$siteTitle" ref="siteName" class="site-name" :class="{ 'can-hide': $site.themeConfig.logo }">{{
			$siteTitle }}</span>
		</router-link>
		<div class="links" :style="linksWrapMaxWidth ? { 'max-width': linksWrapMaxWidth + 'px' } : {}">
			<div v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.before" class="user-options-before">
				<component :is="yuuConfig.extraOptions.before" @hook:mounted="handleLinksWrapWidth()" />
			</div>
			<user-settings />
			<div v-if="yuuConfig.extraOptions && yuuConfig.extraOptions.after" class="user-options-after">
				<component :is="yuuConfig.extraOptions.after" @hook:mounted="handleLinksWrapWidth()" />
			</div>
			<algolia-search-box v-if="isAlgoliaSearch" :options="algolia" />
			<search-box v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
			<nav-links class="can-hide" />
		</div>
	</header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox'
import SearchBox from '@SearchBox'
import SidebarButton from '@parent-theme/components/SidebarButton.vue'
import NavLinks from '@parent-theme/components/NavLinks.vue'
import UserSettings from '@theme/components/settings/UserSettings.vue'

function css(el, property) {
	// NOTE: Known bug, will return 'auto' if style value is 'auto'
	const win = el.ownerDocument.defaultView
	// null means not to return pseudo styles
	return win.getComputedStyle(el, null)[property]
}

export default {
	name: 'Navbar',
	components: {
		SidebarButton,
		NavLinks,
		SearchBox,
		AlgoliaSearchBox,
		UserSettings,
	},
	data() {
		return {
			linksWrapMaxWidth: null,
		}
	},
	computed: {
		algolia() {
			return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {}
		},
		isAlgoliaSearch() {
			return this.algolia && this.algolia.apiKey && this.algolia.indexName
		},
		yuuConfig() {
			return this.$site.themeConfig.yuu
		},
	},
	mounted() {
		this.handleLinksWrapWidth()
		window.addEventListener('resize', this.handleLinksWrapWidth, false)

		window.addEventListener('scroll', () => {
			if (window.scrollY > 0) {
				const navbar = document.querySelector(".navbar");
				navbar.style.boxShadow = "#141414 0px 1px 0px 0px, #141414 0px 1px 2px 0px";
			}
			else {
				const navbar = document.querySelector(".navbar");
				navbar.style.boxShadow = "";
			}
		})
	},
	destroyed() {
		window.removeEventListener('resize', this.handleLinksWrapWidth)
	},
	methods: {
		handleLinksWrapWidth() {
			const MOBILE_DESKTOP_BREAKPOINT = 719 // refer to config.styl
			const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'))
			if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
				this.linksWrapMaxWidth = null
			} else {
				const ref = this.$refs[this.yuuConfig.logo ? 'yuuLogo' : 'siteName']
				this.linksWrapMaxWidth = this.$el.offsetWidth - NAVBAR_VERTICAL_PADDING - ((ref && ref.offsetWidth) || 0)
			}
		},
	},
}
</script>

<style lang="stylus">
$navbar-vertical-padding = 0.7rem;
$navbar-horizontal-padding = 1.5rem;

.navbar {
	padding: $navbar-vertical-padding $navbar-horizontal-padding;
	line-height: $navbarHeight - 1.4rem;

	a, span, img {
		display: inline-block;
	}

	.navbar-logo {
		display: inline-block;
	}

	.logo {
		height: $navbarHeight - 1.4rem;
		min-width: $navbarHeight - 1.4rem;
		margin-right: 0.8rem;
		vertical-align: top;
	}

	.site-name {
		font-size: 1.3rem;
		font-weight: 600;
		color: $textColor;
		position: relative;
	}

	.links {
		padding-left: 1.5rem;
		box-sizing: border-box;
		background-color: white;
		white-space: nowrap;
		font-size: 0.9rem;
		position: absolute;
		right: $navbar-horizontal-padding;
		top: $navbar-vertical-padding;
		display: flex;

		.search-box {
			flex: 0 0 auto;
			vertical-align: top;
		}
	}
}

.search-box input {
    cursor: pointer;
    width: 0rem;
    height: 2rem;
    color: transparent;
    display: inline-block;
	border: 1px solid #fff;
    border-radius: 2rem;
    font-size: 0.9rem;
    line-height: 2rem;
    padding: 0 0.5rem 0 2rem;
    outline: none;
    transition: all 0.2s ease;
    background: #fff url(./search.svg) 0.6rem 0.5rem no-repeat;
    background-size: 1rem;
}

.search-box input:focus {
    width: 20rem;
	color: #4e6e8e;
}

.search-box input {
	color: transparent;
    background-color: transparent;
}

@media (max-width: $MQMobile) {
	.navbar {
		padding-left 4rem;

		.can-hide {
			display: none;
		}

		.links {
			padding-left: 1.5rem;
		}

		.site-name {
			width: calc(100vw - 9.4rem);
			overflow: hidden;
			white-space: nowrap;
			text-overflow: ellipsis;
		}
	}
}
</style>
