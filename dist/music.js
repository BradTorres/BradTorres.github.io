const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    lrcType: 3,
    loop: 'all',
    order: 'random',
    preload: 'auto',
    volume: 0.7,
    mutex: true,
    listFolded: false,
    listMaxHeight: 120,

    audio: [
	{
        name: "Round & Laundry",
        artist: 'Nai Br.XX、Celeina Ann',
        url: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/MusicURL0412/Nai%20Br.XX%E3%80%81Celeina%20Ann%20-%20Round%20%26%20Laundry.flac',
        cover: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/Cover0412/The_Loneliest_Girl.png',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
	  {
        name: 'Shake It Off (Live)',
        artist: 'Taylor Swift',
        url: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/MusicURL0412/Taylor%20Swift%20-%20Shake%20It%20Off.flac',
        cover: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/Cover0412/Shake%20it%20off.jpg',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
      {
        name: 'Welcome To New York (The 1989 World Tour Live)',
        artist: 'Taylor Swift',
        url: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/MusicURL0412/Taylor%20Swift%20-%20Welcome%20To%20New%20York%20%28The%201989%20World%20Tour%20Live%29.mp3',
        cover: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/Cover0412/Welcome%20To%20New%20York.jpg',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
	  {
        name: 'Kiss Me',
        artist: 'Nai Br.XX、Celeina Ann',
        url: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/MusicURL0412/Nai%20Br.XX%E3%80%81Celeina%20Ann%20-%20Kiss%20Me.flac',
        cover: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/Cover0412/The_Loneliest_Girl.png',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
      {
        name: 'Bloom of Youth (风华正茂)',
        artist: '清水準一',
        url: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/MusicURL0412/%E6%B8%85%E6%B0%B4%E6%BA%96%E4%B8%80%20-%20Bloom%20of%20Youth%20%28%E9%A3%8E%E5%8D%8E%E6%AD%A3%E8%8C%82%29.flac',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      }
    ]
});