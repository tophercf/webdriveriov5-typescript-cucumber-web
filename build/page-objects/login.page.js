"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Login {
    get searchTextBox() { return $('#search-box'); }
    get searchBtn() { return $('.sb-button'); }
    get searchResultList() { return $$('.PartialSearchResults-item'); }
    search(searchText) {
        this.searchTextBox.setValue(searchText);
        this.searchBtn.click();
    }
    open() {
        browser.url('https://www.ask.com/');
    }
    searchResults() {
        $('.PartialSearchResults-item').waitForDisplayed(5000);
        return this.searchResultList;
    }
}
exports.default = Login;
