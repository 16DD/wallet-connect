//wagmi
import { chain, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
//connector
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { Chain, connectorsForWallets, wallet } from "@rainbow-me/rainbowkit";
//icon
import iconBnb from "assets/svg/icon-bnb.svg";

//chain avax
const avalancheChain: Chain = {
	id: 43_114,
	name: "Avalanche",
	network: "avalanche",
	nativeCurrency: {
		decimals: 18,
		name: "Avalanche",
		symbol: "AVAX",
	},
	rpcUrls: {
		default: "https://api.avax.network/ext/bc/C/rpc",
	},
	blockExplorers: {
		default: { name: "SnowTrace", url: "https://snowtrace.io" },
	},
	testnet: false,
};
//chain bnb
const bnbChain: Chain = {
	id: 56,
	name: "Binance Smart Chain",
	network: "BNB",
	nativeCurrency: {
		decimals: 18,
		name: "BNB",
		symbol: "BNB",
	},
	rpcUrls: {
		default: "https://bsc-dataseed.binance.org/",
	},
	blockExplorers: {
		default: { name: "BscScan", url: "https://bscscan.com/" },
	},
	testnet: false,
	iconUrl: iconBnb,
};
//init chain support
export const CHAINS = [chain.mainnet, chain.rinkeby, chain.goerli, chain.polygon, chain.polygonMumbai, avalancheChain, bnbChain];

//config chains
export const { chains, provider, webSocketProvider } = configureChains(CHAINS, [
	publicProvider(),
	jsonRpcProvider({
		rpc: (chain: any) => {
			if (chain.id !== avalancheChain.id) return null;
			return { http: chain.rpcUrls.default };
		},
	}),
	jsonRpcProvider({
		rpc: (chain: any) => {
			if (chain.id !== bnbChain.id) return null;
			return { http: chain.rpcUrls.default };
		},
	}),
]);

//connectors
const connectors = connectorsForWallets([
	{
		groupName: "Recommended",
		wallets: [wallet.metaMask({ chains }), wallet.coinbase({ chains, appName: "MyApp" }), wallet.walletConnect({ chains })],
	},
]);

export const wagmiClient = createClient({
	autoConnect: true,
	provider,
	webSocketProvider,
	connectors,
});
