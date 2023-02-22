<template>
  <div class="row">
    <div class="col banner">
      <div class="banner__text__wrapper">
        <p class="banner__text banner__text--title">Hello Developer!</p>
        <p class="banner__text banner__text--sub-title">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.banner
  background url('https://via.placeholder.com/1920x650') center center
  display flex
  align-items center
  justify-content center
  min-height 700px
  &__text
    &--title, &--sub-title
      text-align center
      color #fff
      margin-bottom 8px
    &--title
      font-size 70px
      font-weight bold
    &--sub-title
      font-size 36px
</style>
