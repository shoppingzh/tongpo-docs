<template>
  <div class="example">
    <div class="example__badge" />
    <div class="example__inner">
      <slot />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .example {
    position: relative;
    margin: 20px 0;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1);
    transition: all .2s ease-in-out;
    overflow: hidden;
    &:hover {
      box-shadow: 0 0 20px 3px rgba(0, 0, 0, 0.1), 5px 5px 25px rgba(0, 0, 0, .15);
    }
    &__badge {
      $size = 36px;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 0;
      height: 0;
      border: $size solid transparent;
      border-top-color: #08979c;
      transform: translate(-50%, -50%) rotate(135deg);
      &:after {
        $height = 25.4px;
        content: "试一试";
        position: absolute;
        left: ($size * -1);
        right: 0;
        top: ($size * -1);
        width: $size * 2;
        height: $height;
        line-height: $height;
        text-align: center;
        color: #fff;
        font-size: 12px;
        transform: rotate(180deg) scale(0.85);
      }
    }
    &__inner {
      padding-left: 10px;
      padding-top: 10px;
    }
  }
</style>