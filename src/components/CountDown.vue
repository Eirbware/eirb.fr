<template>
  <div class="countdown">
    <div v-if="days" class="countdown__block">
      <div class="countdown__digit">{{ twoDigits(days) }}</div>
      <div class="countdown__text">Jours</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ twoDigits(hours) }}</div>
      <div class="countdown__text">Heures</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ twoDigits(minutes) }}</div>
      <div class="countdown__text">Minutes</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ twoDigits(seconds) }}</div>
      <div class="countdown__text">Secondes</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

const props = defineProps<{
  date: Date;
}>();

const emit = defineEmits<{
  finish: [];
}>();

const now = ref(Math.trunc(new Date().getTime() / 1000));
const event = ref(props.date);
const finish = ref(false);

const calculatedDate = computed(() => {
  return Math.trunc(event.value.getTime() / 1000);
});

const secondCount = computed(() => {
  return calculatedDate.value - now.value;
});

const seconds = computed(() => {
  if (secondCount.value < 0) return 0;
  return secondCount.value % 60;
});

const minutes = computed(() => {
  if (secondCount.value < 0) return 0;
  return Math.trunc(secondCount.value / 60) % 60;
});

const hours = computed(() => {
  if (secondCount.value < 0) return 0;
  return Math.trunc(secondCount.value / 60 / 60) % 24;
});

const days = computed(() => {
  if (secondCount.value < 0) return 0;
  return Math.trunc(secondCount.value / 60 / 60 / 24);
});

onMounted(() => {
  window.setInterval(() => {
    now.value = Math.trunc(new Date().getTime() / 1000);
    if (!finish.value && calculatedDate.value - now.value <= 0) {
      finish.value = true;
      emit('finish');
    }
  }, 1000);
});

function twoDigits(value: number): string {
  if (value.toString().length <= 1) {
    return '0' + value.toString();
  }

  return value.toString();
}
</script>

<style lang="scss">
.countdown {
  margin: 10px 0 50px 0;
  color: var(--text-color);
  display: flex;
  justify-content: center;

  &__block {
    text-align: center;
    padding: 0px 10px;
    position: relative;

    &:first-child {
      padding-left: 0;

      .countdown__digit {
        &:before {
          display: none;
        }
      }
    }

    &:last-child {
      padding-right: 0;
    }
  }

  &__text {
    display: inline-block;
    text-transform: uppercase;
    margin-bottom: 5px;
    font-size: 85%;
  }

  &__digit {
    font-size: 250%;
    font-weight: bold;
    line-height: 1;
    margin-bottom: 5px;

    &:before {
      content: ':';
      position: absolute;
      left: -5px;
    }
  }
}
</style>
