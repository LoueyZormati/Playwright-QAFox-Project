class P03_RegisterPage{
    constructor(page){
        this.page=page;
        this.FirstName=page.locator("#input-firstname");
        this.LastName=page.locator("#input-lastname");
        this.Email=page.locator("#input-email");
        this.Telephone=page.locator("#input-telephone");
        this.Password=page.locator("#input-password");
        this.ConfirmPassword=page.locator("#input-confirm");
        this.newsletterNo=page.locator("input[value='0']");
        this.Agree=page.locator("input[value='1'][name='agree']");
        this.BtnContinue=page.locator("input[value='Continue']");
    }
    async RegisterNewAccount(firstname,lastname,email,telephone,password,confirmpassword){
       await this.FirstName.fill(firstname);
        await this.LastName.fill(lastname);
        await this.Email.fill(email);
        await this.Telephone.fill(telephone);
        await this.Password.fill(password);
        await this.ConfirmPassword.fill(confirmpassword);
        await this.newsletterNo.click();
        await this.Agree.click();
        await this.BtnContinue.click();

    }
}
module.exports={P03_RegisterPage}