<template>
	<div class="detailGrade-div">
		<p class="detailGrade-head">复试分数线</p>
		<div class="detailGrade-choice">
			  <el-select v-model="value" placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
				
		</div>
		
		<el-table :data="tableData" style="width: 90%;margin:0 auto;">
			<el-table-column prop="type" label="类型" width="180">
			</el-table-column>
			<el-table-column prop="subject" label="学科门类(专业)" width="180">
			</el-table-column>
			<el-table-column prop="totalGrade" label="总分">
			</el-table-column>
			<el-table-column prop="singleEqual" label="分数线单科等于100">
			</el-table-column>
			<el-table-column prop="singleMore" label="分数线单科大于100">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	export default {
		name: 'detailGrade',
		data() {
			return {
				tableData: [{
					type: '学术型',
					subject: '哲学',
					totalGrade: '295',
					singleEqual: '42',
					singleMore: '74'
				}, {
					type: '学术型',
					subject: '经济学',
					totalGrade: '345',
					singleEqual: '49',
					singleMore: '66'
				}, {
					type: '学术型',
					subject: '法学',
					totalGrade: '320',
					singleEqual: '44',
					singleMore: '63'
				}, {
					type: '学术型',
					subject: '教育学',
					totalGrade: '325',
					singleEqual: '44',
					singleMore: '63'
				}, {
					type: '学术型',
					subject: '文学',
					totalGrade: '355',
					singleEqual: '51',
					singleMore: '63'
				}, ],
				options: [{
				          value: '选项1',
				          label: '黄金糕'
				        }, {
				          value: '选项2',
				          label: '双皮奶'
				        }, {
				          value: '选项3',
				          label: '蚵仔煎'
				        }, {
				          value: '选项4',
				          label: '龙须面'
				        }, {
				          value: '选项5',
				          label: '北京烤鸭'
				        }],
				        value: ''
			}
		}
	}
</script>

<style>
	.detailGrade-head {
		font-family: SourceHanSansSC;
		font-weight: 400;
		font-size: 28px;
		color: rgba(56, 148, 255, 1);
		font-style: normal;
		letter-spacing: 0px;
		line-height: 42px;
		text-decoration: none;
	}

	.detailGrade-div {
		width: 1020px;
		height: 623px;

		z-index: 34;
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
		display: inline-block;
		float: right;
		position: relative;
		top: -625px;
		left: -60px;
	}

	/* 	el-table-column{
	} */
	.el-dropdown-link {
		cursor: pointer;
		color: #409EFF;
	}

	.el-icon-arrow-down {
		font-size: 12px;
	}
	.detailGrade-choice {
		float: right;
		margin-right: 50px;
	}
	.el-select-dropdown__item {
		display: block;
	}
	.el-input__icon {
		height: 80%;
	}
</style>
