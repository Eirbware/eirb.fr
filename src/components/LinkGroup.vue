<template>
  <h3>{{ linkGroup.name }}</h3>

  <TransitionGroup
    tag="div"
    :css="false"
    @before-enter="onBeforeEnterFn"
    @enter="onEnterFn"
    @leave="onLeaveFn"
    class="cards"
  >
    <LinkCard v-for="link in linkGroup.links" :key="link.url" :link="link"> </LinkCard>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { LinkGroup } from '@/assets/links/index';
import LinkCard from '@/components/LinkCard.vue';
import { onBeforeEnterFn, onEnterFn, onLeaveFn } from '@/assets/animations';

const props = defineProps<{
  linkGroup: LinkGroup;
}>();
</script>

<style scoped lang="scss">
.cards {
  display: grid;
  gap: 10px;
  padding: 0 10px;
  grid-template-columns: repeat(3, minmax(380px, 1fr));

  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(380px, 1fr));
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
}
</style>
