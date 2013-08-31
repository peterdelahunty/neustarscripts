
    var webDriver = test.openBrowser();
    test.beginTransaction();

    var csv = test.getCSV('search.csv');
    var row = csv.get(csv.random());
    var query = row.get("query");

    test.beginStep("Navigate to google.com");
        webDriver.get("http://www.google.com");
    test.endStep();

    test.beginStep("Search for " + query);

        var element = webDriver.findElement(By.name("q"));
        element.sendKeys(query);
        element.submit();

        test.waitFor(function() {
            return webDriver.getTitle().toLowerCase().startsWith(query)
        }, 2000);

    test.endStep();

    test.endTransaction();
