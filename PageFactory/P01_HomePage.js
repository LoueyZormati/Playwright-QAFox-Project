const { expect } = require("@playwright/test");

class P01_HomePage{
    constructor(page){
        this.page=page ;
        this.InputSearch=page.locator(".form-control.input-lg");
        this.ButtonSearch=page.locator(".btn.btn-default.btn-lg");
        this.MyAccount=page.locator("//ul[@class='list-inline']//li[@class='dropdown']");
        this.Register=page.locator("//a[normalize-space()='Register']");
        this.Login=page.locator("//a[normalize-space()='Login']");
        this.ProductText=page.locator("div.caption h4");
        this.product=page.locator(".product-thumb.transition");
        this.ButtonHome=page.locator("div[id='logo'] h1 a");
        this.CuurencyButton=page.locator(".btn.btn-link.dropdown-toggle");
        this.Euro=page.locator("button[name='EUR']");
        this.Pound=page.locator("button[name='GBP']");
        this.Dollar=page.locator("button[name='USD']");
        this.ElementPrice=page.locator("(//div/P/span)[2]");
        this.SuccesMessage=page.locator(".alert.alert-success.alert-dismissible");
        this.ShoppingCart=page.locator("a[title='Shopping Cart']");
        this.WishList=page.locator("#wishlist-total")

    }
    async SearchAndClickButton(Product){
        await this.InputSearch.fill(Product);
        await this.ButtonSearch.click();
    }
    async ClickMyAccount(){
        await this.MyAccount.click();
    }
    async ClickLogin(){
        await this.Login.click();
    }
    async ClickRegister(){
       await this.Register.click();
    }
    async AddProduct(ProductName){
        const titles = await this.ProductText.allTextContents(); 
        console.log(titles);
        const count = await this.product.count(); 
        for (let i = 0; i < count; ++i) {
            if ((await this.ProductText.nth(i).textContent()) === ProductName) {
                
                await this.product.nth(i).locator("text=Add to Cart").click(); 
                break;
            }
        }
    }
    async ClickButtonHome(){
        await this.ButtonHome.click()
    }
    async verifySearchResult(ProductName) {
        const titles = await this.ProductText.allTextContents(); 
        console.log("Liste des produits trouvés :", titles);
    
        const count = await this.ProductText.count();
    
        for (let i = 0; i < count; ++i) {
            const text = (await this.ProductText.nth(i).textContent()).trim();
            console.log(`Comparaison : "${text}" avec "${ProductName}"`); 
    
            if (text.toLowerCase().includes(ProductName.toLowerCase())) {  
                console.log("✅ Succès : Produit trouvé !");
                return true;
            }
        }
    
        console.log("❌ Échec : Produit non trouvé.");
        return false;
    }
    async clickCurrency(){
        await this.CuurencyButton.click();
        
    
        const currencyList = [];
        await currencyList.push(await this.Euro.textContent(),await this.Dollar.textContent(),await this.Pound.textContent());
        await console.log(currencyList);
    }
    async getElementPrice(){
     
        const priceText = await this.ElementPrice.textContent();
        return priceText;

    }
    async VerfySuccesMessage(){
        await expect(this.SuccesMessage).toBeVisible();

    }
    async ClickShoppingCart(){
        await this.ShoppingCart.click();
    }
    async ClickWishList(){
        await this.WishList.click();
    }
    async AddProductToWishList(ProductName){
        const titles = await this.ProductText.allTextContents(); 
        console.log(titles);
        const count = await this.product.count(); 
        for (let i = 0; i < count; ++i) {
            if ((await this.ProductText.nth(i).textContent()) === ProductName) {
                
                await this.product.nth(i).locator("button[data-original-title='Add to Wish List']").click(); 
                break;
            }
        }
    }
}
module.exports={P01_HomePage}