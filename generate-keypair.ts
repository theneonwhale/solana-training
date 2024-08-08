import "dotenv/config";
// import { Keypair } from "@solana/web3.js";
// const keypair = Keypair.generate();
// console.log('generated keypair');

// import { getKeypairFromEnvironment } from "@solana-developers/helpers";
// const keypair = getKeypairFromEnvironment
// console.log('keypair:', keypair);

import { Keypair } from "@solana/web3.js";

const keyFromEnv: any = process.env.SECRET_KEY;
// console.log('keyFromEnv:', keyFromEnv);
const asArray = Uint8Array.from(JSON.parse(keyFromEnv));

const keypair = Keypair.fromSecretKey(asArray);

console.log('publicKey:', keypair.publicKey.toBase58());
// console.log('privateKey:', keypair.secretKey.toString());
