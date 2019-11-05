<template>
    <div class="add">
      <h1>添加用户</h1>
      <form v-on:submit="adduser">
        <div>
          <h4>用户信息</h4>
          <div>
            <label>姓名</label><input type="text" placeholder="name" v-model="us.name">
          </div>
          <div>
            <label>电话</label><input type="text" placeholder="phone" v-model="us.phone">
          </div>
          <div>
            <label>邮箱</label><input type="text" placeholder="email" v-model="us.email">
          </div>
          <div>
            <label>年龄</label><input type="number" placeholder="age" v-model="us.age">
          </div>
          <div>
            <label>公司</label><input type="text" placeholder="companyid" v-model="us.companyId">
          </div>
          <button type="submit">添加</button>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Add",
        data(){        return{
            us:{}
        }},
        methods:{
            adduser(e){
                if(!this.us.name||!this.us.phone||!this.us.email){
                    console.log("请添加对应的信息")
                }else{
                    let newuser={
                        name:this.us.name,
                        phone:this.us.phone,
                        email:this.us.email,
                        age:this.us.age,
                        companyId:this.us.companyId
                    }
                    this.$http.post("http://localhost:3000/users",newuser).then(response=>{
                        console.log(response);
                        this.$router.push({path:"/",query:{msg:"用户信息添加成功"}});
                    })
                    e.preventDefault();
                }
                e.preventDefault();
            }
        }
    }

</script>

<style scoped>
.add{text-align: center;}
</style>
