const { test } = require("@playwright/test");
const{POManager}=require("../PageFactory/POManager");
const{DataStorage}=require('../UtilCode/DataStorage');
const{Utilities}=require("../UtilCode/Utilities")
test("Forget password with valid email ", async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const poManager=new POManager(page);
    const HomePage=poManager.getHomePage()
    const LoginPage=poManager.getLoginPage();
    const ForgetPasswordPage=poManager.getForgetPassword();
    await HomePage.ClickMyAccount();
    await HomePage.ClickLogin();
    await LoginPage.ClickOnForgotPassword();
    await ForgetPasswordPage.WritingEmail("loueyzormati4@gmail.com")
    await ForgetPasswordPage.ClickButtonContinue();
    await ForgetPasswordPage.ExpectMessage()
    
})
test("Forget Password with Invalid email",async({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const email = Utilities.generateRandomEmail();
    DataStorage.setEmail(email);
    const poManager=new POManager(page);
    const HomePage=poManager.getHomePage()
    const LoginPage=poManager.getLoginPage();
    const ForgetPasswordPage=poManager.getForgetPassword();
    await HomePage.ClickMyAccount();
    await HomePage.ClickLogin();
    await LoginPage.ClickOnForgotPassword();
    await ForgetPasswordPage.WritingEmail(email)
    await ForgetPasswordPage.ClickButtonContinue();
    await ForgetPasswordPage.ExpectMessage()
    

})

