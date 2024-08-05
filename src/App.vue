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

  <footer>
    <div class="container">
      <div>
        <p>
          Copyright <span style="cursor: pointer" @click="toggleDarkMode()">©</span> 2024
          Association Eirbware.
        </p>
        <p>Tous droits réservés.</p>
      </div>
      <div></div>
      <img src="/img/logo_em.svg" alt="Logo de l'ENSEIRB-MATMECA" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import HomeView from './views/HomeView.vue';

// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Get the user's theme preference from local storage, if it's available
const currentTheme = localStorage.getItem('theme');

// If the user's preference in localStorage is dark...
if (currentTheme == 'dark') {
  // ...let's toggle the .dark-theme class on the body
  document.body.classList.toggle('dark-theme');
  // Otherwise, if the user's preference in localStorage is light...
} else if (currentTheme == 'light') {
  // ...let's toggle the .light-theme class on the body
  document.body.classList.toggle('light-theme');
}
import Header from '@/components/HeaderHome.vue';

function toggleDarkMode() {
  // If the user's OS setting is dark and matches our .dark-theme class...
  let theme;

  if (prefersDarkScheme.matches) {
    // ...then toggle the light mode class
    document.body.classList.toggle('light-theme');
    // ...but use .dark-theme if the .light-theme class is already on the body,
    theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
  } else {
    // Otherwise, let's do the same thing, but for .dark-theme
    document.body.classList.toggle('dark-theme');
    theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  }

  // Finally, let's save the current preference to localStorage to keep using it
  localStorage.setItem('theme', theme);
}
</script>

<style lang="scss">
@import 'assets/style.scss';

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
</style>
