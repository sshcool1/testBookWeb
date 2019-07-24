<template>
  <div>
    <h2>LOGIN</h2>
    <div class="loginBox" style="display: inline-block;">
      <table class="table">
        <tr>
          <td>아이디</td>
          <td><input type="text" name="userId" v-model="userId" placeholder="아이디"></td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td><input type="password" name="password" v-model="password" placeholder="비밀번호"></td>
        </tr>
      </table>
      <div style="float:right;">
        <input type="button" value="Login" @click="fnLogin"/>
        <input type="button" value="회원가입" @click="fnRouteTo('member')"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    fnRouteTo (key) {
      this.$router.push(`/${key}`);
    },
    fnLogin () {
      if(this.password == ''|| this.userId == ''){
        alert('입력창을 확인하세요.');
        return false;
      }

      let req = {
        userId : this.userId,
        password : this.password
      }

      dao.init(this, this.$config.API.login, "POST", req,
      (res) => {
        this.fnRouteTo('search');
      },
      (error) => {
        alert("로그인에 실패 하였습니다.");
        console.log(error);
      })
    }
  }
}
</script>
