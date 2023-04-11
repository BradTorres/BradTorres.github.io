const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "Welcome To New York (Live)",
        artist: 'Taylor Swift',
        url: 'http://ws.stream.qqmusic.qq.com/C400001eA8L60LIUmF.m4a?guid=804088999&vkey=BD8506C031F2B112B4D33602C36BB61086718DEE468BA907FD9FC58524F81EEDA804496AB7789D824D9BE8CB0A8273CAD6DA0ECFA3A007BA&uin=&fromtag=120032',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	  {
        name: 'Shake It Off (Live)',
        artist: 'Taylor Swift',
        url: 'http://music.163.com/song/media/outer/url?id=1852211573.mp3',
        cover: 'http://p2.music.126.net/Wx5GNJEpay2JbfVUJc4Aew==/109951163094853876.jpg?param=130y130',
      },
      {
        name: 'Baby One More Time',
        artist: 'Britney Spears',
        url: 'http://music.163.com/song/media/outer/url?id=2187769.mp3',
        cover: 'http://p1.music.126.net/LiRR__0pJHSivqBHZzbMUw==/109951163816225567.jpg?param=130y130',
      },
	  {
        name: 'Call Me Maybe',
        artist: 'Carly Rae Jepsen',
        url: 'http://music.163.com/song/media/outer/url?id=1977397113.mp3',
        cover: 'http://p2.music.126.net/ggnyubDdMxrhpqYvpZbhEQ==/3302932937412681.jpg?param=130y130',
      },
      {
        name: 'Good Time',
        artist: 'Owl City&Carly Rae Jepsen',
        url: 'http://www.ytmp3.cn/down/34148.mp3',
        cover: 'http://p1.music.126.net/c5NVKUIAUcyN4BQUDbGnEg==/109951163221157827.jpg?param=130y130',
      }
    ]
});