import { proxy } from 'valtio';

interface State {
  isWalletConnected: boolean;
  walletAddress: string;
  autoApprove: boolean;
  proposalInfo: {
    isLoading: boolean;
    isSuccess: boolean;
    error: any;
    data: {
      message: string;
      proposerName: string;
      spouseName: string;
      proposerRing: string;
      spouseRing: string;
      signers: string[];
      engagementDate: string;
      marriageDate: string;
      proposerVows: string;
      spouseVows: string;
    } | null;
  };
}

const state = proxy<State>({
  isWalletConnected: false,
  walletAddress: '',
  autoApprove: false,
  proposalInfo: {
    isLoading: true,
    isSuccess: false,
    error: null,
    data: null,
  },
});

const setProposalInfoLoading = () => {
  state.proposalInfo.isLoading = true;
};

const setProposalInfoData = (data: State['proposalInfo']['data']) => {
  state.proposalInfo.isLoading = false;
  state.proposalInfo.isSuccess = true;
  state.proposalInfo.data = data;
};

const setProposalInfoFailure = () => {
  state.proposalInfo.isLoading = false;
  state.proposalInfo.isSuccess = false;
  state.proposalInfo.data = null;
};

const setProposalInfoError = (error: any) => {
  state.proposalInfo.isLoading = false;
  state.proposalInfo.isSuccess = false;
  state.proposalInfo.error = error;
};

export { state, setProposalInfoLoading, setProposalInfoData, setProposalInfoFailure, setProposalInfoError };
