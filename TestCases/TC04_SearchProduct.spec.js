const { test, expect } = require('@playwright/test');
const{POManager}=require("../PageFactory/POManager")
const{DataStorage}=require("../UtilCode/DataStorage");
const{Utilities}=require("../UtilCode/Utilities");

test("search Product ",async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const POmanager = new POManager(page);
    const LoginPage=POmanager.getLoginPage();
    const HomePage=POmanager.getHomePage();
    await HomePage.ClickMyAccount();
    await HomePage.ClickLogin();
    await LoginPage.LoginStatic("lhda@Testawy.com","esha") ;
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
    await HomePage.ClickButtonHome();
    await HomePage.SearchAndClickButton("mac");
    await HomePage.verifySearchResult("mac")
})
test("Search Product Invalid",async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const ProductName = Utilities.generateRandomString();
    const POmanager = new POManager(page);
    const LoginPage=POmanager.getLoginPage();
    const HomePage=POmanager.getHomePage();
    await HomePage.ClickMyAccount();
    await HomePage.ClickLogin();
    await LoginPage.LoginStatic("lhda@Testawy.com","esha") ;
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
    await HomePage.ClickButtonHome();
    await HomePage.SearchAndClickButton(ProductName);
    await HomePage.verifySearchResult(ProductName)
})