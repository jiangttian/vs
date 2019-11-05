<template>
    <div>
      <router-link to="/">返回</router-link>
      <h2>{{user.name}}
        <router-link :to="'/edit/'+user.id">编辑</router-link>
      <button @click="deleteuser(user.id)">删除</button>
      </h2>
      <ul>
        <li>{{user.phone}}</li>
        <li>{{user.email}}</li>
        <li>{{user.phone}}</li>
        <li>{{user.companyId}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Detail",
        data(){
            return{
                user:' '
            }
        },
        methods:{
            deleteuser(id){
                this.$http.delete("http://localhost:3000/users/"+id).then(response => {
                    console.log(response);
                    this.user = response.body;
                }, error => {
                    console.log(error)
                });
                this.$router.push({path:'/',query:{msg:'删除成功'}});
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

</style>
