<template>
  <v-content>
    <v-container>
      <v-container fluid>
        <v-row justify="center" no-gutters>
          <v-col :cols="12" :md="6">
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
                      v-model="sequence[index].range"
                      type="number"
                      label="Number range"
                      required
                      @input="calcBits(index)"
                    />
                  </v-col>
                  <v-col>
                    <p>Bits: {{ sequence[index].bits }}</p>
                  </v-col>
                </v-row>
              </div>
              <p class="subtitle-2">
                Total: {{ sequence.length }} numbers | {{ totalBits }} bits
              </p>
            </v-form>
          </v-col>
          <v-col :cols="12" :md="6">
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
        <v-btn
          color="success"
          class="mr-4 mt-3"
          @click="startFuntake"
        >
          Start
        </v-btn>
      </v-container>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      sequence: [{ range: 9, bits: 4 }],
      targetId: ''
    }
  },
  computed: {
    shareLink () {
      let link = window.location.origin + '/?'
      link = link + `targetId=${this.targetId}&sequence=${this.sequence.map((elem) => { return elem.range }).join(',')}`
      return link
    },
    totalBits () {
      let total = 0
      for (const num of this.sequence) {
        total = total + num.bits
      }
      return total
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
    calcBits (index) {
      const num = this.sequence[index].range
      this.sequence[index].bits = Math.floor(Math.log(num) / Math.log(2)) + 1
    },
    startFuntake () {
      this.$store.commit('funtake/setSequence', this.sequence)
      this.$store.commit('funtake/setTargetId', this.targetId)
      this.$router.push({ path: '/funtake' })
    }
  }
}
</script>
