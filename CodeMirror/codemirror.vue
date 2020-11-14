<template>
  <el-container>
    <codemirror
      ref="mycode"
      :value="curCode"
      :options="cmOptions"
      class="code">
    </codemirror>
  </el-container>
</template>

<script lang="ts">
  import codemirror from 'vue-codemirror';
  import 'codemirror/theme/ambiance.css';
  // import 'codemirror/mode/yaml/yaml.js';
  require('codemirror/mode/javascript/javascript');
  import {Component, Vue} from "vue-property-decorator";
  @Component({
    name: 'mcodemirror',
    codemirror
  })
  export default class extends Vue {
    curCode = '';
    cmOptions = {
      value: '',
      mode: 'text/javascript',
      theme: 'ambiance',
      readOnly: false,
    }
  }
  // export default {
  //   components: {
  //     codemirror,
  //   },
  //   props: [],
  //   data() {
  //     return {
  //       curCode: '1111',
  //       cmOptions: {
  //         value: '',
  //         mode: 'text/javascript',
  //         theme: 'ambiance',
  //         readOnly: true,
  //       }
  //     };
  //   }
  // };
  // import { Component, Vue } from 'vue-property-decorator';
  // @Component({
  //   name: 'CodeMirror',
  // })
  // export default class extends Vue {
  // }

</script>
<style lang="scss" scoped>
</style>
