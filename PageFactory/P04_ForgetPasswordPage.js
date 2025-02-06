const { expect } = require("@playwright/test");

class P04_ForgetPasswordPage{
    constructor(page){
        this.page=page;
        this.InputEmail=page.locator("#input-email");
        this.ButtonContinue=page.locator("input[value='Continue']");
        this.ErrorMessage=page.locator(".alert.alert-danger.alert-dismissible");
        this.SuccesMessage=page.locator(".alert.alert-success.alert-dismissible");
    }
    async WritingEmail(email){
        await this.InputEmail.fill(email)
    }
    async ClickButtonContinue(){
        await this.ButtonContinue.click();

    }
    async ExpectMessage(){
       if (await this.SuccesMessage.isVisible()) {
        const successText = await this.SuccesMessage.innerText();
        expect(successText).toContain('An email with a confirmation link has been sent your email address.'); 
        await console.log("An email with a confirmation link has been sent your email address.")
      } else if (await this.ErrorMessage.isVisible()) {
        const errorText = await this.ErrorMessage.innerText();
        expect(errorText).toContain('Warning: The E-Mail Address was not found in our records, please try again!'); 
        await console.log("Warning: The E-Mail Address was not found in our records, please try again!'")
      } else {
        throw new Error('Ni un message de succès ni un message d\'erreur n\'a été trouvé.');
      }
    }
}
module.exports={P04_ForgetPasswordPage}