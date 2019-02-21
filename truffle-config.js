var HDWalletProvider = require("truffle-hdwallet-provider");
module.exports = 
{
    networks: 
    {
	    development: 
		{
	   		host: "localhost",
	   		port: 8545,
	   		network_id: "*" // Match any network id
		},
    	rinkeby: {
    	    provider: function() {
		      var mnemonic = "chapter noise taxi manage attitude rapid list pull jar crucial brave myself";//put ETH wallet 12 mnemonic code	
		      return new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/v3/609e9c2f834d4163b0dbc154ad51954e");
		    },
		    network_id: '4',
		    from: '0xbf04247f228d2a361977a5487954dfffc1670429',/*ETH wallet 12 mnemonic code wallet address*/
		}  
    }
};