var tag = document.createElement('script');
tag.src = "http://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var buffered = 0;
var currentTime = 0;
var videoWrapper = document.getElementById('video-wrapper');

var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player', {
    playerVars: {'controls': 0, 'playlist': 'SWfte9uyM58', 'loop': 1 },
    videoId: 'SWfte9uyM58',
    events: {
      'onReady': onPlayerReady,
      "onStateChange": onPlayerStateChange
    },
  });

}


function onPlayerReady(event) {
  setTimeout(function() {
      event.target.playVideo();
  }, 200)


}

function onPlayerStateChange(event) {
  if (event.data == -1) {
    var timer = setInterval(function() {
        currentTime = event.target.getCurrentTime()
        buffered += 0.01  ;
        if (currentTime > 0 && !(hasClass(videoWrapper, 'showVideo'))) {
           videoWrapper.className += ' showVideo';
           window.clearInterval(timer)
        }
        NProgress.set(buffered);
    }, 100)
  } else if (event.data == 1) {
    NProgress.set(1);
    setTimeout(function() {
      videoWrapper.className += ' hideVideo';
    }, 84000)
  } else if (event.data == 0) {
      videoWrapper.className = 'video-background';
  }
}

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
