<template>
	<div id="myPhoto">
	    <div class="viewPhoto" >
	        <img :src=imageSave src="../../assets/img/uploadImg.jpg" alt="" id="portrait" style="width: 200px;height: 200px" @click="monidianji"/>
	    </div>
	    <p>提示：请选择本地图片上传，支持各种图片格式</p>
	    <input type="file" id="saveImage" name="myphoto" style="display:none;">
	</div>   	
</template>

<script>
	export default{
		name:'previewImg',
		created(){
			console.log(this.Url);
			
			this.url = this.Url;
			console.log(this.url);
		},
		mounted() {
			this.yulan();//预览图片
		},
		props:{
			Url:{
				type:String
			}
		},
		data() {
			return{
			    imageSave:"",//图片路径
			    uploadDate:"",//上传时间		 
				url:""
			}		
		},
		methods:{
			//图片库模拟点击input file
			monidianji(){
			   document.getElementById('saveImage').click()
			},         
			yulan(){
			    document.getElementById('saveImage').onchange = function () {
			    var imgFile = this.files[0];
			    var fr = new FileReader();
			    fr.onload = function () {
					document.getElementById('portrait').src = fr.result;
			    };
			    fr.readAsDataURL(imgFile);
			    }
				
			}            
		}
		
	}
</script>

<style>
</style>
