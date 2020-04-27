<template>
	<div>
		<table>
		  <thead>
		   <tr v-for="(i,index) in rownum">
		    <th v-for="label in thlabel[index]">{{label.label}}</th>
		   </tr>
		  </thead>
		  <tbody>
		   <tr v-for="data in datat">
		    <td v-for="key in labelprop" @click="tdEdit($event)"><input type="text" v-model="data[key]"/></td>
		   </tr>
		  </tbody>
		 </table>
	</div>
</template>

<script>
	export default{
	  props:{
	   datat:{
	    type:Array,
	    required:true
	   }, 
	   thlabel:{//表头数组
	    type:Array,
	    required:true
	   },
	   isEdit:{
	    type:Boolean,
	    required:true
	   }
	  },
	  data(){
	   return{
	    datata:''
	   }
	  },
	  computed:{
	   rownum:function(){//表头行数
	    return this.thlabel.length;
	   },
	   labelprop:function(){//取出表头数据依次对应的字段key
	    let thlab = this.thlabel;
	    var ar = [];
	    for(let i=0;i<thlab.length;i++)
	     for(let j=0;j<thlab[i].length;j++){
	      for(var key in thlab[i][j]){
	       if(key == 'prop'){
	        ar.push(thlab[i][j][key])
	       }
	      }
	     }
	    return ar;
	   },
	  },
	  mounted:function(){
	   this.$nextTick(function(){
	    $('td').attr('isEdit',this.isEdit);
	    var a = this.thlabel;
	    for(let i=0;i<a.length;i++)
	     for(let j=0;j<a[i].length;j++){
	      for(var key in a[i][j]){
	       if(key == 'rowspan'){
	        $($('tr').eq(i).find('th').eq(j)).attr('rowspan',a[i][j][key]);
	       }else if(key == 'colspan'){
	        $($('tr').eq(i).find('th').eq(j)).attr('colspan',a[i][j][key]);
	       }
	      }
	     }
	    }
	   )
	  },
	  methods:{
	   tdEdit:function(event){
	    var h = event.currentTarget;
	    if($(h).attr('isEdit')){
	     $(h).find('input').attr("readOnly",false);
	     $(h).addClass('tdclick').siblings().removeClass('tdclick');
	     $(h).addClass('tdclick').parent('tr').siblings().find('td').removeClass('tdclick');
	    }else{
	     $(h).find('input').attr("readOnly",true);
	    }
	   }
	  } 
	 }
</script>

<style>
</style>
