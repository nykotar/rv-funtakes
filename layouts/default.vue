<template>
  <v-app>
    <v-app-bar
      :fixed="false"
      app
      dense
    >
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-btn
        icon
        href="https://github.com/nykotar/rv-funtakes"
      >
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>
    <nuxt />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Funtakes'
    }
  }
}
</script>
