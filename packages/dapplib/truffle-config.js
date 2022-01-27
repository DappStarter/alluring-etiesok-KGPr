require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remain purse harvest clog swift stock'; 
let testAccounts = [
"0x23c08b34a4eab00e9b06061649e8a962b7d15be4dacf3c41008782cbfcef35ba",
"0x24689e4cfb31bf59dfd118ead7013d9c1846880924cd42b0b3a4f8eafcb6f370",
"0x99077056a5c7a4c02cdf1184cbb5bff28d4336695d87426948ef1a608a1eeeab",
"0xfda6ac53bdf9346b482f5f4a0c97e256735e7af1baf1a525031f4b09e46dce53",
"0x78cc30c579fbbe03e3d7aca5b17580736a0686c13491b9d8a196489ecf9694e1",
"0x15d2b23f087d1a538444b8ae45ae5660cade22a7d4ee947007672fd2c55eddd4",
"0x489b540ff873b3b3b20b272aac7d01f66fa275f1bcc8c4d7b970caf135e7d076",
"0x8f501aec26c7393874e1062996ef5545d9cb1a835089be255fbe90f2a879d478",
"0x9a9ec7f0f06fa4418076a03b90c72c75b25b5c809c49ffe707a515b28f97ec38",
"0xe472f26fc397ced13958ee531b567931e100f6a0664c49b82786137706e76b21"
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
            version: '^0.8.0'
        }
    }
};

