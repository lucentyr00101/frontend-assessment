import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import ExerciseTwo from "../views/ExerciseTwo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/exercise-two",
      name: "exercise-two",
      component: ExerciseTwo,
    },
  ],
});

export default router;
