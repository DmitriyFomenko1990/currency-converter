<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/widgets/header/ui/Header.vue'
import { NMessageProvider } from 'naive-ui'
import {onMounted} from "vue";
import {useCurrencyStore} from "@/entities/currency/model/currencyStore";

const currencyStore = useCurrencyStore()

onMounted(() => {
  currencyStore.fetchRates()
})
</script>

<template>
  <n-message-provider>
    <Header />
    <RouterView />
  </n-message-provider>
</template>
