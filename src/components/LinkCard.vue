<template>
  <a :href="link.url" :key="link.url" rel="nofollow">
    <div class="card">
      <img :src="'img/' + link.icon" loading="lazy" />

      <h4>{{ link.name }}</h4>
      <p>{{ link.description }}</p>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { Link } from '@/assets/links/index';

const props = defineProps<{
  link: Link;
}>();
</script>

<style scoped lang="scss">
a {
  text-decoration: none;
  border-radius: 10px;
}

.card {
  padding: 10px;
  border-radius: 10px;
  box-sizing: border-box;

  display: grid;
  grid-gap: 0 10px;
  grid-template-columns: 64px auto;
  grid-template-rows: auto auto;
  align-items: center;

  background-color: var(--card-bkg-color);
  color: var(--text-color);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.4);
    transform: translate(4px, -4px);
  }

  img {
    grid-column: 1;
    grid-row: 1/3;

    width: 64px;
    height: 64px;
  }

  h4 {
    grid-column: 2;
    grid-row: 1;

    margin: 0;
    font-size: 23px;
    color: #3498db;
    text-decoration: underline;
  }

  p {
    grid-column: 2;
    grid-row: 2;

    margin: 0;
  }
}
</style>
