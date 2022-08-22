<template>
	<router-link :to="$localePath" class="guide-logo">
		<span class="site-name"></span>
	</router-link>
</template>

<style lang="stylus">
.guide-logo .site-name {
	background: url('/book-small.png') top left / contain no-repeat;
	padding-left: 1.5em;
	max-height: 100%;
	display: flex;
	align-items: center;
	font-size: 2rem;
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
		background-image: url('/book-red-small.png');
	}
}
.yuu-theme-blue {
	.guide-logo .site-name {
		background-image: url('/book-blue-small.png');
	}
}
.yuu-theme-purple {
	.guide-logo .site-name {
		background-image: url('/book-purple-small.png');
	}
}
</style>