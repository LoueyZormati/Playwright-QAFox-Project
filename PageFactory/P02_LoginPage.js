class P02_LoginPage{
    constructor(page){
        this.page=page;
        this.Email=page.locator("#input-email");
        this.Password=page.locator("#input-password");
        this.Login=page.locator("input[value='Login']");
        this.ForgotPassword=page.locator("div[class='form-group'] a");
    }
    async LoginStatic(StaticEmail,StaticPassword){
        await this.Email.fill(StaticEmail);
        await this.Password.fill(StaticPassword);
        await this.Login.click();
    }
    async LoginDynamic(DynamicEmail,DynamicPassword){
        await this.Email.fill(DynamicEmail);
        await this.Password.fill(DynamicPassword);
        await this.Login.click();

    }
    async ClickOnForgotPassword(){
        await this.ForgotPassword.click();
    }
}
module.exports={P02_LoginPage}