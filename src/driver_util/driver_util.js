import {Builder} from "selenium-webdriver";

export default function getDriver() {
    return new Builder().forBrowser('chrome').build();
};