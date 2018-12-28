// This component will get the data, build the HTML from the data and append it to the DOM.
import dealerData from "./dealerData"
import dealer from "./dealer"


const dealerList = {
  dealerinItUP () {
    dealerData.getAllDealerData()
    .then(dealerImportantInfo => {
        // console.log(dealerImportantInfo)

        
        let dealerDocFragment = document.createDocumentFragment();
        $(dealerDocFragment).append(dealer.addProfit(dealerImportantInfo));
        $(".output").append(dealerDocFragment);
        
        $(dealerDocFragment).append(dealer.mostSellsMonth(dealerImportantInfo));
        $(".output").append(dealerDocFragment);
        
        $(dealerDocFragment).append(dealer.mostCarsSoldByMan(dealerImportantInfo));
        $(".output").append(dealerDocFragment);
        
        $(dealerDocFragment).append(dealer.mostProfitingSalesman(dealerImportantInfo));
        $(".output").append(dealerDocFragment);
        
        $(dealerDocFragment).append(dealer.mostPopularModel(dealerImportantInfo));
        $(".output").append(dealerDocFragment);
        
        $(dealerDocFragment).append(dealer.mostBankLoansBank(dealerImportantInfo));
        $(".output").append(dealerDocFragment);
        
        $(".output").prepend("<header><h1>2017 CARDEALER STATS</h1></header>")
        
    })
  }
}

export default dealerList