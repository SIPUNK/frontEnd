<template>
	<div class="container">
		<ul class="time-horizontal">
			<li>
				<b></b>
				3-6月<br>
				择校择专业
			</li>
			<li>
				<b></b>
				6-7月<br>
				录取通知书
			</li>
			<li>
				<b></b>
				7-8月<br>
				考研大纲<br>
				英语/数学/政治<br>
				专业课考试范围
			</li>
			<li>
				<b></b>
				11月<br>
				现场确认<br>
				招生报考公告汇总<br>
				报考点现场确认汇总
			</li>
			<li>
				<b></b>
				11月15日-12月21日<br>
				冲刺备考
			</li>

		</ul>
		<!-- <div class="to_right"></div> -->
		<i class="el-icon-arrow-right"></i>
	</div>

</template>


<script>
	export default {
		name: 'timeLine',
		data() {
			return {

			};
		}
	};
</script>

<style>
	.time-horizontal {
		list-style-type: none;
		border-top: 1px solid #707070;
		/* max-width: 800px; */
		padding: 0px;
		margin-top: 50px;
	}

	.time-horizontal li {
		float: left;
		position: relative;
		text-align: center;
		width: 17%;
		padding-top: 10px;
	}

	.time-horizontal li b:before {
		content: '';
		position: absolute;
		top: -10px;
		left: 47%;
		width: 12px;
		height: 12px;
		border: 2px solid #4c4c4c;
		border-radius: 8px;
		background: #ffffff;
	}

	.container {
		margin-top: 50px;
		background-color: #73cbe1;
		width: 100%;
		height: 180px;
		bottom: 140px;
		z-index: 27;
		background-color: rgba(115, 203, 255, 0.61);
		border-color: rgb(187, 187, 187);
		border-width: 1px;
		border-style: solid;
		font-size: 14px;
		padding: 0px;
		text-align: center;
		line-height: 20px;
		font-weight: normal;
		font-style: normal;
		opacity: 1;
		position: relative;

	}

	/* .to_right {
	    width: 0;
	    height: 0;
	    border-left: 20px solid rgba(115, 203, 255, 1.0);
	    border-top: 20px solid transparent;
	    border-bottom: 20px solid transparent;
			display: inline-block;
			position: relative;
			top: -21px;
			right: -53px;
	} */
	.el-icon-arrow-right {
		display: inline-block;
		position: relative;
		top: -14.5px;
		right: -55px;
		font-size: 30px;
	}
</style>
