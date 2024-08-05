<template>
  <footer>
    <div class="container">
      <div>
        <p>
          Copyright <span style="cursor: pointer" @click="toggleDarkTheme()">©</span> 2024
          Association Eirbware.
        </p>
        <p>Tous droits réservés.</p>
      </div>

      <img src="/img/logo_em.svg" alt="Logo de l'ENSEIRB-MATMECA" />
    </div>
  </footer>
</template>

<script setup lang="ts">
import { toggleDarkTheme } from '@/assets/darkTheme.ts';
</script>

<style scoped lang="scss">
footer {
  background-color: #393e41;

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1200px;
    padding: 10px 20px 20px 20px;
    margin: 0 auto;

    color: #d5dadd;
  }

  p {
    text-align: center;
    margin: 0;
  }

  img {
    height: 64px;
    margin-top: -32px;
    z-index: 1;
  }
}

@media screen and (max-width: 550px) {
  footer .container {
    flex-direction: column;
    align-items: center;
  }

  footer img {
    margin-top: 20px;
  }
}

@media screen and (max-width: 794px) {
  footer img {
    height: 48px;
    margin-top: -12px;
  }
}
</style>
