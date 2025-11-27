chrome.action.onClicked.addListener(async (tab) => {
    await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            document.querySelectorAll('.thumb-image-container__watched')?.forEach(el => el.parentElement.parentElement.parentElement.remove());
            document.querySelectorAll('.watchedVideo')?.forEach(el => el.parentElement.parentElement.parentElement.parentElement.parentElement.remove());
        }
    });
});
