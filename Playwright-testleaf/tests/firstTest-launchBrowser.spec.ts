import { chromium, test } from "@playwright/test";
test("To launch a browser", async () => {
    const browserInstance = await chromium.launch({ headless: false,channel:'msedge'});
    const browserInstance1 = await chromium.launch({ headless: false,channel:'chrome'});
    const browserContext = await browserInstance.newContext();
    const browserContext1 = await browserInstance1.newContext();
    const page = await browserContext.newPage();
    const page1 = await browserContext1.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    console.log(page.url());
    await page.waitForTimeout(5000)
    
});