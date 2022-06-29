import { ethers } from "ethers";
import Onboard from 'bnc-onboard'

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

export const connect = () => {
  return async (dispatch) => {
    try {
      const onboard = Onboard({
        dappId: 'd16dc3a0-eebd-4480-8d88-096a6e501421',
        networkId: 1,
        darkMode: true,
        subscriptions: {
          wallet: async (wallet) => {
            if (wallet.provider) {
              const provider = new ethers.providers.Web3Provider(wallet.provider, 'any')
              const signer = provider.getSigner();
              const account = await signer.getAddress()
              dispatch(
                connectSuccess({
                  account: account,
                  provider: provider,
                })
              );
            } else {
              dispatch(connectFailed({
                account: null,
                provider: null
              }))
            }
          }
        },
        walletSelect: {
          wallets: [{
            walletName: 'metamask'
          }]
        }
      })
      await onboard.walletSelect()
      await onboard.walletCheck()
    } catch(err) {
      console.log(err)
    }
  }
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
  };
};
