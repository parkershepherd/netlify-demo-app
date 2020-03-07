<template>
  <div id="app">
    <app-header />
    <app-nav />
    <router-view />
    <b-button>Test</b-button>
  </div>
</template>

<script>
import AppNav from '@/components/layout/AppNav'
import AppHeader from '@/components/layout/AppHeader'

export default {
  name: 'App',
  components: {
    AppNav,
    AppHeader,
  }
}
</script>

<style>
</style>
