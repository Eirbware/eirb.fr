<template>
  <Header />

  <main>
    <HomeView />

    <img
      src="/img/backgrounds/triangle-down.svg"
      class="separator"
      style="position: absolute; bottom: -1px"
    />
  </main>

  <Footer />
</template>

<script setup lang="ts">
import HomeView from '@/views/HomeView.vue';
import Header from '@/components/HeaderHome.vue';
import Footer from '@/components/FooterHome.vue';

import { initDarkTheme } from '@/assets/darkTheme';

initDarkTheme();
</script>

<style lang="scss">
@import 'assets/style.scss';

main {
  background:
    url('/img/backgrounds/background-left.svg') no-repeat left top,
    url('/img/backgrounds/background-right.svg') no-repeat right 705px var(--bkg-color);
  padding-bottom: 5vw;
  position: relative;
}

.fade-height-enter-active,
.fade-height-leave-active {
  transition: opacity 0.3s ease;
}

.fade-height-enter-from,
.fade-height-leave-to {
  opacity: 0;
  height: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#app {
  box-sizing: border-box;
}

nav {
  display: flex;
  margin: auto;
  width: max-content;
  background-color: var(--primary-color);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 2px solid var(--primary-color);

  a {
    display: block;
    font-weight: bold;
    color: #ffffff;
    padding: 8px 12px;
    text-decoration: none;

    &.router-link-active {
      background-color: #ffffff;
      color: var(--primary-color);
    }
  }
}

.triangle-wrapper {
  overflow: hidden;
  width: 100%;
  box-sizing: content-box;
  background-color: var(--bkg-color);
}

.triangle-right {
  width: 100%;
  height: 35px;
  background-color: var(--bkg-color);
  box-sizing: border-box;
  border-top: 0px solid transparent;
  /* Hauteur du triangle */
  border-bottom: 35px solid transparent;
  /* Hauteur du triangle */
  border-left: 100vw solid var(--primary-color);
  /* Largeur du triangle et couleur */
}

img.separator {
  display: block;
  width: 100%;
  user-select: none;
  pointer-events: none;
}
</style>
