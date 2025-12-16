import { FiRefreshCw, FiUserCheck, FiLayers, FiSmartphone, FiLock, FiSearch, FiZap, FiShield, FiEyeOff } from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
  {
    title: "Forget about seed-phrases",
    description: "Create and recover your wallet securely with just a username and password.",
    bullets: [
      {
        title: "Easy Username & Password Setup",
        description: "No 12-24 word phrases to write down or lose. Recover anytime with credentials you already remember.",
        icon: <FiUserCheck size={26} />,
      },
      {
        title: "Fully Deterministic Recovery",
        description: "Lost all your devices? Recover your wallet anytime, works offline with no third parties involved.",
        icon: <FiRefreshCw size={26} />,
      },
      {
        title: "Brute-Force Resistant",
        description:
          "Zeus uses the Argon2id algorithm with 8GB memory hardening to create your wallet, making it virtually impossible for someone to brute-force your credentials.",
        icon: <FiLock size={26} />,
      },
    ],
    imageSrc: "/images/wallet-recovery.png",
  },
  {
    title: "You are in control",
    description: "Zeus is self-custodial, meaning only you have full control over your funds.",
    bullets: [
      {
        title: "Unlimited Child Wallets",
        description: "Generate as many wallets as you want under one master wallet created from your credentials.",
        icon: <FiLayers size={26} />,
      },
      {
        title: "Zero telemetry",
        description:
          "Zeus doesn't collect any data, everything you do is stored locally on your device. No telemetry, no data leaks.",
        icon: <FiShield size={26} />,
      },
      {
        title: "Independent from third parties",
        description: "Zeus does not rely on any third party services, it relies purely on the Ethereum JSON RPC API. As long as there is access to a node provider Zeus will never lose any of its functionality.",
        icon: <FiSmartphone size={26} />,
      },
    ],
    imageSrc: "/images/derive-wallet.png",
  },
  {
    title: "Made with security in mind",
    description: "Zeus is built with security in mind, using the best practices to make a secure and easy-to-use wallet.",
    bullets: [
      {
        title: "Zero-Knowledge Privacy (Soon)",
        description: "Integrated RAILGUN protocol for shielding tokens, transfers, and DeFi.",
        icon: <FiEyeOff size={26} />,
      },
      {
        title: "Safe Transactions",
        description:
          "Every transaction is simulated to make sure you will get the expected result. For DeFi transactions that are vulnerable to MEV, Zeus by default will use an MEV-protect RPC.",
        icon: <FiSearch size={26} />,
      },
      {
        title: "Strong Encryption",
        description: "Zeus is using a combination of Argon2id as a KDF and XChaCha20-Poly1305 as an encryption algorithm to encrypt your wallet data (locally).",
        icon: <FiZap size={26} />,
      },
    ],
    imageSrc: "/images/tx-confimation.png",
  },
];
