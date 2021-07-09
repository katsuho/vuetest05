<template>
  <SettingItems />
</template>

<script lang="ts">
  import Vue from 'vue'
  import SettingItems from '../components/SettingItems.vue'

  export default Vue.extend({
    name: 'Setting',

    components: {
      SettingItems,
    },
  })
</script>
