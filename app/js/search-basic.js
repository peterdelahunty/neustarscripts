
    var webDriver = test.openBrowser();
    test.beginTransaction();

    // Get the CSV
    var csv = test.getCSV('search.csv');
    // Select a Random Row out of the CSV
    var row = csv.random();
    // Get the desired value(s) form the row
    var username = row.get('username');
    var password = row.get('password');

    test.beginStep("Navigate to google.com");
    webDriver.get("http://www.google.com");
    test.endStep();

    test.beginStep("Search for Cool!");
    // Find the text input element by its name
    var element = webDriver.findElement(By.name("q"));

    // Enter something to search for
    element.sendKeys("cool");

    // Now submit the form. WebDriver will find the form for us from the element
    element.submit();

    test.waitFor(function() {
        return webDriver.getTitle().toLowerCase().startsWith("cool")
    }, 2000);
    test.endStep();

    test.endTransaction();