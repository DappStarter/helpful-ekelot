require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth noble hole hockey knife army gasp'; 
let testAccounts = [
"0x01f947399276a9b89a7dcaab6229389f732eac6e6d9d1eeac8650b2886458639",
"0x04b700132ce76781c0c027b096e84d79c7600a1c318e6a91c0b5d98736f44d51",
"0x192e1cdb17528159c1260778d05f8e8a7a0ef704530985d60b9071f4ee1bf9f5",
"0x0228cf8048be1f197850ed86a9f2972aa02be79ba634e4e61b1d41040a9be8b6",
"0xfd390a730e4b55126b585619ee13ae37fc312e425bb9c35a25d5e760dc7476b8",
"0x27c10818575927bf45c6b7a0717642b88213483b2d02e070b95dba13db1ef2bc",
"0xd5abcbd6a3ab8bc789875254447840659713ea0bec673f17418f55224daa9959",
"0x3bf2dddbaa3be28f7f6e6a6709995a7739c8639fc4115d151297239ce33dbc64",
"0xfe825e640a3f16426f5b053c5442ea4a430d7501fbb2e91868981f1be11d395c",
"0x9f81d0ef715af041ac902be3f73911f56db09ede12df630d61c1385e80e99fca"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
