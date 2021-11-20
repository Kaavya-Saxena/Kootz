console.log('Welcome to Kootz');
// initialising the variables
let songIndex=0;
let audioElement= new Audio('Songs/0.mp3');
let masterPlay= document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName')
let songitems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName:"Lost Sky - Dreams", filepath:"Songs/0.mp3", coverPath:"cover.png"},
    {songName:"Auram & Kyross - Nothing Else", filepath:"Songs/1.mp3", coverPath:"Covers/cover2.jpg"},
    {songName:"NCS - Heart Afire", filepath:"Songs/2.mp3", coverPath:"Covers/cover3.jpg"},
    {songName:"Janji - Heroes Tonight", filepath:"Songs/3.mp3", coverPath:"Covers/cover4.jpg"},
    {songName:"SkyL1nk - Wizard", filepath:"Songs/4.mp3", coverPath:"Covers/cover5.jpg"},
    {songName:"Nightcore - Siren", filepath:"Songs/5.mp3", coverPath:"Covers/cover6.jpg"},
    {songName:"Everything at Once", filepath:"Songs/6.mp3", coverPath:"Covers/cover7.jpg"}
]

songitems.forEach((element,i)=>{
    // console.log(element,i)
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML=songs[i].songName;
})

// audioElement.play();

// handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        // changing play symbol to pause 
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity="1";
    }
    else{
        audioElement.pause();
        // changing pause symbol to play
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity="0";
    }
})

// listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    // update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime= (myProgressBar.value*audioElement.duration)/100
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play');
        element.classList.remove('fa-pause');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id)
        console.log(e.target);
        makeAllPlays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src='Songs/'+songIndex+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        gif.style.opacity="1";
    }) 
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex<6){
        songIndex+=1;
    }
    else{
        songIndex=0;
    }
        audioElement.src='Songs/'+songIndex+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity="1";
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex>0){
        songIndex-=1;
    }
    else{
        songIndex=6;
    }
        audioElement.src='Songs/'+songIndex+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity="1";
})