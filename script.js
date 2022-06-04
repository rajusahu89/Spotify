 let index=0;
 let audioElement=new Audio("songs/1.mp3")
 let masterplay=document.getElementById("masterplay")
 let scroll=document.getElementById("scroll")
 let gif=document.getElementById("gif")
 songitem=Array.from(document.getElementsByClassName("songitem"))


 let songs=[
     {songname:"agar aasman tak",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
     {songname:"Dil-Ibaadat-kar",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
     {songname:"Dil-Ibaadat-kar",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
     {songname:"Sirf-Tum",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
     {songname:"Sirf-Tum",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
     {songname:"Pardesh-Meri",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
     {songname:"Andaz",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
     {songname:"Mera-Dil-Bhi",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    //  {songname:"salam-e-ishq",filePath:"songs/9.mp3",coverPath:"covers/5.jpg"},
    //  {songname:"salam-e-ishq",filePath:"songs/10.mp3",coverPath:"covers/5.jpg"},


     
]
songitem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songsname")[0].innerText=songs[i].songname
    // console.log(element,i)
});
masterplay.addEventListener("click",()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause")
        gif.style.opacity=1
        
    }else{
        audioElement.pause()
        masterplay.classList.remove("fa-circle-pause")
        masterplay.classList.add("fa-circle-play");
        gif.style.opacity=0
    }
})
audioElement.addEventListener("timeupdate",()=>{
    console.log("hi")
   let progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    scroll.value=progress;
})
scroll.addEventListener("change",()=>{
    audioElement.currentTime=scroll.value*audioElement.duration/100
})

const makeAllplay=()=>{
    Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause")
        element.classList.add("fa-circle-play")
        // console.log(element)
    })
}
 
Array.from(document.getElementsByClassName("songitemplay")).forEach((element)=>{
  element.addEventListener("click",(e)=>{
      console.log(e.target)
       makeAllplay()
       e.target.classList.remove("fa-circle-play")
      e.target.classList.add("fa-circle-pause")
      index=parseInt(e.target.id)
      audioElement.src=`songs/${index+1}.mp3`
      audioElement.currentTime=0
      audioElement.play()
      masterplay.classList.remove("fa-circle-play");
      masterplay.classList.add("fa-circle-pause")

  })
})

document.getElementById("next").addEventListener("click",()=>{
    if(index>=9){
        index=0
    }else{
        index+=1
        audioElement.src=`songs/${index+1}.mp3`
        audioElement.currentTime=0
        audioElement.play()
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause")
    }
})
document.getElementById("pre").addEventListener("click",()=>{
    if(index<=0){
        index=9
    }else{
        index-=1
        audioElement.src=`songs/${index+1}.mp3`
        audioElement.currentTime=0
        audioElement.play()
        masterplay.classList.remove("fa-circle-play");
        masterplay.classList.add("fa-circle-pause")
    }
})
 