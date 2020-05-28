<template>
	<div class="procedure">
		<p class="procedure-p1">考研报名流程</p>
		<p class="procedure-p2">2021考研报名时间</p>
		<p class="procedure-p2">预报名时间</p>
		<p class="procedure-p2">2020年9月24日至9月27日（每天9:00-22:00）</p>
		<p class="procedure-p1">报名时间</p>
		<p class="procedure-p2">2020年10月10日—31日每天9:00-22:00（逾期不再补报，也不得再修改报名信息）</p>
		<p class="procedure-p1">现场确认：</p>
		<p class="procedure-p2">各省招生办自定</p>
		<p class="procedure-p1">初试时间：</p>
		<p class="procedure-p2">2020年12月19日至12月21日（超过3小时的考试科目在12月24日进行）</p>
		<p class="procedure-p1">报名注意事项：</p>
		<p><a class="procedure-a" href="#">网上填报五问</a></p>
		<p><a class="procedure-a" href="#">打印准考证常见问题</a></p>
		<p><a class="procedure-a" href="#">网上支付问题解答</a></p>
		<p><a class="procedure-a" href="#">五类报考问题</a></p>
	</div>
</template>

<script>
	export default {
		name: 'procedure',

	}
</script>

<style>
	.procedure-p1 {
		font-family: SourceHanSansSC;
		font-weight: 700;
		font-size: 18px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 27px;
		text-decoration: none;
		padding-left: 10px;
	}

	.procedure {
		display: inline-block;
		border: 1px solid #000;
		width: 450px;
		height: 660px;
		z-index: 5;
		border-color: rgb(187, 187, 187);
		border-width: 1px;
		border-style: solid;
		font-size: 14px;
		padding: 0px;
		line-height: 20px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		position: relative;
		left: 75px;
	}

	.procedure-p2 {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 14px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 20px;
		text-decoration: none;
		padding-left: 20px;
	}

	.procedure-a {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 14px;
		color: rgb(16, 16, 16);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 20px;
		text-decoration: none;

	}
</style>
