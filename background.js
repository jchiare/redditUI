chrome.webRequest.onBeforeRequest.addListener(
    function(details)
    {return {redirectUrl: details.url.replace('www','old')}; },
    {urls: ["*://www.reddit.com/*"]},
    ["blocking"]
);