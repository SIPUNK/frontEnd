<template>
	<div id="logoBlock">
		<img alt="logo" :src="imgSrc" id="logoPicture"/>
		<h3 id="logoName">烤盐屋</h3>
	</div>
</template>

<script>
	import logoSrc from 'assets/img/common/logo.png'
	
	export default {
		name: 'logo',
		data() {
			return {
				imgSrc: logoSrc
			}
		},
	}
</script>

<style>
	#logoName {
		display: inline;
		color: #ffffff;
	}
	#logoBlock {
		background-color: #73cbe0;
		width: 120px;
		margin: 10px 0px 20px 20px;
		height: 60px;
		border-radius:5px;
	}
	#logoPicture {
		padding: 5px 0 0 5px;
	}
</style>
