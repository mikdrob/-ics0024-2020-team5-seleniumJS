import pkg from 'chai';
import {By, until, Key} from "selenium-webdriver";
const { assert } = pkg;
import getDriver from '../driver_util/driver_util.js';
import StatusCodes from '../page_objects/home_page.js'

{
    describe, before, after, it
}

describe('Google Search', function () {
    let driver;
    let mainTitle = "Welcome to the-internet";
    this.timeout(50000);

    before(() => {
        driver = getDriver();
        StatusCodes().open(driver);
    });
    it ('correct url', async function () {
        console.log(await driver.getCurrentUrl().getText());
        assert.isTrue(StatusCodes().getCurrentUrl(driver).getText() == StatusCodes().getUISource());
    })
    it('can_go_to_home_page', async function () {
        await StatusCodes().open(driver);
        //console.log(await obj().isAt(driver).getText());
        assert.isTrue(await StatusCodes().isAt(driver) == mainTitle);    
    });

    it('Google Search Test',async function () {
        await driver.findElement(By.linkText("Status Codes")).click();
        await driver.findElement(By.linkText("200")).click();
        await driver.findElement(By.linkText("here")).click();
        console.log( await driver.getCurrentUrl());
        //assert.isTrue(driver.getCurrentUrl() == "https://the-internet.herokuapp.com/status_codes/200");
    });
    after(() => driver.quit());
});