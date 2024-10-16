<template>
   <h3 v-if="linkGroup.id !== 'events'">{{ linkGroup.name }}</h3>

  <TransitionGroup
    v-if="linkGroup.id !== 'events'"
    tag="div"
    :css="false"
    @before-enter="onBeforeEnterFn"
    @enter="onEnterFn"
    @leave="onLeaveFn"
    class="cards"
  >
    <LinkCard v-for="link in linkGroup.links" :key="link.url" :link="link"> </LinkCard>
  </TransitionGroup>

  <TransitionGroup
    v-if="linkGroup.id === 'events'"
    tag="div"
    :css="false"
    @before-enter="onBeforeEnterFn"
    @enter="onEnterFn"
    @leave="onLeaveFn"
    class="event-cards"
    >
        <LinkCard v-for="link in linkGroup.links" :key="link.url" :link="link" />
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

.event-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
    max-width: 1200px;
}
</style>
