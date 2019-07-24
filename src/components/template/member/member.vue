<template>
  <div class="hello">
    <h2>회원가입</h2>
    <div class="tableWrap">
      <table class="table">
        <tr>
          <td>아이디</td>
          <td><input type="text" name="userId" v-model="userId" placeholder="아이디"></td>
        </tr>
        <tr>
          <td>이름</td>
          <td><input type="text" name="userName" v-model="name" placeholder="이름"></td>
        </tr>
        <tr>
          <td>비밀번호</td>
          <td><input type="password" name="password" v-model="password" placeholder="비밀번호"></td>
        </tr>
        <tr>
          <td>비밀번호 확인</td>
          <td><input type="password" name="passwordConfirm" v-model="passwordConfirm" placeholder="비밀번호 확인"></td>
        </tr>
      </table>
      <div class="btnWrap">
        <input class="btn" @click="fnSave" type="button" value="가입"/>
        <input class="btn" @click="fnRouteTo('login')" type="button" value="취소"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'member',
  data () {
    return {
      id : '',
      userId : '',
      name : '',
      password : '',
      passwordConfirm : ''
    }
  },
  methods: {
    fnRouteTo (key) {
      this.$router.push(`/${key}`)
    },
    fnSave () {
      // 비번 체크
      if(this.password != this.passwordConfirm || this.password == ''|| this.userId == ''|| this.name == ''){
        alert('입력창을 확인하세요.');
        return false;
      }

      let req = {
        userId : this.userId,
        name : this.name,
        password : this.password
      }

      dao.init(this, this.$config.API.userSave, "POST", req,
      (res) => {
        this.fnRouteTo('login');
      },
      (error) => {
        alert("가입에 실패 하였습니다.");
        console.log(error);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table {
  border: 2px;
}
.tableWrap {
  display: inline-block;
}
</style>
