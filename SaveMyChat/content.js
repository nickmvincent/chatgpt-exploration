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
            output.push({agent: 'User:', content: e.textContent});
        } else {
            output.push({agent: 'ChatGPT', content: e.textContent});
        }  
    }
    console.log(output);

    var a = document.createElement('a');
    var file = new Blob([ JSON.stringify(output, null, 2) ], {type : "application/json"});

    a.href = URL.createObjectURL(file);
    a.download = 'myfile.txt';
    a.click();
}

let btn = document.createElement("button");
btn.innerHTML = "Save Conversation";
document.getElementsByTagName("form")[0].appendChild(btn)

btn.addEventListener("click", save);