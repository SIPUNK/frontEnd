<template>
	<div class="detailGrade-div">
		<p class="detailGrade-head">复试分数线</p>
		<div class="detailGrade-choice">
			<el-select v-model="value" placeholder="请选择年份">
				<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
				</el-option>
			</el-select>
		</div>

		<el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)" 
		    :show-header="true"

		style="width: 90%;margin:0 auto;">
			<el-table-column prop="type" label="类型" width="180">
			</el-table-column>
			<el-table-column prop="subject" label="学科门类(专业)" width="180">
			</el-table-column>
			<el-table-column prop="total_points" label="总分">
			</el-table-column>
			<el-table-column prop="politics" label="政治">
			</el-table-column>
			<el-table-column prop="english" label="外语">
			</el-table-column>
			<el-table-column prop="profession1" label="业务课一">
			</el-table-column>
			<el-table-column prop="profession2" label="业务课二">
			</el-table-column>
		</el-table>
		
		<el-pagination
		    @size-change="handleSizeChange"
		    @current-change="handleCurrentChange"
		    :current-page="currentPage"
		    :page-sizes="[10, 20, 30, 50, 100]"
		    :page-size="pageSize"
		    layout="total,  prev, pager, next, jumper"
		    :total="tableData.length">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name: 'detailGrade',
		data() {
			return {
				// 当前页
				currentPage: 1,
				// 每页多少条
				pageSize: 8,
				
				
				school_id: '',
				school_name: this.$route.params.school,
				year: '',
				tableData: [],
				options: [{
					value: '选项1',
					label: '2020'
				}, {
					value: '选项2',
					label: '2019'
				}, {
					value: '选项3',
					label: '2018'
				}, {
					value: '选项4',
					label: '2017'
				}, {
					value: '选项5',
					label: '2016'
				}],
				value: ''
			}
		},
		methods: {
		            // 每页多少条
		            handleSizeChange(val) {
		                this.pageSize = val;
		            },
		            // 当前页
		            handleCurrentChange(val) {
		                this.currentPage = val;
		            }
		        },

		created() {
			this.$http.post('http://118.178.184.69:4396/school/getallschool', ).then((res) => {
					for (let i = 0; i < res.data.length; i++) {
						if (res.data[i].school_name == this.school_name) {
							this.school_id = res.data[i].school_id
						}
					}

				},
				(error) => {})
		},
		watch: {
			value(val) {
				for (let i = 0; i < this.options.length; i++) {
					if (this.options[i].value == this.value) {
						this.year = this.options[i].label
					}
				}
				let data = {
					'school_id': parseInt(this.school_id)
				}
				this.$http.post('http://118.178.184.69:4396/score/selectbyid', data).then((response) => {
						console.log(response.data)
						this.tableData = []
						for (let i = 0; i < response.data.length; i++) {
							if (response.data[i].year == this.year) {
								if (response.data[i].type == 1) {
									response.data[i].type = "学术型"
								} else if (response.data[i].type == 2) {
									response.data[i].type = "专业型"
								}
								let data1 = {
									"subject_id": response.data[i].subject
								}
								this.$http.post('http://118.178.184.69:4396/subject/getsubjectbyid', data1).then(
									(response1) => {
										response.data[i].subject = response1.data.subject_name
										this.tableData.push(response.data[i])
									},
									(error) => {})
							}
						}
					},
					(error) => {})
				console.log(this.year)
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
