const { test,expect } = require("@playwright/test");
const { POManager } = require("../PageFactory/POManager");
const{DataStorage}=require("../UtilCode/DataStorage");
const{Utilities}=require("../UtilCode/Utilities");

test("Registration with existant credentiels", async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const poManager = new POManager(page);
    const HomePage=poManager.getHomePage();
    const RegisterPage=poManager.getRegisterPage();
    await HomePage.ClickMyAccount();
    await HomePage.ClickRegister();
    await RegisterPage.RegisterNewAccount("Louey","Zormati","loueyzormati0000@gmail.com","27377775","louey123ZO!","louey123ZO!");
    const alertText = await page.innerText('.alert.alert-danger');
    expect(alertText).toContain('Warning: E-Mail Address is already registered!');

    
})
test ("Register New Account ",async ({page})=>{
    await page.goto("https://tutorialsninja.com/demo/index.php?route=common/home");
    const FirstName = Utilities.generateRandomString();
    const LastName = Utilities.generateRandomString();
    const email = Utilities.generateRandomEmail();
    const phoneNumber = Utilities.generateRandomPhoneNumber();
    const password = Utilities.generateRandomString();
    DataStorage.setEmail(email);
    DataStorage.setPassword(password);
    DataStorage.setFirstName(FirstName);
    DataStorage.setPassword(password);
    DataStorage.setLastName(LastName);
    DataStorage.setPhoneNumber(phoneNumber);
    const poManager = new POManager(page);
    const HomePage=poManager.getHomePage();
    const RegisterPage=poManager.getRegisterPage();
    await HomePage.ClickMyAccount();
    await HomePage.ClickRegister();
    await RegisterPage.RegisterNewAccount(FirstName,LastName,email,phoneNumber,password,password);
    const h1Text = await page.innerText('#common-success h1');
    if (h1Text === 'Your Account Has Been Created!') {
        console.log('Test réussi  avec first name : ',FirstName,' last name: ',LastName," phone number: ",phoneNumber," email: ",email," password : ",password);
      } else {
        console.log(`Test échoué : Texte attendu "Your Account Has Been Created!" mais trouvé "${h1Text}".`);
      } 



    

})