import { v4 as uuidv4 } from "uuid";


const chillHop = () => {
  return [
    {
      name: "Habibim Sog'inchi",
      artist: "Sardor Rahimxon",
      cover: "https://i1.sndcdn.com/artworks-Wl76zvHUAwVE3bXr-r4Lkfw-t500x500.jpg",
      color: ["#44495B", "#535971"],
      id: uuidv4(),
      audio: "https://bestmusic.uz/files/music/2020/11/Sardor_Rahimxon_-_Habibim_soginchi.mp3",
      active: true,
    },
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      color: ["#EB544D", "#E7B25F"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      active: false,
    },
    {
      name: "Otamdan yodgorim",
      artist: "Rardor rahimxon",
      cover: "https://i1.sndcdn.com/artworks-Wl76zvHUAwVE3bXr-r4Lkfw-t500x500.jpg",
      color: ["#2D3F4D", "#D16A49"],
      id: uuidv4(),
      audio: "http://bestmusic.uz/play/arxiv/sardor-rahimxon-otamdan-yodgorim-onam.mp3",
      active: false,
    },
    {
      name: "Luvn You",
      artist: "Chillhop Music",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/875b9624506ae8d05750b9e4ab4579abb1fe3e16-1024x1024.jpg",
      color: ["#4B1714", "#4F2111"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21784",
      active: false,
    },
    {
      name: "Lavish",
      artist: "Toonorth",
      cover: "https://chillhop.com/wp-content/uploads/2021/05/94a210b97ac05e5f05e1ce784a1a9ecf90168d03-1024x1024.jpg",
      color: ["#44495B", "#535971"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17933",
      active: false,
    },
    {
      name: "Mehribonim Onam",
      artist: "Sardor Rahimxon",
      cover: "https://yt3.ggpht.com/ytc/AKedOLQOZtiTd7ixpuH-I4SR2e6DzzjjtTCYpViJX699EQ=s900-c-k-c0x00ffffff-no-rj",
      color: ["#4B1714", "#4F2111"],
      id: uuidv4(),
      audio: "https://muzfm.tv/uploads/dl06/sardor-rahimxon-mehribonim-onam.muzfm.tv.mp3",
      active: false,
    },

    {
      name: "Cabaña",
      artist: "Juan Rios",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/4163ebb931e06d4ee8eb184295c0246d4a5055f7-1024x1024.jpg",
      color: ["#FEB6A8", "#503049"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=21647",
      active: false,
    }
  ]
}

export default chillHop;