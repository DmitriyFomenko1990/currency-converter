<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/widgets/header/ui/Header.vue'
import { NMessageProvider } from 'naive-ui'
</script>

<template>
  <n-message-provider>
    <Header />
    <RouterView />
  </n-message-provider>
</template>
