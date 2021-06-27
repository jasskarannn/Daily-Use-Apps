var slider = document.getElementById("myVolume");
var output = document.getElementById("volLevel");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

let overlayLayer = document.getElementById("overlay-layer");
let bgContainer = document.getElementById(".container");


let volSlider = document.querySelector("#myVolume");
let seekSlider = document.querySelector("#mySongSeek");
var seekto;
let isPlaying = false;
let childrenOfRecentMusic = document.querySelector(".recent-music").children;

// console.log(childrenOfRecentMusic) // tiles on jump back in
for(let i = 0; i < childrenOfRecentMusic.length; i++){
  childrenOfRecentMusic[i].addEventListener("click", function(e){
  // console.log(e.currentTarget.classList[0].split("recent-music-")[1]);
  let playingAlbumCover = childrenOfRecentMusic[i].querySelector("img").src;
  // console.log(playingAlbumCover);
  let val = e.currentTarget.classList[0].split("recent-music-")[1]; 
  let songDetails = document.getElementById(`recent-music-${val}-details`).innerText.split("by");
  let songTitle = songDetails[0];
  let songArtist = songDetails[1];
  console.log(songTitle);
  console.log(songArtist);
  let audio = childrenOfRecentMusic[i].querySelector("audio");
  console.log(audio.duration);
  
  seekSlider.addEventListener("mouseup", function(e){
    if(isPlaying){
      seekfn(e);
    }
  })
  volSlider.addEventListener("mouseup", function(e){
    audio.volume = volSlider.value/100;
  })
  // gets current clicked song's duration in two seperate variables
  let audioMins = Math.floor(audio.duration/60);
  let audioSecs = Math.ceil(audio.duration%60);
  if(audioSecs < 10){
    audioSecs = "0" + audioSecs; // append 0 before seconds counter
  }
  // console.log(audioMins + " " + audioSecs);
  let audioDuration = document.getElementById("seek-end-time");
  audioDuration.innerText = `${audioMins}:${audioSecs}`
  let playPauseBtn = document.getElementById("pauseSong");
  // to change current playing song album cover and song name, details on bottom 
  // sideways to the controller.
  let playingNowAlbum = document.getElementById("hide-playing").children[1];
  let playingNowSong = document.getElementById("hide-playing").children[0];
  console.log(playingNowSong.children);
  playingNowSong.children[0].innerText = songTitle;
  playingNowSong.children[1].innerText = songArtist;
  // 0 name 1 artist  
  // playingNowAlbum is the album cover appearing in left bottom.
  playingNowAlbum.querySelector("img").src = playingAlbumCover;
  // console.log(playingNowAlbum);

  if(!isPlaying){
    audio.play();
    playingNowAlbum.classList.add("show-animation"); // adds animation class to divs next to controller
    playingNowSong.classList.add("show-animation");
    playingNowAlbum.style.display = "block";
    playingNowSong.style.display = "block";

    isPlaying = true;
    playPauseBtn.innerText = "pause"; // changes the play button to pause in controller
  }else{
    audio.pause();
    playingNowAlbum.style.display = "none";
    playingNowSong.style.display = "none";
    playingNowAlbum.classList.remove("show-animation");
    playingNowSong.classList.remove("show-animation");
    playPauseBtn.innerText = "play_arrow"; // changes the pause button to play in controller
    isPlaying = false;
  }
  })
}


function seekfn(e){
  seekSlider.value = e.clientX - seekSlider.offsetLeft;
  seekto = audio.duration * (seekSlider.value / 100);
  audio.currentTime = seekto;
}

