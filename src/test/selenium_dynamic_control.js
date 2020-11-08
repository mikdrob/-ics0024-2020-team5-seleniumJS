import pkg from 'chai';
const {assert} = pkg;
import getDriver from '../driver_util/driver_util.js';

{
    describe, before, after, it
}

describe('Google Search', function () {
    let driver;
    let googlesearchpage;
    let searchresultspage;
    this.timeout(50000);

    before(async () => {
        driver = await getDriver();
    });

    it('Google Search Test', async function () {
        driver.get('https://the-internet.herokuapp.com').then(function () {
            assert.isTrue(driver.findElement(mainTitle).getText() == "Welcome to the-internet");
            after(() => driver.quit());
        });
    });
});