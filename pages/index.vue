<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <v-form>
          <h1 class="headline mb-2">
            Number sequences
          </h1>
          <v-btn
            color="primary"
            class="mr-3 mb-3"
            @click="addField"
          >
            Add
          </v-btn>
          <v-btn
            color="error"
            class="mr-3 mb-3"
            @click="removeField"
          >
            Remove
          </v-btn>
          <div class="d-flex flex-column">
            <v-row v-for="(range, index) in ranges" :key="index" align="center">
              <v-col>
                <v-text-field
                  v-model="ranges[index]"
                  type="number"
                  label="Number range"
                  required
                />
              </v-col>
              <v-col>
                <p>Bits: {{ calcBits(ranges[index]) }}</p>
              </v-col>
            </v-row>
          </div>
          <v-divider />
          <v-btn
            color="success"
            class="mr-4 mt-3"
            @click="validate"
          >
            Begin
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      groups: 1,
      ranges: [9]
    }
  },
  methods: {
    addField () {
      this.ranges.push(this.ranges[this.ranges.length - 1])
    },
    removeField () {
      if (this.ranges.length > 1) {
        this.ranges.pop()
      }
    },
    calcBits (num) {
      return Math.floor(Math.log(num) / Math.log(2)) + 1
    }
  }
}
</script>
