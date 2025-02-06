const { test,expect } = require("@playwright/test");
const{POManager}=require("../PageFactory/POManager");
const { CartPage } = require("../PageFactory/P05_CartPage");
test('shopping Cart', async ({ page }) => {
await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
const POmanager = new POManager(page);
const CartPage=POmanager.getCartPage();
const HomePage=POmanager.getHomePage();
await HomePage.AddProduct("MacBook");
await HomePage.VerfySuccesMessage();
await HomePage.AddProduct("iPhone");
await HomePage.VerfySuccesMessage();
await HomePage.ClickShoppingCart();
await CartPage.VerifyProductInCart("MacBook");
await CartPage.VerifyProductInCart("iPhone");

})