<template>
  <v-content>
    <v-container
      class="fill-height"
      fluid
    >
      <v-row justify="center">
        <h1 class="text-center display-1 font-weight-light">
          {{ targetId }}
        </h1>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <v-col>
          <v-card
            raised
            shaped
            :color="colors[0]"
            height="60vh"
            width="40vh"
            elevation="20"
            class="color-trans"
            :class="animLeft"
            style="float:right;"
            @mouseenter.native="hoverCard(0)"
          />
        </v-col>
        <v-col
          :cols="1"
          class="text-center"
        >
          <v-btn
            icon
            x-large
            outlined
            @click="clickCenter()"
          >
            <v-icon x-large>
              {{ statusIcon }}
            </v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-card
            raised
            shaped
            :color="colors[1]"
            height="60vh"
            width="40vh"
            elevation="20"
            class="color-trans"
            :class="animRight"
            @mouseenter.native="hoverCard(1)"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <ul class="indicators">
          <li v-for="index in totalBits" :key="index">
            <status-indicator
              :status="`${index <= totalConfirmedBits ? 'positive' : ''}`"
              :pulse="index <= totalConfirmedBits"
            />
          </li>
        </ul>
      </v-row>
    </v-container>
  </v-content>
</template>

<style scoped>

  .indicators {
    padding:0px;
    margin:0px;
    list-style: none;
  }

  .indicators li {
    display: inline;
    padding-right: 3px;
  }

  .color-trans {
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .flip-out-ver-right {
    -webkit-animation: flip-out-ver-right 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
    animation: flip-out-ver-right 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  @-webkit-keyframes flip-out-ver-right {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateY(70deg);
              transform: rotateY(70deg);
      opacity: 0;
    }
  }
  @keyframes flip-out-ver-right {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateY(70deg);
              transform: rotateY(70deg);
      opacity: 0;
    }
  }

  .flip-out-ver-left {
    -webkit-animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
            animation: flip-out-ver-left 0.45s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  @-webkit-keyframes flip-out-ver-left {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateY(-70deg);
              transform: rotateY(-70deg);
      opacity: 0;
    }
  }
  @keyframes flip-out-ver-left {
    0% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: rotateY(-70deg);
              transform: rotateY(-70deg);
      opacity: 0;
    }
  }

  .swing-in-right-fwd {
    -webkit-animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
            animation: swing-in-right-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  }

  @-webkit-keyframes swing-in-right-fwd {
    0% {
      -webkit-transform: rotateY(-100deg);
              transform: rotateY(-100deg);
      -webkit-transform-origin: right;
              transform-origin: right;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      -webkit-transform-origin: right;
              transform-origin: right;
      opacity: 1;
    }
  }
  @keyframes swing-in-right-fwd {
    0% {
      -webkit-transform: rotateY(-100deg);
              transform: rotateY(-100deg);
      -webkit-transform-origin: right;
              transform-origin: right;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      -webkit-transform-origin: right;
              transform-origin: right;
      opacity: 1;
    }
  }

  .swing-in-left-fwd {
    -webkit-animation: swing-in-left-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
            animation: swing-in-left-fwd 0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both;
  }

  @-webkit-keyframes swing-in-left-fwd {
    0% {
      -webkit-transform: rotateY(100deg);
              transform: rotateY(100deg);
      -webkit-transform-origin: left;
              transform-origin: left;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      -webkit-transform-origin: left;
              transform-origin: left;
      opacity: 1;
    }
  }
  @keyframes swing-in-left-fwd {
    0% {
      -webkit-transform: rotateY(100deg);
              transform: rotateY(100deg);
      -webkit-transform-origin: left;
              transform-origin: left;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
              transform: rotateY(0);
      -webkit-transform-origin: left;
              transform-origin: left;
      opacity: 1;
    }
  }

  .slide-out-top {
    -webkit-animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
            animation: slide-out-top 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both;
  }

  @-webkit-keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
  }
  @keyframes slide-out-top {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(-1000px);
              transform: translateY(-1000px);
      opacity: 0;
    }
  }
</style>

<script>

const confidence = require('../utils/confidence')

export default {
  data () {
    return {
      targetId: '',
      sequence: [],
      totalBits: 0,
      confirmedSequence: [],
      cSequenceIndex: 0,
      cSequenceBits: [],
      totalConfirmedBits: 0,
      colors: [],
      animLeft: '',
      animRight: '',
      statusIcon: 'mdi-play',
      ready: false,
      paused: true
    }
  },
  mounted () {
    this.targetId = this.$store.state.funtake.settings.targetId
    this.sequence = this.$store.state.funtake.settings.sequence
    let totalBits = 0
    for (const num of this.sequence) {
      totalBits += num.bits
      this.confirmedSequence.push([])
    }
    this.totalBits = totalBits
  },
  methods: {
    hoverCard (n) {
      if (!this.paused && this.ready) {
        this.cSequenceBits.push(n)
        const confEval = confidence.evaluateSequence(this.cSequenceBits)
        if (confEval !== -1) {
          this.cSequenceBits = []
          this.confirmedSequence[this.cSequenceIndex].push(confEval)
          this.totalConfirmedBits += 1
          if (this.confirmedSequence[this.cSequenceIndex].length === this.sequence[this.cSequenceIndex].bits) {
            this.cSequenceIndex += 1
          }
        }
        if (n === 0) {
          this.animLeft = 'flip-out-ver-right'
          this.animRight = 'slide-out-top'
        } else if (n === 1) {
          this.animRight = 'flip-out-ver-left'
          this.animLeft = 'slide-out-top'
        }
        this.ready = false
      }
    },
    clickCenter () {
      if (!this.ready) {
        this.genColors()
        this.animLeft = 'swing-in-right-fwd'
        this.animRight = 'swing-in-left-fwd'
        this.ready = true
        if (this.paused) {
          this.paused = false
          this.statusIcon = 'mdi-code-tags'
        }
      } else {
        // eslint-disable-next-line no-lonely-if
        if (this.paused) {
          this.paused = false
          this.statusIcon = 'mdi-code-tags'
        } else {
          this.paused = true
          this.statusIcon = 'mdi-play'
        }
      }
    },
    genColors () {
      this.colors = [
        '#' + (Math.random() * 0xFFFFFF << 0).toString(16),
        '#' + (Math.random() * 0xFFFFFF << 0).toString(16)
      ]
    }
  }
}
</script>
