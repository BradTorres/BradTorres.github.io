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
        url: 'http://music.163.com/song/media/outer/url?id=1852211573.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
      {
        name: 'Baby One More Time',
        artist: 'Britney Spears',
        url: 'http://music.163.com/song/media/outer/url?id=2187769.mp3',
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
	  {
        name: 'Call Me Maybe',
        artist: 'Carly Rae Jepsen',
        url: 'http://music.163.com/song/media/outer/url?id=1977397113.mp3',
        cover: 'http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      },
      {
        name: 'Good Time',
        artist: 'Owl City&Carly Rae Jepsen',
        url: 'http://www.ytmp3.cn/down/34148.mp3',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
        lrc: 'https://bradtorresblog.oss-cn-beijing.aliyuncs.com/Music/LRC0412/Shake%20It%20Off-Taylor%20Swift_revise.lrc',
      }
    ]
});