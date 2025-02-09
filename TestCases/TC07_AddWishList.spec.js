const { test,expect } = require("@playwright/test");
const{POManager}=require("../PageFactory/POManager");
const { CartPage } = require("../PageFactory/P05_CartPage");
test('shopping Cart', async ({ page }) => {
await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
const POmanager = new POManager(page);
const CartPage=POmanager.getCartPage();
const HomePage=POmanager.getHomePage();
const LoginPage=POmanager.getLoginPage();
await HomePage.ClickMyAccount();
await HomePage.ClickLogin();
await LoginPage.LoginStatic("loueyzormati322@gmail.com","louey123ZO!98")  ;
await HomePage.ClickButtonHome();
await HomePage.AddProductToWishList("MacBook");
await HomePage.VerfySuccesMessage();
await HomePage.AddProductToWishList("iPhone");
await HomePage.VerfySuccesMessage();
await HomePage.ClickWishList();
await CartPage.VerifyProductInWishList("MacBook");
await CartPage.VerifyProductInWishList("iPhone")

})