<template>
  <div id="home">
    <!--
      Event headers
    -->
    <section id="countdown" v-if="now < end">
      <h3>Semaine des Arts</h3>
      <CountDown :date="end" @onFinish="finish" />
    </section>

    <!--
        Input
      -->
    <input
      type="search"
      class="search"
      name="eirbsearch"
      ref="searchInput"
      placeholder="Rechercher..."
      autocomplete="false"
      autofocus
      v-model="search"
    />

    <!--
        No elements in filtered links
      -->
    <div class="container">
      <Transition name="fade-height">
        <div v-show="filteredLinkGroups.length == 0">
          <div class="no-content">
            <img src="../assets/search.svg" />
            <h4>Aucun résultat n'a pu être trouvé</h4>
          </div>
        </div>
      </Transition>

      <!--
        Groups
      -->
      <TransitionGroup
        tag="div"
        :css="false"
        @before-enter="onBeforeEnterFn"
        @enter="onEnterFn"
        @leave="onLeaveFn"
      >
        <section v-for="linkGroup in filteredLinkGroups" :id="linkGroup.id" :key="linkGroup.id">
          <LinkGroupComponent :linkGroup="linkGroup"></LinkGroupComponent>
        </section>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import CountDown from '@/components/CountDown.vue';
import LinkGroupComponent from '@/components/LinkGroup.vue';

import { onBeforeEnterFn, onEnterFn, onLeaveFn } from '@/assets/animations';
import linkGroups, { type LinkGroup } from '@/assets/links';

const searchInput = ref<HTMLInputElement | null>(null);
const search = ref('');

const now = new Date();
const end = new Date('2024-04-14T22:00:00Z');

function finish() {
  const section = document.getElementById('countdown');

  if (section !== null) {
    const newEnd = new Date(end);
    newEnd.setSeconds(newEnd.getSeconds() + 3);

    if (newEnd > new Date()) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }
}

const filteredLinkGroups = computed<LinkGroup[]>(() => {
  return linkGroups
    .map((linkGroup) => {
      return {
        ...linkGroup,
        links: linkGroup.links.filter((l) => {
          return (
            l.name.toLowerCase().includes(search.value.toLocaleLowerCase()) ||
            l.description.toLowerCase().includes(search.value.toLocaleLowerCase()) ||
            l.url.includes(search.value.toLocaleLowerCase())
          );
        }),
      };
    })
    .filter((linkGroup) => {
      return linkGroup.links.length > 0;
    });
});

// Focus the search input on ":" or "/" keypress
function onKeydownFn(event: KeyboardEvent) {
  if (
    searchInput.value &&
    !searchInput.value.matches(':focus') &&
    (event.key === ':' || event.key === '/')
  ) {
    searchInput.value.value = '';
    searchInput.value.focus();
    event.preventDefault();
  }
}

onMounted(() => {
  searchInput.value = document.getElementById('search') as HTMLInputElement;
  document.body.addEventListener('keydown', onKeydownFn);
});

onUnmounted(() => {
  document.body.removeEventListener('keydown', onKeydownFn);
});
</script>

<style scoped lang="scss">
#home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search {
  width: 170px;
  height: 40px;
  margin-top: calc(60px - 2.5vw);
  padding-left: 40px;

  border: 3px solid var(--secondary-color);
  border-radius: 8px;
  outline: none;

  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  background: url('/img/icons/search.svg') no-repeat 4px center / contain #ffffff;
}

.no-content {
  text-align: center;
  padding: 20px;
  color: var(--text-color);
}

.container {
  max-width: 1200px;
}
</style>
