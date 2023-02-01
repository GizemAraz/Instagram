function render() {
    document.getElementById('posts').innerHTML = '';
    for (let i = 0; i < posts.length; i++) {
        const post   = posts[i];

        

        document.getElementById('posts').innerHTML += `
        <div class="posts">
            <div class="header-post">
                <img class="login-picture" src="${post['login-picture']}"> 
                <div class="author">
                    <b>${post['author']}</b><br>${post['location']}
                </div> 
                <img class="logo-more" src="${post['logo-more']}"> 
            </div>

                <img class="image"src="${post['image']}">

                <div class="footer-posts-all">
            
                    <div class="footer-posts">
  
                        <div class="logos-footer-left">
                            <img id="heart(${i})" onclick="like(${i})"class="logos-left"src="${post['logo-heart']}">
                            <img id="red-heart(${i})" onclick="dislike(${i})"class="logos-left d-none"src="${post['logo-red-heart']}">
                            <img class="logos-left"src="${post['logo-comment']}">
                            <img class="logos-left"src="${post['logo-send']}"> 
                        </div>

                        <div class="logos-footer-right">
                            <img id="bookmark" onclick="save(i)"class="logos-left"src="${post['logo-bookmark']}">
                            <img id="filled-bookmark" onclick="unsave(i)"class="logos-left d-none"src="${post['logo-bookmark-filled']}">
                        </div>

                        
                        
                    </div>
                    <div  class="likes">
                        
                            <b>Gefällt <span id="likes${i}">${post['likes']}</span></b>
                        
                    </div> 

                    <div class="likes"><b>${post['author']}</b> ${post['description']}</div> 
                    <span class="likes"><b>${post['follower']}</b> ${post['follower-comments']}</span>
                    <div class="likes">${getCommentsHtml(i)}</div>
                    <div id="comments(${i})" class="comments">
                    <div class="comments-box">
                    <input placeholder="kommentieren.." class="input" id="input(${i})"> <button onclick="addComment(${i})"> Posten</button> 
                    </div>
                    </div>
                    <div class="time">${post['time']}</div> 


                </div>
        </div>
            
        </div>

        
        `;

        

    }

    document.getElementById('suggestions').innerHTML = "";
    for (let s = 0; s < suggestions.length; s++) {
        const suggestion = suggestions[s];
            document.getElementById('suggestions').innerHTML +=   `
            <div class="suggestions-box">
                <div> 
                    <img class="s-picture" src="${suggestion['s-picture']}"> 
                    <div class="">    
                        <b>${suggestion['s-name']}</b><br>${suggestion['s-description']}
                        
                    </div> 
                    <button onclick="follow(${s})"class="button-sm" id="follow(${s})">${suggestion['follow-button']}</button>  
                    <button onclick="unfollow(${s})"class="button-sm d-none" id="unfollow(${s})">${suggestion['unfollow-button']}</button>
                </div>
               
            </div>`
    
        
    }
  


  
}

function follow(s){
    document.getElementById(`follow(${s})`).classList.add('d-none');
    document.getElementById(`unfollow(${s})`).classList.remove('d-none');
}

function unfollow(s){
    document.getElementById(`unfollow(${s})`).classList.add('d-none');
    document.getElementById(`follow(${s})`).classList.remove('d-none');
}

function like(i){
    document.getElementById(`heart(${i})`).classList.add('d-none');
    document.getElementById(`red-heart(${i})`).classList.remove('d-none');
    posts[i]['likes']++;
    document.getElementById(`likes${i}`).innerHTML = posts[i]['likes'];
}

function dislike(i){
    document.getElementById(`heart(${i})`).classList.remove('d-none');
    document.getElementById(`red-heart(${i})`).classList.add('d-none');
    posts[i]['likes']--;
    document.getElementById(`likes${i}`).innerHTML = posts[i]['likes'];

}

function addComment(index) {
    let input = document.getElementById(`input(${index})`)
    posts[index]['comments'].push(input.value);    
    render();
    input.value = '';

}

function getCommentsHtml(i){
    let htmlText = "";
    for (let j = 0; j < posts[i]['comments'].length; j++) {
        const comment = posts[i]['comments'][j];
        htmlText += `
        <span><b>${user}</b> ${comment}</span><br>    
        `;
        
    }

    return htmlText;
}


function noFunction(){
    alert ('Danke für´s Klicken :) Dies ist eine Übungsseite. Sie hat keine echte Funktionalität.')
}
