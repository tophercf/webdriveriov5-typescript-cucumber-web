export default class Login {
    get searchTextBox() { return $('#search-box'); }
    get searchBtn() { return $('.sb-button'); }
    get searchResultList() { return $$('.PartialSearchResults-item'); }
    search(searchText: string) {
        this.searchTextBox.setValue(searchText);
        this.searchBtn.click();
    }
    get() {
        browser.url('https://www.ask.com/');
    }

    searchResults() {
        $('.PartialSearchResults-item').waitForDisplayed(5000);
        return this.searchResultList;
    }

}