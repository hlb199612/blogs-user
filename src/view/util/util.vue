<template>
  <div class="box">
    2
  </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    created() {
      this.test()
    },
    methods: {
      test() {
        console.log('邮箱校验',this.$r.email('123465798@gmail.com'));
        console.log('手机校验',this.$r.mobile('13845678900'));
        console.log('是否url',this.$r.url('https://blog.csdn.net/success400'));
        console.log('是否为空',this.$r.isEmpty(0));
        console.log('是否普通日期',this.$r.date('2020-02-10 08:32:10'));
        console.log('是否十进制数值',this.$r.number('2020'));
        console.log('是否整数',this.$r.digits('2020'));
        console.log('是否身份证号',this.$r.idCard('110101199003070134'));
        console.log('是否车牌号',this.$r.carNo('京A88888'));
        console.log('是否金额',this.$r.amount('3,233.08'));
        console.log('是否汉字',this.$r.chinese('更上一层楼'));
        console.log('是否字母',this.$r.letter('success'));
        console.log('是否字母或者数字',this.$r.enOrNum('success400'));
        console.log('是否包含某个值',this.$r.contains('Hello Word', 'WORD'));
        console.log('数值是否在某个范围内',this.$r.range(35, [30, 34]));
        console.log('字符串长度是否在某个范围内',this.$r.rangeLength('abc', [3, 10]));
      }
    },
}
</script>
<style scoped>
  .box{
    width: 100%;
    height:auto;
    min-height: 1000px;
    right: 0px;
    position: absolute;
    background-color: rgb(250,250,250);
    overflow: hidden;
    background: -webkit-radial-gradient(center, ellipse cover, #353138 0%,#1a181c 100%);
  }
</style>
