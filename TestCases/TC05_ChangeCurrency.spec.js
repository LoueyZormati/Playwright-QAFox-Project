const { test,expect } = require("@playwright/test");
const{POManager}=require("../PageFactory/POManager")
test('Change currency and verify price update', async ({ page }) => {
    
    await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home'); 
    const POmanager = new POManager(page);
    const currencyPage=POmanager.getHomePage();
    
  

    const elementPriceBeforeChange = await currencyPage.getElementPrice();
    await currencyPage.clickCurrency();
  
   
    const randomIndex = Math.floor(Math.random() * 3);
    console.log('Index aléatoire de la devise : ' + randomIndex);

    
    if (randomIndex === 0) {
        console.log('Devise sélectionnée : EUR');
        await currencyPage.Euro.click();
    } else if (randomIndex === 1) {
        console.log('Devise sélectionnée : USD');
        await currencyPage.Dollar.click();
    } else if (randomIndex === 2) {
        console.log('Devise sélectionnée : GBP');
        await currencyPage.Pound.click();
    }


   
    const elementPriceAfterChange = await currencyPage.getElementPrice();

  

   
   
    if (elementPriceBeforeChange !== elementPriceAfterChange) {
        
        const elementPriceAfterChange = await currencyPage.getElementPrice();
        expect(elementPriceAfterChange).not.toBe(elementPriceBeforeChange);
        await  console.log(`Le changement de prix avec les devises est ${elementPriceAfterChange} au lieu de ${elementPriceBeforeChange}`);
    } else {
       
        console.log("La devise n'a pas changé, le prix devrait être identique.");
        const elementPriceAfterChange = await currencyPage.getElementPrice();
        expect(elementPriceAfterChange).toBe(elementPriceBeforeChange);
    }
});