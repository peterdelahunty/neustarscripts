
    // Begin transaction
    var webDriver = test.openBrowser();
    test.beginTransaction();

    // Get the CSV
    var csv = test.getCSV("email-password.csv");
    // Global Counter Variable
    var counter = test.getUserNum();
    // Get the row per user
    var row = csv.get(counter);
    // Get the desired value(s) form the row
    var email = row.get("email");
    var password = row.get("password");


    // Navigate to signup form
    test.beginStep("Navigate to Login");
    webDriver.get("https://www.loadtest.com/login");
    test.endStep();

    // Fill in form data
    test.beginStep("Complete Login");

    // Find form field enter email/password and submit
    var element = webDriver.findElement(By.name("username"));
    element.sendKeys(email);
    element = webDriver.findElement(By.name("password"));
    element.sendKeys(password);

    element = webDriver.findElement(By.id("btn-signIn"));
    element.click();

    // check that signup was successful
    test.waitFor(function () {
        return webDriver.getTitle().toLowerCase().startsWith(email)
    }, 2000);

    test.endStep();

    test.endTransaction();
