/**
 * Test is the main control interface for Neustar Web Performance Management scripts.
 * This is a simple script to check a site for availability
 **/
var webDriver = test.openBrowser();

// ... or if you want a simple HTTP traffic test script (Basic Script)
var c = webDriver.getHttpClient();

// Blacklist requests made to sites like Google Analytics and DoubleClick.  See the
// HttpClient.blacklistCommonUrls() documentation for a list of URLs currently blocked by
// this function.
c.blacklistCommonUrls();

// Start a new transaction.  This is needed to start recording HTTP traffic and timings.
test.beginTransaction();

// Transactions are grouped into "steps".  You can do work outside of a step, but it won't
// be recorded in the reports and charts. To record timings, start a step.
test.beginStep("Description of Step 1");

// Navigate the browser to the given URL
webDriver.get("http://www.google.com");

// Here is an example on how to check for text present on the body of the page

var element = webDriver.findElement(By.name('q'));
element.sendKeys('Cool!');
element.submit();

/*
 var bodyText = webDriver.findElement(By.tagName("body")).getText();
 if (!bodyText.contains("not available for registration")) {
 // thrown exceptions will also cause the monitor to record an error
 throw "Expected content not found!";
 }
 */

// End the step. You can begin additional steps after this call if you'd like.
test.endStep();

// Finally, end the transaction.  Saving the transaction, it's steps and the total time the
// transaction was executing.
test.endTransaction();

