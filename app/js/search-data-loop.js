var webDriver = test.openBrowser();
test.beginTransaction();

test.beginStep("Navigate to google.com");
webDriver.get("http://www.google.com");
test.endStep();

var i,size, search, row, csv = test.getCSV('search.csv');

size = csv.size();

for(i = 0;i<size;i++){

    row = csv.get(i);
    search = row.get("search");
    test.log(search);

    test.beginStep("Search for " + search);
    var element = webDriver.findElement(By.name("q"));
    element.sendKeys(search);
    element.submit();

    test.waitFor(function() {
        return webDriver.getTitle().toLowerCase().startsWith(search)
    }, 2000);

    test.endStep();

}

test.endTransaction();

