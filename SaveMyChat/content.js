document.body.style.border = "5px solid blue";
console.log('loaded...');


function save(){
    console.log('saving...')
    // Find all elements with the class "ConversationItem__ConversationItemWrapper-sc-18srrdc-0"
    var elements = document.getElementsByClassName("ConversationItem__ConversationItemWrapper-sc-18srrdc-0");

    let output = [];
    for (var i = 0; i < elements.length; i++) {
        e = elements[i];
        if (i% 2 == 0){
            output.push({
                agent: 'User',
                message_index: i,
                //textContent: e.textContent, 
                innerText: e.innerText});
        } else {
            output.push({
                agent: 'ChatGPT',
                message_index: i,
                //textContent: e.textContent,
                innerText: e.innerText});
        }  
    }
    console.log(output);

    var a = document.createElement('a');
    var file = new Blob([ JSON.stringify(output, null, 2) ], {type : "application/json"});

    a.href = URL.createObjectURL(file);
    const filename = `chatgpt_${(new Date().toJSON().slice(0,10))}.json`
    a.download = filename;
    a.click();
}

let btn = document.createElement("button");
btn.innerHTML = "Save Conversation";
document.getElementsByTagName("form")[0].appendChild(btn)

btn.addEventListener("click", save);