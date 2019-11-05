<template>
  <div class="ed">
    <Alt :meg="alt"></Alt>
    <h1>编辑用户信息</h1>
    <form v-on:submit="edituser">
      <div>
        <h4>用户信息</h4>
        <div>
          <label>姓名</label><input type="text" placeholder="name" v-model="user.name">
        </div>
        <div>
          <label>电话</label><input type="text" placeholder="phone" v-model="user.phone">
        </div>
        <div>
          <label>邮箱</label><input type="text" placeholder="email" v-model="user.email">
        </div>
        <div>
          <label>年龄</label><input type="number" placeholder="age" v-model="user.age">
        </div>
        <div>
          <label>公司</label><input type="text" placeholder="companyid" v-model="user.companyId">
        </div>
        <button type="submit">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
  import Alt from "./Alt";
    export default {
        name: "Edit",
        components:{Alt},
        data(){
           return{
            user:{},
               alt:''
        }},
        methods:{
            edituser(e){
                console.log(this.$route.params.id);
                if(!this.user.name||!this.user.phone||!this.user.email){
                    this.alt="请添加对应的信息";
                }else{
                    let euser={
                        name:this.user.name,
                        phone:this.user.phone,
                        email:this.user.email,
                        age:this.user.age,
                        companyId:this.user.companyId
                    }
                    this.$http.put("http://localhost:3000/users/"+this.$route.params.id,euser).then(response=>{
                        console.log(response);
                        this.$router.push({path:"/",query:{msg:"用户信息更新成功"}});
                    })
                    e.preventDefault();
                }
                e.preventDefault();
            },
            request(id){
                this.$http.get("http://localhost:3000/users/"+id).then(response => {
                    console.log(response);
                    this.user = response.body;
                }, error => {
                    console.log(error)
                });
            }
        },
        created() {
            // console.log(this.$route.params.id);
            this.request(this.$route.params.id);
        }
    }

</script>

<style scoped>
  .ed{text-align: center;}
</style>
