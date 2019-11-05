<template>
  <div>
    <div style="width: 90%;height:20px;">
    <h1 style="float: left">用户管理系统</h1>
    <div class="right">
    <router-link to="/add">添加</router-link>
    </div>
  </div>
    <Alt v-bind:meg="msg" v-if="msg"></Alt>
    <hr>
    <input type="text" placeholder="search" v-model="search">
    <table>
      <thead>
      <tr>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item  in listsearch(list,search)">
        <td>{{item.name}}</td>
        <td>{{item.phone}}</td>
        <td>{{item.email}}</td>
        <td><router-link :to="'/home/'+item.id">详情 </router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import Alt from "./Alt";
    export default {
        name: "Home",
        components:{Alt},
        data(){
            return{
                msg:'',
                search:'',
                list:[]
            }
        },
        methods:{
            listsearch(list,search){
              return list.filter(function (list) {
                  return list.name.match(search);
              })
            },
            request(){
                this.$http.get("http://localhost:3000/users").then(response => {
                    //console.log(response);
                    this.list = response.body;
                }, error => {
                    console.log(error)
                });
            }
        },
        created() {
            if(this.$route.query.msg){
                this.msg=this.$route.query.msg;
            }
            this.request();
        }
    }
</script>

<style scoped>
  *{
    margin: 0;
    font-size: 14px;
    padding: 0;
  }
  .right{float: right;position: relative;right: 30px;}
  table{
    margin-top: 20px;
    width: 90%;
  }
  td{
    border-bottom: solid 1px black;width: 25%;
    border-right: solid 1px black;;
  }
  th{ border-bottom: solid 1px black;width: 25%;}
</style>
