const logo = document.querySelector("[data-logo]");
const username = document.querySelector(".name")
const joined = document.querySelector("[data-joined]");
const userid = document.querySelector(".username");
const bio = document.querySelector(".bio");
const repo = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const address = document.querySelector(".location");
const profile = document.querySelector(".bio-link");
const twitter = document.querySelector(".twitter");
const company = document.querySelector(".carrer");
const input = document.querySelector(".search-input");
const search =document.querySelector(".btn");
let user="shubhammalik09";
fetchuser();
function render(data){
    logo.src = `${data?.avatar_url}`;
    username.innerText=`${data?.name}`;
    userid.innerText=`@${data?.login}`;
    let date = new Date(`${data?.created_at}`);
    const options = { month: "short" };
    let month = new Intl.DateTimeFormat("en-US", options).format(date);
    joined.innerHTML = `Joined ${date.getDate()} ${month} ${date.getFullYear()}`;
    bio.innerText = (`${data?.bio}` =="null"? "This profile has no bio" : `${data?.bio}`);
    repo.innerText = `${data?.public_repos}`;
    followers.innerText = `${data?.followers}`;
    following.innerText = `${data?.following}`;
    address.innerText = (`${data?.location}` =="null"? "Not Available" : `${data?.location}`);
    profile.innerText = (`${data?.blog}` ==""? "Not Available" : `${data?.blog}`);
    if(`${data?.twitter_username}` =="null"){
        twitter.innerText = "Not Available" ;
    }
    else{
        twitter.innerText = `${data?.twitter_username}`;
        twitter.href = `https://twitter.com/${data?.twitter_username}`;
    }

    company.innerText = (`${data?.company}` =="null"? "Not Available" : `${data?.company}`);
}

async function fetchuser(){
    try{
        let result = await fetch(`https://api.github.com/users/${user}`);
        console.log(`https://api.github.com/users/${user}`);
        let data = await result.json();
        render(data);
    }
    catch(e){
        console.log("");
    }
}

search.addEventListener("click",()=>{
    let value = input.value.trim();
    if(value !=""){
        user=value;
        fetchuser();
    }
})