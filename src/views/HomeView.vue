<template>
  <div>
    <section id="countdown" v-if="now < end">
      <h3>Semaine des Arts</h3>
      <CountDown :date="end" @onFinish="finish" />
    </section>

    <input
      type="search"
      class="search"
      name="eirbsearch"
      ref="searchInput"
      placeholder="Rechercher..."
      autocomplete="false"
      autofocus
      v-model="search"
      v-on:keyup.enter="tada()"
    />

    <div class="container">
      <div id="overall" class="home">
        <Transition name="fade-height">
          <div v-show="filteredLinkGroups.length == 0">
            <div class="no-content">
              <img src="../assets/search.svg" />
              <h4>Aucun résultat n'a pu être trouvé</h4>
            </div>
          </div>
        </Transition>

        <TransitionGroup
          tag="div"
          :css="false"
          @before-enter="onBeforeEnterFn"
          @enter="onEnterFn"
          @leave="onLeaveFn"
        >
          <section v-for="linkGroup in filteredLinkGroups" :id="linkGroup.id" :key="linkGroup.id">
            <h3>{{ linkGroup.name }}</h3>

            <TransitionGroup
              tag="div"
              :css="false"
              @before-enter="onBeforeEnterFn"
              @enter="onEnterFn"
              @leave="onLeaveFn"
              class="cards"
            >
              <a v-for="link in linkGroup.links" :href="link.url" :key="link.url" rel="nofollow">
                <img :src="'img/' + link.icon" />
                <h4>{{ link.name }}</h4>
                <p>{{ link.description }}</p>
              </a>
            </TransitionGroup>
          </section>
        </TransitionGroup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import CountDown from '@/components/CountDown.vue';
import gsap from 'gsap';
import party from 'party-js';

import linkGroups, { type LinkGroup } from '../assets/links';

const searchInput = ref<HTMLInputElement | null>(null);
const search = ref('');

const now = new Date();
const end = new Date('2024-04-14T22:00:00Z');

function finish() {
  const section = document.getElementById('countdown');
  if (section) {
    party.confetti(section, {
      count: party.variation.range(40, 80)
    });
    const newEnd = new Date(end);
    newEnd.setSeconds(newEnd.getSeconds() + 3);
    if (newEnd > new Date()) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }
}

function tada() {
  if (search.value === 'tada') {
    const section = document.getElementById('search');
    if (section) {
      party.confetti(section, {
        count: party.variation.range(40, 80)
      });
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
        })
      };
    })
    .filter((linkGroup) => {
      return linkGroup.links.length > 0;
    });
});

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

function onBeforeEnterFn(el: Element) {
  (el as HTMLElement).style.opacity = '0';
  (el as HTMLElement).style.height = '0';
}

function onEnterFn(el: Element, done: () => void) {
  gsap.to(el, {
    opacity: 1,
    height: 'auto',
    delay: parseFloat((el as HTMLElement).dataset.index || '0') * 0.15,
    onComplete: done
  });
}

function onLeaveFn(el: Element, done: () => void) {
  gsap.to(el, {
    opacity: 0,
    height: 0,
    delay: parseFloat((el as HTMLElement).dataset.index || '0') * 0.15,
    onComplete: done
  });
}
</script>

<style scoped lang="scss">
.search {
  width: 170px;
  height: 40px;
  border-radius: 8px;
  border: 3px solid var(--secondary-color);
  background: url('/img/icons/search.svg') no-repeat 4px center / contain #ffffff;
  padding: 0 0 0 40px;
  font-size: 18px;
  transition: border-color 0.2s ease-in-out;
  font-family: 'Raleway', sans-serif;
  display: block;
  margin: auto;
  margin-top: calc(60px - 2.5vw);
}

.search:focus {
  outline: none;
  border: 3px solid var(--secondary-color);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(380px, 1fr));

  @media screen and (max-width: 1180px) {
    grid-template-columns: repeat(2, minmax(380px, 1fr));
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }

  a {
    background-color: var(--card-bkg-color);
    display: grid;
    grid-gap: 0 10px;
    grid-template-columns: 64px auto;
    grid-template-rows: auto auto;
    text-decoration: none;
    color: var(--text-color);
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition:
      transform 0.2s ease-in-out,
      box-shadow 0.2s ease-in-out;
    box-sizing: border-box;

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
}

#overall {
  padding: 10px;
  grid-gap: 0 20px;
}
</style>
