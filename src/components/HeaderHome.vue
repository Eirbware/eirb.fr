<template>
  <header>
    <h1>eirb.fr</h1>
    <h2>Services, clubs & associations de l'ENSEIRB-MATMECA</h2>

    <div class="triangle-wrapper">
      <div class="triangle-right"></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  padding-top: 20px;
  background-color: var(--primary-color);
  overflow-x: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  text-align: center;

  h1 {
    font-size: 42px;
    background-color: #fff;
    color: var(--primary-color);
    width: fit-content;
    padding: 8px 16px;
  }

  h2 {
    color: #fff;
  }

  h1,
  h2 {
    margin: 0;
  }
}

@media screen and (max-width: 794px) {
  header h2 {
    width: 340px;
    padding-bottom: 20px;
  }
}

@media screen and (max-width: 370px) {
  header h2 {
    width: 250px;
  }
}
</style>
