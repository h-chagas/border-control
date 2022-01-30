function pesquisar() {
    var paxReply = document.getElementById('replyField')
    var res = document.getElementById('reply')
    

    if (
        paxReply.value == 'English' || 
        paxReply.value == 'english' ||
        paxReply.value == 'UK' ||
        paxReply.value == 'uk' ||
        paxReply.value == 'United Kingdom'
        ) 
        {
        res.innerHTML = 'Welcome back!';
        res.add;

    } else  if (paxReply.value == '') {
     res.innerHTML = 'Sorry, you must say what is your nationality...';
    }
    
    else {
        res.innerHTML = 'OK, may I ask what is the purpose of your visit? .. ';
    }
}