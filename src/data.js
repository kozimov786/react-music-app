import { v4 as uuidv4 } from "uuid";


const chillHop = () => {
  return [
    {
      name: "Cruising",
      artist: "Evil Needle",
      cover: "https://chillhop.com/wp-content/uploads/2021/04/cb0cc6270d7f2e1bb13e44e8832bd5c9b2a61080-1024x1024.jpg",
      color: ["#EB544D", "#E7B25F"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=17087",
      active: true,
    },
    {
      name: "When I Get Up In The Morn...",
      artist: "Middle School",
      cover: "https://chillhop.com/wp-content/uploads/2021/07/5821e04fd52fa668a0b9890f213cbb12e454cc6b-1024x1024.jpg",
      color: ["#2D3F4D", "#D16A49"],
      id: uuidv4(),
      audio: "https://mp3.chillhop.com/serve.php/?mp3=22933",
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
    //aasndlajsdl
    {
      name: "Mehribonim Onam",
      artist: "Sardor Rahimxon",
      cover: "https://i.ytimg.com/vi/76mw_PI1bgw/maxresdefault.jpg",
      color: ["#4B1714", "#4F2111"],
      id: uuidv4(),
      audio: "https://muzfm.tv/uploads/dl06/sardor-rahimxon-mehribonim-onam.muzfm.tv.mp3",
      active: false,
    },
    {
      name: "Nigorim",
      artist: "Shohruhxon",
      cover: "https://muzfm.tv/uploads/posts/2021-01/1611230619_shohruhxon.jpg",
      color: ["#44495B", "#535971"],
      id: uuidv4(),
      audio: "http://newhit.uz/download/1992",
      active: false,
    },
    //asodkadsoa
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