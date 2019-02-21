Process to Deploy Contract:

All the logic is craved in ./migrations/2_deploy_contracts.js

1. Deploy SupplyChainStorage
2. Deploy SupplyChainUser contract passing SupplyChainStorage Contract address
3. Deploy CoffeeSupplyChain contract passing SupplyChainStorage Contract address
4. Authorized caller - means copy user contract address and past in authorized() method
5. Authorized caller - means copy coffee Supply chain contract address and past in authorized() method
6. Now our contract is ready and we can use that.