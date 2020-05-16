export const state = () => ({
  settings: {
    targetId: '',
    sequence: []
  }
})

export const mutations = {
  setSequence (state, sequence) {
    state.settings.sequence = sequence
  },
  setTargetId (state, targetId) {
    state.settings.targetId = targetId
  }
}
