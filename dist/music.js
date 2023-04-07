const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
	{
        name: "Welcome To New York (Live)",
        artist: 'Taylor Swift',
        url: 'http://ws.stream.qqmusic.qq.com/C400001eA8L60LIUmF.m4a?guid=483925709&vkey=0032D37C6AA567F1AE27452E3F7F8725EBE7ACC2A1B0CA1DA0271E8E7647AB483ED6A44BC4C353E72C7AC2D3B1D334DD87F5EC08BEC58961&uin=&fromtag=120032',
        cover: 'http://p1.music.126.net/W_5XiCv3rGS1-J7EXpHSCQ==/18885211718782327.jpg?param=130y130',
      },
	  {
        name: 'Shake It Off (Live)',
        artist: 'Taylor Swift',
        url: 'http://ws.stream.qqmusic.qq.com/C400003KJZyY2sRxEJ.m4a?guid=914452646&vkey=4D3FA7FC5FA64F7CEE7E47DB3E35515DFF3541DED01BC5D717CEAF1D6AE700574215D4FE502C2D7D4844DFB7E46B8B9997A0BABED8003A58&uin=&fromtag=120032',
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