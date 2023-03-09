/* If the extension should be able to skip at all */
ShouldAttemptSkip = true; 

/* Amount of time between each "check" for an available skip-button */
SkipCheckSeconds = 0.5; 

/* The several tags that identifies a skippable button */
SkipButtonTags = ["SkipButton", "UpNextButton"];

setInterval(() => {
    if (!ShouldAttemptSkip) return; 

    for (const button of document.body.querySelectorAll("[role=\"button\"]")) {
        if (SkipButtonTags.includes(button?.dataset["testid"]))
            button.click();
    }
}, SkipCheckSeconds * 1000);