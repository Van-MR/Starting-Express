<template>
  <div class="detail">
        <el-button type="success" class="goback" icon="el-icon-arrow-left" @click="goback">返回上一页</el-button>
        <el-carousel :interval="2000" type="card" height="300px" indicator-position="outside">
                <el-carousel-item v-for="(item, index) in this.imgArr" :key="index">
                    <img :src="item" alt="" class="imgClass">
                </el-carousel-item>
        </el-carousel>
        <p class="heroName">{{name}}●{{flag}}</p>

        <div>{{explain}}</div>


  </div>
</template>

<script>
export default {
  name:"detail",
  data:function(){
      return {
          title:"欢迎来到得来联盟",
          imgArr:[],
          name:"",
          flag:"",
          explain:""
      }
  },
  methods:{
      getMessage(id){
          this.$http.get(`/api/hero/${id}`).then(res => {
            this.imgArr = res.data.imgArr;
            this.name = res.data.name;
            this.flag = res.data.favourite;
            this.explain = res.data.explain
          }).catch(error => {
            console.log(error)
          })
      },
      goback(){
          this.$router.go(-1)
      }
  },
  mounted:function(){
      this.getMessage(this.$route.params.name)
  }
}
</script>

<style scoped>
.detail{
    width: 80%;
    margin: 50px auto;
}
.imgClass{
    width: 100%;
}
.heroName{
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    font-style: italic;
}
.goback{
    margin-bottom: 30px;
}
</style>
