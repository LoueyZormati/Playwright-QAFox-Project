const { test, expect } = require('@playwright/test');
const{POManager}=require("../PageFactory/POManager")
const{DataStorage}=require("../UtilCode/DataStorage");
const{Utilities}=require("../UtilCode/Utilities");

test("Login With  Dynamic Data ",async  ({page})=> {
    const email = Utilities.generateRandomEmail();
    const password = Utilities.generateRandomString();

    DataStorage.setEmail(email);
    DataStorage.setPassword(password);
    
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const POmanager = new POManager(page);
    const LoginPage=POmanager.getLoginPage();
    const HomePage=POmanager.getHomePage();
    await HomePage.ClickMyAccount();
    await HomePage.ClickLogin();
    await LoginPage.LoginStatic(DataStorage.getEmail(),DataStorage.getPassword()) ;
    if (await page.url() === "https://tutorialsninja.com/demo/index.php?route=account/account") {
        console.log(`Login successful with email: ${email} and password: ${password}`);
    } else {
        const errorMessage = await page.locator('.alert.alert-danger.alert-dismissible');
        if (await errorMessage.isVisible()) {
            console.log(`Login failed with email: ${email} and password: ${password} - Invalid credentials.`);
        } else {
            console.log("Unexpected behavior - no success or failure message found.");
        }
    }

})
test("Login With valid Credentiels",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const POmanager = new POManager(page);
    const LoginPage=POmanager.getLoginPage();
    const HomePage=POmanager.getHomePage();
    await HomePage.ClickMyAccount();
    await HomePage.ClickLogin();
    await LoginPage.LoginStatic("loueyzormati322@gmail.com","louey123ZO!98") ;
    await expect(page).toHaveURL('https://tutorialsninja.com/demo/index.php?route=account/account');
})