<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
        no-gutters
      >
        <v-col>
          <v-card
            raised
            color="pink"
            height="80vh"
            elevation="20"
          >
          </v-card>
        </v-col>
        <v-col
          :cols="1"
          class="text-center"
        >
          <v-btn
            icon
            x-large
            outlined
          >
            <v-icon x-large>mdi-code-tags</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card
            raised
            color="indigo"
            height="80vh"
            elevation="20"
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      sequence: [9],
      targetId: ''
    }
  }
}
</script>
