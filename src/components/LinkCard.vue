<template>
  <div class="card-container">
    <a :href="link.url" :key="link.url" rel="nofollow">
      <div class="card">
        <img :src="'img/' + link.icon" loading="lazy" />

        <h4>{{ link.name }}</h4>
        <p>{{ link.description }}</p>
      </div>
    </a>
    <a v-if="link.additionalLink" :href="link.additionalLink.url" :key="link.additionalLink.url" rel="nofollow">
      <div class="card-pin">
        <img :src="'img/' + getIconURIForLinkType(link.additionalLink.type)" :alt="'additional link for ' + link.name" :title="link.additionalLink.description" loading="lazy" />
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
import type { Link } from '@/assets/links/index';
import { getIconURIForLinkType } from '@/assets/links/index';

const props = defineProps<{
  link: Link;
}>();
</script>

<style scoped lang="scss">
.card-container {
  position: relative;
  /* width: 100%; */

  transition:
    transform 0.2s ease-in-out;
  &:hover {
    transform: translate(4px, -4px);
  }
  a {
    text-decoration: none;
    display: block;
    border-radius: 10px;
    width: 100%;
  }

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
    box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.4);
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

.card-pin {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  padding: 5px;
  height: 27px;
  width: 27px;
  aspect-ratio: 1/1;
  
  border-radius: 50%;

  background: none;
  box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.4);
  transition:
    box-shadow 0.2s ease-in-out;
  &:hover {
    box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.8);
    background-color: var(--bkg-color);
  }

  img {
    width: 25px;
    height: 25px;
  }
}
</style>
