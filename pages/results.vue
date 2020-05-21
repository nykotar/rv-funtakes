<template>
  <v-container>
    <v-content>
      <h1 class="display-1 mt-5">
        Results for target {{ targetId }}
      </h1>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Sequence</th>
              <th v-for="i in largestNumber()" :key="i">
                Bit {{ i }}
              </th>
              <th>Decimal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in confirmedSequence" :key="index">
              <td>{{ item.range }}</td>
              <td v-for="i in largestNumber()" :key="i">
                {{ item.bits[i - 1] }}
              </td>
              <td>{{ item.decimal }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-content>
  </v-container>
</template>

<script>
export default {
  computed: {
    targetId () {
      return this.$store.state.funtake.settings.targetId
    },
    sequence () {
      return this.$store.state.funtake.settings.sequence
    },
    confirmedSequence () {
      const cSequence = []
      const cBitSequence = this.$store.state.funtake.funtake.confirmedSequence
      for (let i = 0; i < this.sequence.length; i++) {
        cSequence.push({ range: this.sequence[i].range, bits: cBitSequence[i], decimal: parseInt(cBitSequence[i].join(''), 2) })
      }
      return cSequence
    }
  },
  methods: {
    largestNumber () {
      let largest = 0
      this.sequence.forEach(function (item) {
        if (item.bits > largest) {
          largest = item.bits
        }
      })
      return largest
    }
  }
}
</script>
