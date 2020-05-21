export const state = () => ({
  settings: {
    targetId: '',
    sequence: [],
    totalBits: 0
  },
  funtake: {
    confirmedSequence: [],
    totalConfirmedBits: 0,
    cSequenceIndex: 0,
    cSequenceBits: []
  }
})

export const mutations = {
  setSequence (state, sequence) {
    state.settings.sequence = sequence
    state.funtake.confirmedSequence = []
    state.funtake.totalConfirmedBits = 0
    state.funtake.cSequenceIndex = 0
    state.funtake.cSequenceBits = []
    let totalBits = 0
    for (const num of sequence) {
      totalBits += num.bits
      state.funtake.confirmedSequence.push([])
    }
    state.settings.totalBits = totalBits
  },
  setTargetId (state, targetId) {
    state.settings.targetId = targetId
  },
  confirmBit (state, { index, bit }) {
    state.funtake.confirmedSequence[index].push(bit)
    state.funtake.totalConfirmedBits += 1
  },
  pushBit (state, bit) {
    state.funtake.cSequenceBits.push(bit)
  },
  resetFuntakeBitSequence (state) {
    state.funtake.cSequenceBits = []
  },
  incrementSequenceIndex (state) {
    state.funtake.cSequenceIndex += 1
  }
}
