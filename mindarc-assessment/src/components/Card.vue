<template>
  <div class="card">
    <img :src="data?.image" class="card__img" :alt="data?.text" />
    <div class="card__body">
      <p class="card__text">
        {{ data?.text }}
      </p>
      <a href="#" class="card__action">Read More</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from "./types";

defineProps<{
  data: Card;
}>();
</script>

<style lang="stylus" scoped>
.card
  max-width 300px
  min-height 100%
  transition 0.3s
  margin 0 auto
  border 1px solid #ebebeb
  border-radius 10px
  padding 1rem
  display flex
  flex-direction column
  &:hover
    box-shadow 2px -2px 3px #eaeaea
  &__text
    text-align center
    margin-bottom 20px
  &__action
    border 3px solid #000
    text-transform uppercase
    border-radius 100px
    text-align center
    font-weight bold
    color #000
    text-decoration none
    letter-spacing 2px
    padding 8px 30px
    width max-content
    align-self center
    transition 0.3s
    &:hover
      background #000
      color #fff
  &__body
    flex 1 1 auto
    display flex
    flex-direction column
    justify-content space-between
  &__img
    width 100%
    border-radius 25px !important
    margin-bottom 20px
</style>
