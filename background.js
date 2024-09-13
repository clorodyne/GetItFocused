chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    if(request.action === "focusTab"){
        chrome.tabs.query({url: request.url}, (tabs) =>{
            if(tabs.length > 0){
                chrome.tabs.update(tabs[0].id, {active: true});
            }else{
                chrome.tabs.create({url:request.url});
            }
        })
    }
})