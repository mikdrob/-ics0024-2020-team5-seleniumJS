import {By, until, Key} from "selenium-webdriver";

export default function () {
    var libr = new obj();
    return libr;
};


class obj{
    UISource = "https://the-internet.herokuapp.com";
    open(driver) {
        return driver.get(this.UISource);   
    }
    isAt(driver) {
        return driver.findElement(By.tagName("h1")).getText();
    }
    getCurrentUrl(driver){
        return driver.getCurrentUrl();
    }
    getUISource(){
        return UISource;
    }
}