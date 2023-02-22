<template>
  <div class="container-sm">
    <div class="row gy-5 mt-1">
      <div
        class="col-lg-4 col-md-6 col-sm-12"
        v-for="card in cardData"
        :key="card.id"
      >
        <Card :data="card" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Card from "@/components/Card.vue";

const cardData = computed(() => [
  {
    id: 1,
    image: "https://via.placeholder.com/400x300",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin massa e lorem euismod, rutrum dictum enim commodo. Sed varius, eros vitae tristique tempus, lorem arcu viverra quam, ut maximus.",
  },
  {
    id: 2,
    image: "https://via.placeholder.com/400x300",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed massa.",
  },
  {
    id: 3,
    image: "https://via.placeholder.com/400x300",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum erat nunc, ut tempor lacus vehicula sit amet. Curabitur porta.",
  },
]);
</script>
