
    // Begin transaction
    var webDriver = test.openBrowser();
    test.beginTransaction();

    // Generate random email
    var email = "test_" + new Date().getTime() + "_" + test.getUserNum() + "@gmail.com";

    // Navigate to signup form
    test.beginStep("Navigate to Signup");
    webDriver.get("http://loadtest.com/signup");
    test.endStep();

    // Fill in form data
    test.beginStep("Complete Signup");

    // Find form field enter email and submit
    var element = webDriver.findElement(By.name("email"));
    element.sendKeys(email);
    element.submit();

    // check that signup was successful
    test.waitFor(function() {
        return webDriver.getTitle().toLowerCase().startsWith(email)
    }, 2000);

    test.endStep();

    test.endTransaction();
