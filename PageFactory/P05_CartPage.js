class P05_CartPage{
    constructor(page){
        this.page=page ;
        this.ButtonRemove=page.locator("button[data-original-title='Remove']");
        this.ButtonUpdate=page.locator("button[data-original-title='Update']");
        this.ButtonCheckout=page.locator("a[class='btn btn-primary']");
        this.ProductText=page.locator(".text-left a");
        this.TR=page.locator("tbody tr");
        this.tr=page.locator("tr");
        this.Product=page.locator("tbody tr td.text-left a");
    }
    async ClickOnRemove(ProductName){
        const titles = await this.ProductText.allTextContents(); 
        console.log(titles);
        const count = await this.TR.count();
        console.log(`Nombre de produits : ${count}`); 
        for (let i = 0; i < count; ++i) {
            if ((await this.ProductText.nth(i).textContent()) === ProductName) {
                
                await this.TR.nth(i).locator("button[data-original-title='Remove']").click(); 
                break;
            }
        }
    }
    async ClickOnUpdate(){
        const titles = await this.ProductText.allTextContents(); 
        console.log(titles);
        const count = await page.locator("table tr").count();
        console.log(`Nombre de produits : ${count}`);
        for (let i = 0; i < count; ++i) {
            if ((await this.ProductText.nth(i).textContent()) === ProductName) {
                
                await this.TR.nth(i).locator("button[data-original-title='Update']").click(); 
                break;
            }
        }
       
    }
    async ClickOnCheckout(){
        this.ButtonCheckout.click();
    }
    async VerifyProductInCart(expectedProduct){
        const productNames = await this.Product.allTextContents();

      if (productNames.includes(expectedProduct)) {
     console.log(`✅ Le produit "${expectedProduct}" est bien ajouté !`);
     } else {
    console.log(`❌ Le produit "${expectedProduct}" n'est PAS dans le tableau !`);
     }
    }
    async VerifyProductInWishList(expectedProduct){
        const productNames = await this.Product.allTextContents();

      if (productNames.includes(expectedProduct)) {
     console.log(`✅ Le produit "${expectedProduct}" est bien ajouté !`);
     } else {
    console.log(`❌ Le produit "${expectedProduct}" n'est PAS dans le tableau !`);
     }
    }
}
module.exports={P05_CartPage};
