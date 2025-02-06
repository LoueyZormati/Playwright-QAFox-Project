const { P01_HomePage } = require('./P01_HomePage');
const { P02_LoginPage } = require('./P02_LoginPage');
const { P03_RegisterPage } = require('./P03_RegisterPage');
const{P04_ForgetPasswordPage}=require('./P04_ForgetPasswordPage');
const{P05_CartPage}=require("./P05_CartPage");

class POManager {
    constructor(page) {
        this.page = page;
        this.LoginPage = new P02_LoginPage(this.page);
        this.HomePage = new P01_HomePage(this.page);
        this.RegisterPage=new P03_RegisterPage(this.page)
        this.ForgetPasswordPage=new P04_ForgetPasswordPage(this.page)
        this.CartPage=new P05_CartPage(this.page);
        
    }

    getLoginPage() {
        return this.LoginPage;
    }

    getHomePage() {
        return this.HomePage;
    }

    getRegisterPage() {
        return this.RegisterPage;
    }
    getForgetPassword(){
        return this.ForgetPasswordPage;

    }
    getCartPage(){
        return this.CartPage;
    }
}

module.exports = { POManager };