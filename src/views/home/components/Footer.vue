<template>
  <div class="Footer">
    <footer>
      <p>———— 已经到底了，只能帮你到这里啦 ————</p>

      <div class="herf">
        <a href="#">顺逛用户协议</a>
        <a href="#">隐私权政策</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {};
  },
  components: {}
};
</script>
<style scope lang='scss'>
.Footer {
  footer {
    p {
      text-align: center;
      padding: 0.3rem 0;
      font-size: 0.14rem;
      color: #666666;
    }
    .herf {
      text-align: center;
      padding-bottom: 30px;
      font-size: 14px;
      color: #666666;
      a {
        color: #666;
        display: inline-block;
        text-decoration: underline;
        margin-right: 4%;
      }
    }
  }
}
</style>
