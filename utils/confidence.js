/*
* By woo-d-woo from r/remoteviewing community.
*/

// Amount above (or below if -ve; "psi missing" mode) chance (0.5)
const PSI_BASELINE = 0.1
const P_CHANCE = 0.5

// P(correct)
const P1 = P_CHANCE + PSI_BASELINE

// P(incorrect)
const P0 = 1 - P1

// P(rejecting a correct identification) (Type I error)
const ALPHA = 0.01

// P(accepting an incorrect identification) (Type II error)
const BETA = 0.01

// Y value of "accept 1" or "accept 0" where x value is N (number of trials), d is y-intercept (d1 or d0), S is slope
const cutoff = (d, S, N) => d + S * N

const d1 = (p0 = P0, p1 = P1, alpha = ALPHA, beta = BETA) =>
  Math.log((1 - beta) / alpha) / (Math.log(p1 / p0) * ((1 - p0) / (1 - p1)))
const d0 = (p0 = P0, p1 = P1, alpha = ALPHA, beta = BETA) =>
  Math.log((1 - alpha) / beta) / (Math.log(p1 / p0) * ((1 - p0) / (1 - p1)))

// const s = () => 0.5;
const s = (p0 = P0, p1 = P1) =>
  Math.log((1 - p0) / (1 - p1)) / (Math.log(p1 / p0) * ((1 - p0) / (1 - p1)))

// Call this one; the other one will shit itself if you give it an excessively long sequence which terminates before the last element
exports.evaluateSequence = (arrSeq) => {
  let result = -1
  let index = 0
  console.log(`Evaluating sequence: ${arrSeq.join('')}:`)
  while (result === -1 && index < arrSeq.length) {
    index++
    const chunk = arrSeq.slice(0, index)
    result = _evaluateFullSequence(arrSeq.slice(0, index))
    console.log(
      `   evaluated first ${index} funtakes: ${chunk.join('')} = ${result}`
    )
  }
  return result
}

/** Returns -1 if the sequence is inconclusive or the 1|0 to accept */
const _evaluateFullSequence = (arrSeq) => {
  const sum = arrSeq.reduce((acc = 0, val) => (acc += val ? 1 : 0))
  const Sigma1 = cutoff(d1(), s(), arrSeq.length)
  // const Sigma0 = cutoff(-1 * d0(), s(), arrSeq.length)

  // P(it's a 1 and the accepted result is 1)
  if (sum >= Sigma1) {
    console.log('Hit Sigma 1 for hypothesis that T=1 and the pick is correct')
    return 1
  }

  // P(it's a 0 and the accepted result is 0)
  if (arrSeq.length - sum >= Sigma1) {
    console.log('Hit Sigma 1 for hypothesis that T=0 and the pick is correct')
    return 0
  }

  return -1
}

console.table([
  ['Symbol', 'Value'],
  ['PSI_BASELINE', PSI_BASELINE],
  ['d1', d1()],
  ['s', s()]
])

const startAt = 18
console.table(
  Array(10)
    .fill(0)
    .reduce(
      (acc, zero, index) => {
        acc.push([
          index + startAt,
          cutoff(d1(), s(), index + startAt),
          cutoff(-1 * d0(), s(), index + startAt)
        ])
        return acc
      },
      [['N', 'upper cutoff (if all 1s)']]
    )
)
