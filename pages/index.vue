<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="6">
        <h1 class="headline mb-2">
          Numbers sequence
        </h1>
        <v-form>
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
            <v-row v-for="(number, index) in sequence" :key="index" align="center">
              <v-col>
                <v-text-field
                  v-model="sequence[index]"
                  type="number"
                  label="Number range"
                  required
                />
              </v-col>
              <v-col>
                <p>Bits: {{ calcBits(sequence[index]) }}</p>
              </v-col>
            </v-row>
          </div>
          <v-btn
            color="success"
            class="mr-4 mt-3"
            @click="validate"
          >
            Begin
          </v-btn>
        </v-form>
      </v-col>
      <v-col cols="6">
        <v-form>
          <h1 class="headline mb-2">
            Targetting
          </h1>
          <v-text-field
            v-model="targetId"
            label="Target ID"
            required
          />
          <h1 class="headline mb-2">
            Share settings
          </h1>
          <v-text-field
            v-model="shareLink"
            readonly
            solo
          />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      sequence: [9],
      targetId: ''
    }
  },
  computed: {
    shareLink () {
      let link = window.location.origin + '/?'
      link = link + `targetId=${this.targetId}&sequence=${this.sequence.join(',')}`
      return link
    }
  },
  mounted () {
    const params = this.$route.query
    if (params.targetId) {
      this.targetId = params.targetId
    }
    if (params.sequence) {
      const sequence = params.sequence.split(',')
      this.sequence = []
      for (const num of sequence) {
        this.sequence.push(parseInt(num))
      }
    }
  },
  methods: {
    addField () {
      this.sequence.push(this.sequence[this.sequence.length - 1])
    },
    removeField () {
      if (this.sequence.length > 1) {
        this.sequence.pop()
      }
    },
    calcBits (num) {
      return Math.floor(Math.log(num) / Math.log(2)) + 1
    }
  }
}
</script>
