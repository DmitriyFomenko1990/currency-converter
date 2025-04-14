<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/widgets/header/ui/Header.vue'
import {
  NMessageProvider,
  NLayout,
  NLayoutHeader,
  NLayoutContent
} from 'naive-ui'
import {onMounted} from "vue";
import {useCurrencyStore} from "@/entities/currency/model/currencyStore";

const currencyStore = useCurrencyStore()

onMounted(() => {
  currencyStore.fetchRates()
})
</script>

<template>
  <n-message-provider>
    <n-layout position="absolute" class="layout">
      <n-layout-header class="layout__header">
        <Header />
      </n-layout-header>
      <n-layout-content class="layout__content">
        <RouterView />
      </n-layout-content>
    </n-layout>
  </n-message-provider>
</template>

<style lang="scss" scoped>
.layout {
  min-height: 100vh;

  &__header {
    padding: 1rem;
    border-bottom: 1px solid #eee;
  }

  &__content {
    padding: 2rem;
    max-width: 1300px;
    margin: 0 auto;
  }
}
</style>
