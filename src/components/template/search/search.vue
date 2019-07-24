<template>
  <div class="hello">
    <div class="row">
      <h3 class="demo-panel-title">Book 검색</h3>
      <div class="col">
        <div :class="['form-group', { 'has-error' : searchSuccess == 'F'}, { 'has-success' : searchSuccess == 'S'}]">
          <input type="text" v-model="searchText" placeholder="Search" class="form-control" style="width:50%"/>
          <input type="button" value="검색" class="form-control" />
        </div>
      </div>
      <div class="col">
        <h3 class="demo-panel-title" style="float:left;">검색결과</h3>
        <table width="100%">
          <tr>
            <td width="50%" class="pbm">
              <input type="checkbox" checked data-toggle="switch" id="custom-switch-01" />
            </td>
            <td class="pbm">
              <input type="checkbox" data-toggle="switch" id="custom-switch-02" />
            </td>
          </tr>
          <tr>
            <td class="pbm">
              <div class="bootstrap-switch-square">
                <input type="checkbox" checked data-toggle="switch" id="custom-switch-03" data-on-text="<span class='fui-check'></span>" data-off-text="<span class='fui-cross'></span>" />
              </div>
            </td>
            <td class="pbm">
              <div class="bootstrap-switch-square">
                <input type="checkbox" data-toggle="switch" id="custom-switch-04" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" checked disabled data-toggle="switch" id="custom-switch-5" />
            </td>
            <td>
              <input type="checkbox" checked disabled data-toggle="switch" id="custom-switch-6" />
            </td>
          </tr>
        </table>
      </div> <!-- /.col -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      searchSuccess: '', // S : 성공 / F : 실패
      searchText : ''
    }
  }
}
</script>

<!--flat ui 참조 -->
<style>

  .form-control::-moz-placeholder, .select2-search input[type="text"]::-moz-placeholder {
    color: #b2bcc5;
    opacity: 1;
  }

  .form-control:-ms-input-placeholder, .select2-search input[type="text"]:-ms-input-placeholder {
    color: #b2bcc5;
  }

  .form-control::-webkit-input-placeholder, .select2-search input[type="text"]::-webkit-input-placeholder {
    color: #b2bcc5;
  }

  .form-control, .select2-search input[type="text"] {
    border: 2px solid #bdc3c7;
    color: #34495e;
    font-family: "Lato", Helvetica, Arial, sans-serif;
    font-size: 15px;
    line-height: 1.467;
    padding: 8px 12px;
    border-radius: 6px;
    box-shadow: none;
    transition: border .25s linear, color .25s linear, background-color .25s linear;
  }

  .form-group.focus .form-control, .form-group.focus .select2-search input[type="text"], .select2-search .form-group.focus input[type="text"], .form-control:focus, .select2-search input[type="text"]:focus {
    border-color: #1abc9c;
    outline: 0;
    box-shadow: none;
  }

  .form-control[disabled], .select2-search input[disabled][type="text"], .form-control[readonly], .select2-search input[readonly][type="text"],
  fieldset[disabled] .form-control,
  fieldset[disabled] .select2-search input[type="text"], .select2-search
  fieldset[disabled] input[type="text"] {
    background-color: #f4f6f6;
    border-color: #d5dbdb;
    color: #d5dbdb;
    cursor: default;
    opacity: 0.7;
    filter: "alpha(opacity=70)";
  }

  .form-control.flat, .select2-search input.flat[type="text"] {
    border-color: transparent;
  }

  .form-control.flat:hover, .select2-search input.flat[type="text"]:hover {
    border-color: #bdc3c7;
  }

  .form-control.flat:focus, .select2-search input.flat[type="text"]:focus {
    border-color: #1abc9c;
  }
</style>
