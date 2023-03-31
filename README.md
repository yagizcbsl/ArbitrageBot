# ArbitrageBot
Arbitrage bot working on provided DEX addresses in sepolia testnet

In order to run the project cd into the directory and type “npm install” to install node_modules (in
case of any possible problems type “npm -f install” instead) then type “npm start” and the project
will be launched on the localhost:3000.
Firstly, to connect MetaMask wallet; make sure metamask extension is installed on your browser
and then click on the Connect Wallet button. If the wallet address is visible under the button then
it has been connected successfully. If you click on the Get Balance button under the wallet
address you should be able to see your balance. Then you can interact with the token contracts
by clicking on the getToken-A and getToken-B buttons. As the names suggest with these
buttons you will obtain A and B tokens. Then click on the Connect Contract buttons to create
Contract instances for the given 4 DEX contracts. After a few seconds, you should be able to
see contract addresses at the bottom of the page; if not please click on the connect wallet
button again (I am not a frontend expert I don’t know why clicking on that button fixes the issue
sorry :) ). Then you need to click APPROVE FOR TOKENA and TOKENB buttons for each
contract to be able to use the swap function in DEX contracts. Finally, if you click on the
arbitrage button at the end of the page, you will make swap operations automatically if arbitrage
has been found. Note that, each click will iterate through the graph only 1 time, so to close the
price gap, you might need to click several times.
