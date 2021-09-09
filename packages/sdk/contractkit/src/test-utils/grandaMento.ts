import BigNumber from 'bignumber.js'
import { GrandaMentoWrapper } from '../wrappers/GrandaMento'

export const setGrandaMentoLimits = async (
  grandaMento: GrandaMentoWrapper,
  newLimitMin: BigNumber = new BigNumber('1000'),
  newLimitMax: BigNumber = new BigNumber('1000000000000'),
  stableToken: string = 'StableToken'
) => {
  await (
    await grandaMento.setStableTokenExchangeLimits(
      stableToken,
      newLimitMin.toString(),
      newLimitMax.toString()
    )
  ).sendAndWaitForReceipt()
}