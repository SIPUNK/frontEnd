<template>
	<div id="count">
		<div id="text">
			<p id="text1">考研倒计时,</p>
			<br><br><br></br>
			<p id="motto">{{motto}}</p>
		</div>
	</div>
</template>

<script>
	import timeDown from '@/components/common/timeDown.vue'
	
	export default {
		name: 'homeCount',
		data() {
			return {
				// days: 100,
				motto: '人的一切痛苦，本质上都是对自己无能的狂怒！————王小波',
				endTime : '2020-12-19 8:30:00'
			}
		},
		components:{
			timeDown
		}
	}
</script>

<style>
	#count{
		background: url(~assets/img/home/background.png),no-repeat,left,top;
		height: 540px;
	}
	#text1,#days,#motto {
		margin: 0;
		font-family: SourceHanSansSC;
		    font-weight: 400;
		    font-size: 72px;
		    color: rgb(236, 244, 244);
		    font-style: normal;
		    letter-spacing: 0px;
		    line-height: 107px;
		    text-decoration: none;
	}
	#text {
		position: relative;
		left: 500px;
		top: 150px;
		width: 500px;
	}
	#days {
		position: relative;
		left: 400px;
	}
	#text1 {
		width: 400px;
	}
	#motto {
		font-family: SourceHanSansSC;
		    font-weight: 400;
		    font-size: 28px;
		    color: rgba(16, 16, 16, 0.75);
		    font-style: normal;
		    letter-spacing: 0px;
		    line-height: 71px;
		    text-decoration: none;
				width: 800px;
	}
</style>
