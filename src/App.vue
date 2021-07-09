<template>
  <!-- 
    v-app
    +-- v-navigation-drawer
    +-- v-app-bar
    +-- v-main
    +   +-- v-container
    +       +-- router-view
    +-- v-footer
   -->
  <v-app>
    <!-- アプリケーションバー -->
    <v-app-bar
      color="yellow darken-3"
      dark
      absolute
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>テスト</v-toolbar-title>
    </v-app-bar>
    <!-- ナビゲーションドロワー -->
    <!--
    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-title class="title">
          メニュー
        </v-list-item-title>
        <v-btn icon>
          <v-icon @click="drawer = false">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <v-divider />
      <v-list nav>
        <v-list-item v-for="menu in menus" :key="menu.title" :to="menu.url">
          <v-list-item-icon>
            <v-icon>{{ menu.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    -->
    <!--
    <v-card
      class="mx-auto overflow-hidden"
      height="100%"
    >
    -->

    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    menus:[
      {title: "設定", icon: "mdi-gear", url:"/"},
      {title: "ホーム", icon: "mdi-home", url:"/Home"}
    ]
    //
  }),
});
</script>
