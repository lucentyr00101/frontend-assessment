<template>
  <div class="accordion">
    <div
      class="accordion__item"
      :class="{ active: item.active }"
      v-for="(item, i) in accordionData"
      :key="i"
    >
      <div class="accordion__title" @click="toggleAccordion(i)">
        <span>{{ item.title }}</span>
        <i v-if="item.active" class="bi-chevron-up"></i>
        <i v-else class="bi-chevron-down"></i>
      </div>
      <div class="accordion__content">
        <p v-html="item.content"></p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import data from "@/utils/data.json";
import type { Accordion } from "./types";

let accordionData = ref<Accordion[]>([]);

const setValues = () => {
  accordionData.value = data.map((item, index) => {
    return {
      ...item,
      active: index === 0,
    };
  });
};

const toggleAccordion = (index: number) => {
  accordionData.value = accordionData.value.map((item, itemIndex) => {
    return {
      ...item,
      active: itemIndex === index ? !item.active : false,
    };
  });
};

onBeforeMount(() => setValues());
</script>

<style lang="stylus" scoped>
.accordion
  max-width 500px
  &__item
    margin-bottom 6px
    .accordion
      &__title
        color #fff
        border 2px solid #fff
        border-radius 10px
        padding 10px
        display flex
        justify-content space-between
        cursor pointer
        background #f57c51
        font-family 'Poppins', sans-serif
      &__content
        background #fcbc58
        border-radius 6px
        max-height 0px
        overflow hidden
        color #403e3e
        border 2px solid #fff
        transition all 0.5s linear
        opacity 0
        p
          padding 10px
          font-weight 200
          margin 0
    &.active .accordion__content
      max-height 600px
      overflow hidden
      opacity 1
</style>
