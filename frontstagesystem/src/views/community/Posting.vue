<template>
	<div class="contain_box">
		<div class="Posting_box">
			<div class="Posting_title">
				<span>您已在烤盐屋发布{{PostNum}}篇帖子</span>
			</div>
			<div class="Posting_input">
				<el-input placeholder="请输入标题" v-model="title"></el-input>
				<el-select placeholder="请选择模块" v-model="Modular" style="margin-left: 20px;">
					<el-option v-for="item in ModularList" :key="item.value" :label="item.label" :value="item.value"></el-option>
				</el-select>
			</div>
			<div class="Posting_fuTxt" style="	margin-top: 20px;">

				<vue-ueditor-wrap v-model="Postcontent" :config="myConfig" name="content"></vue-ueditor-wrap>

				<el-button type="primary" style="margin-top: 30px;" @click="fabu">发布</el-button>
			</div>
		</div>
	</div>
</template>

<script>
	import VueUeditorWrap from 'vue-ueditor-wrap'
	export default {
		components: {
			VueUeditorWrap
		},
		data() {

			return {
				PostNum: '1',
				editType:'new', // edit 编辑 new 新增
				title: '',
				Modular: '',
				ModularList: [{
					value: 1,
					label: '政治'
				}, {
					value: 2,
					label: '数学一'
				}, {
					value: 3,
					label: '英语一'
				}],

				Postcontent: '',

				myConfig: {
					// toolbars: [
					// 	['fullscreen', 'source', '|', 'undo', 'redo', '|', 'bold', 'italic', 'underline', 'fontborder', 'strikethrough',
					// 		'|', 'superscript', 'subscript', '|', 'forecolor', 'backcolor', '|', 'removeformat', '|', 'insertorderedlist',
					// 		'insertunorderedlist',
					// 		'|', 'selectall', 'cleardoc', 'fontfamily', 'fontsize', 'justifyleft', 'justifyright', 'justifycenter',
					// 		'justifyjustify', '|',
					// 		'link', 'unlink'
					// 	]
					// ],
					// 编辑器不自动被内容撑高
					autoHeightEnabled: false,
					// 初始容器高度
					initialFrameHeight: 240,
					// 初始容器宽度
					initialFrameWidth: '100%',
					// 上传文件接口（这个地址是我为了方便各位体验文件上传功能搭建的临时接口，请勿在生产环境使用！！！）
					serverUrl: '',
					// UEditor 资源文件的存放路径，如果你使用的是 vue-cli 生成的项目，通常不需要设置该选项，vue-ueditor-wrap 会自动处理常见的情况，如果需要特殊配置，参考下方的常见问题2
					UEDITOR_HOME_URL: '/UEditor/'
				},
			}
		},
		methods:{
			// 发布和更改用一个接口 改变帖子状态
			fabu(){
					if(this.editType === 'edit'){
							this.$http.post('http://118.178.184.69:4396/invitation/changestatus',{changeInvitation:"test"}
						).then(result => {
							console.log(result.data)
						})
					}
					else{
						this.$http.post('http://118.178.184.69:4396/invitation/post',{changeInvitation:"test"}
						).then(result => {
							console.log(result.data)
						})
					}
				
			}
		}

	}
</script>

<style>
	.contain_box {
		margin: 20px;
		display: flex;
		flex-flow: row;
		justify-content: space-between;
	}

	.Posting_box {
		width: 90%;
		margin: auto;
	
		/* border: 1px solid #000000; */
	}

	.Posting_input {
		display: flex;
		flex-direction: row;
		margin-top: 30px;
	}
</style>
