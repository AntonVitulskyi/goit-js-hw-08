    import throttle from "lodash.throttle";
   import Player from '@vimeo/player';
    const iframe = document.querySelector('iframe');

    const player = new Player(iframe);

  let currentTimeInVideo = localStorage.getItem('videoplayer-current-time')
  
  if(currentTimeInVideo){player.setCurrentTime(currentTimeInVideo)}

        player.on('timeupdate', throttle(function(obj){
            localStorage.setItem('videoplayer-current-time', obj.seconds) }, 1000)
        );
        
     