let allSongsUrls = [
  {
    audioSrc: 'http://s48.ve.vc/data/48/49934/297517/Musafir - Korala Maan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49934/300x700/Musafir-Korala-Maan.jpg',
    title: 'Musafir',
    artist: 'Korala Maan'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49927/297510/8 Raflaan - Mankirt Aulakh (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49927/300x700/8-Raflaan-Mankirt-Aulakh.jpg',
    title: '8 Raflaan',
    artist: 'Mankirt Aulakh'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50032/297657/Agg Att Koka Kehar - Gurnam Bhullar (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50032/300x700/Agg-Att-Koka-Kehar-Gurnam-Bhullar.jpg',
    title: 'Agg Att Koka Kehar',
    artist: 'Gurnam Bhullar'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50022/297647/Few Days - Karan Aujla (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50022/300x700/Few-Days-Karan-Aujla.jpg',
    title: 'Few Days',
    artist: 'Amantej Hundal'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49932/297515/Palazzo 2 - Kulwinder Billa (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49932/300x700/Palazzo-2-Kulwinder-Billa.jpg',
    title: 'Palazzo 2',
    artist: 'Kulwinder Billa'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50013/297638/Khabbi Seat - Ammy Virk (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50013/300x700/Khabbi-Seat-Ammy-Virk.jpg',
    title: 'Khabbi Seat',
    artist: 'Ammy Virk'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50034/297659/Do Vaari Jatt - Jordan Sandhu (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50034/300x700/Do-Vaari-Jatt-Jordan-Sandhu.jpg',
    title: 'Do Vaari Jatt',
    artist: 'Jordan Sandhu'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49982/297587/Prahune - Prem Dhillon (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49982/300x700/Prahune-Prem-Dhillon.jpg',
    title: 'Prahune',
    artist: 'Prem Dhillon'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49926/297509/Ranjha - Simar Doraha (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49926/300x700/Ranjha-Simar-Doraha.jpg',
    title: 'Ranjha',
    artist: 'Simar Doraha'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50077/297703/Mitha Mitha - Amrit Maan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50077/300x700/Mitha-Mitha-Amrit-Maan.jpg',
    title: 'Mitha Mitha',
    artist: 'R Nait'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49981/297586/Koka - Ranjit Bawa (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49981/300x700/Koka-Ranjit-Bawa.jpg',
    title: 'Koka',
    artist: 'Ranjit Bawa'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50031/297656/Shraab Wargi - Dilpreet Dhillon (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50031/300x700/Shraab-Wargi-Dilpreet-Dhillon.jpg',
    title: 'Shraab Wargi',
    artist: 'Gurlez Akhtar'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50176/297804/Jaagde Raho - Arjan Dhillon (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50176/300x700/Jaagde-Raho-Arjan-Dhillon.jpg',
    title: 'Jaagde Raho',
    artist: 'Arjan Dhillon'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50083/297709/Family - Deep Chahal (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50083/300x700/Family-Deep-Chahal.jpg',
    title: 'Family',
    artist: 'Deep Chahal'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50151/297779/Tees Maar Khan - KpTaan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50151/300x700/Tees-Maar-Khan-KpTaan.jpg',
    title: 'Tees Maar Khan',
    artist: 'KpTaan'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50030/297655/Ki Pta - Arjan Dhillon (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50030/300x700/Ki-Pta-Arjan-Dhillon.jpg',
    title: 'Ki Pta',
    artist: 'Arjan Dhillon'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50203/297833/Burberry - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50203/300x700/Burberry-Sidhu-Moose-Wala.jpg',
    title: 'Burberry',
    artist: 'Sidhu Moose Wala'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50021/297646/El Jatt - Varinder Brar (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50021/300x700/El-Jatt-Varinder-Brar.jpg',
    title: 'El Jatt',
    artist: 'Veer Sandhu'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50223/297859/Us - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50223/300x700/Us-Sidhu-Moose-Wala.jpg',
    title: 'Us',
    artist: 'Sidhu Moose Wala'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50209/297839/UNFUCKWITHABLE - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50209/300x700/UNFUCKWITHABLE-Sidhu-Moose-Wala.jpg',
    title: 'UNFUCKWITHABLE',
    artist: 'Sidhu Moose Wala'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50200/297829/Bitch Im Back - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50200/300x700/Bitch-Im-Back-Sidhu-Moose-Wala.jpg',
    title: 'Bitch Im Back',
    artist: 'Sidhu Moose Wala'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50008/297633/Same Jatt - Karan Aujla (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50008/300x700/Same-Jatt-Karan-Aujla.jpg',
    title: 'Same Jatt',
    artist: 'Karan Aujla'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49928/297511/Jatti Teri Fan - Gurman Sandhu (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49928/300x700/Jatti-Teri-Fan-Gurman-Sandhu.jpg',
    title: 'Jatti Teri Fan',
    artist: 'Gurman Sandhu'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50111/297737/Be Ready - Ninja (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50111/300x700/Be-Ready-Ninja.jpg',
    title: 'Be Ready',
    artist: 'Ninja'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50009/297634/Gumaan - Sharry Maan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50009/300x700/Gumaan-Sharry-Maan.jpg',
    title: 'Gumaan',
    artist: 'Sharry Maan'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50208/297838/Bapu - Amrit Maan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50208/300x700/Bapu-Amrit-Maan.jpg',
    title: 'Bapu',
    artist: 'Amrit Maan'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49933/297516/Jatt Nikle - Ninja (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49933/300x700/Jatt-Nikle-Ninja.jpg',
    title: 'Jatt Nikle',
    artist: 'Ninja'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50012/297637/No Way - Karan Aujla (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50012/300x700/No-Way-Karan-Aujla.jpg',
    title: 'No Way',
    artist: 'Karan Aujla'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49975/297580/Dont Know Why - Nirvair Pannu (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49975/300x700/Dont-Know-Why-Nirvair-Pannu.jpg',
    title: 'Dont Know Why',
    artist: 'Nirvair Pannu'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50216/297852/Racks And Rounds - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50216/300x700/Racks-And-Rounds-Sidhu-Moose-Wala.jpg',
    title: 'Racks And Rounds',
    artist: 'Sidhu Moose Wala'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50110/297736/Chan Vekhya - Harnoor (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50110/300x700/Chan-Vekhya-Harnoor.jpg',
    title: 'Chan Vekhya',
    artist: 'Harnoor'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49935/297518/Nachdi - G Khan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49935/300x700/Nachdi-G-Khan.jpg',
    title: 'Nachdi',
    artist: 'G Khan'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49949/297544/Kismat Teri - Inder Chahal (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49949/300x700/Kismat-Teri-Inder-Chahal.jpg',
    title: 'Kismat Teri',
    artist: 'Inder Chahal'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50244/297880/Brown Shortie - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50244/300x700/Brown-Shortie-Sidhu-Moose-Wala.jpg',
    title: 'Brown Shortie',
    artist: 'Sonam Bajwa'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49952/297547/Risky - Kulbir Jhinjer (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49952/300x700/Risky-Kulbir-Jhinjer.jpg',
    title: 'Risky',
    artist: 'Kulbir Jhinjer'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50040/297665/Pehredaariyan - Himmat Sandhu (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50040/300x700/Pehredaariyan-Himmat-Sandhu.jpg',
    title: 'Pehredaariyan',
    artist: 'Himmat Sandhu'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50142/297769/Kouli Khand Di - Korala Maan (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50142/300x700/Kouli-Khand-Di-Korala-Maan.jpg',
    title: 'Kouli Khand Di',
    artist: 'Korala Maan'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50071/297697/Insane - AP Dhillon (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50071/300x700/Insane-AP-Dhillon.jpg',
    title: 'Insane',
    artist: 'Gurinder Gill'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49956/297551/2 Bhai - Kambi Rajpuria (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49956/300x700/2-Bhai-Kambi-Rajpuria.jpg',
    title: '2 Bhai',
    artist: 'Kambi Rajpuria'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49995/297620/Nishaan - Kaka (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49995/300x700/Nishaan-Kaka.jpg',
    title: 'Nishaan',
    artist: 'Kaka'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/49991/297613/Gaani Yaar Di - Nawab (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/49991/300x700/Gaani-Yaar-Di-Nawab.jpg',
    title: 'Gaani Yaar Di',
    artist: 'Gurlez Akhtar'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50154/297782/Yes Or No - DJ Flow (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50154/300x700/Yes-Or-No-DJ-Flow.jpg',
    title: 'Yes Or No',
    artist: 'Shree Brar'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50130/297756/Kinne Aye Kinne Gye 2 - Ranjit Bawa (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50130/300x700/Kinne-Aye-Kinne-Gye-2-Ranjit-Bawa.jpg',
    title: 'Kinne Aye Kinne Gye 2',
    artist: 'Ranjit Bawa'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50066/297692/Jee Jee Kahenga - Joban Sandhu (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50066/300x700/Jee-Jee-Kahenga-Joban-Sandhu.jpg',
    title: 'Jee Jee Kahenga',
    artist: 'Joban Sandhu'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50207/297837/Jodi - Sajjan Adeeb (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50207/300x700/Jodi-Sajjan-Adeeb.jpg',
    title: 'Jodi',
    artist: 'Sajjan Adeeb'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50129/297755/Thik Thak - Minda (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50129/300x700/Thik-Thak-Minda.jpg',
    title: 'Thik Thak',
    artist: 'Minda'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50236/297872/Moosedrilla - Sidhu Moose Wala (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50236/300x700/Moosedrilla-Sidhu-Moose-Wala.jpg',
    title: 'Moosedrilla',
    artist: 'Divine'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50134/297761/Try Kar Ke - R Nait (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50134/300x700/Try-Kar-Ke-R-Nait.jpg',
    title: 'Try Kar Ke',
    artist: 'R Nait'
  },
  {
    audioSrc: 'http://s48.ve.vc/data/48/50085/297711/8 Ralde - Nirvair Pannu (DjPunjab.Com).mp3',
    imgUrl: 'https://cover.djpunjab.org/50085/300x700/8-Ralde-Nirvair-Pannu.jpg',
    title: '8 Ralde',
    artist: 'Nirvair Pannu'
  }
]

let songModalBody = document.querySelector(".songs-list-modal-container");
let songModal = document.querySelector(".songs-list-modal");
let hideDiv1 = document.querySelector("#hide-playing");
let hideDiv2 = document.querySelector(".hide-album-cover");
let songToPlay;
let ul = document.createElement("ul");
// displays modal with scrapped songs object


window.addEventListener("click", function(event){
  if(event.target == songModal){
    songModal.style.display = "none";
  }
})

document.querySelector(".recent-playlist-2").addEventListener("click", function(){
  showPlayListModal();  
  hideDiv1.style.display = "none";
  hideDiv2.style.display = "none";
})
function showPlayListModal(){
  songModal.style.display = "block";
  songModal.appendChild(ul);

for(let i = 0; i < allSongsUrls.length; i++){
    var artist = allSongsUrls[i].artist;
    var title = allSongsUrls[i].title;
    var audiosrc = allSongsUrls[i].audioSrc;
    var song = document.createElement("li");
    song.style.fontSize = "40px";
    song.style.textAlign = "center";
    song.style.color = "white"
    song.style.padding = "10px";
    song.style.listStyleType = "none";
    song.style.cursor = "pointer";
    var src = document.createElement("a");
    src.setAttribute("href", audiosrc);
    src.style.display = "inline-block";
    song.innerText = "Title : " + title + " | " + "Artist : " +artist;
    ul.appendChild(song);
    song.appendChild(src);
  
}
let playlistPlaying = false;
let allsongs = document.querySelectorAll("li");
let audio = new Audio();
for(let i = 0; i < allsongs.length; i++){
  allsongs[i].addEventListener("click", function(e){
    if(playlistPlaying == false){
      playlistPlaying = true;
      e.preventDefault();
      const anchor = e.target.children[0];
      
      audio.src = anchor.getAttribute("href");
      audio.play();
    }
  })  
  }
  for(let i = 0; i < allsongs.length; i++){
    
    allsongs[i].addEventListener("dblclick", function(e){
      e.preventDefault();
      if(playlistPlaying == true){
        playlistPlaying = false;
        audio.pause();
      }
    })
  }

}