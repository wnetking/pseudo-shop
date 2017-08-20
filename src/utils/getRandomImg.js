

export default function getRandomImg() {
  let imgArray = [
    "https://image.ibb.co/dbviCQ/1.png",
    "https://image.ibb.co/febqsQ/2.png",
    "https://image.ibb.co/eeB1z5/3.png",
    "https://image.ibb.co/d95Te5/4.png",
    "https://image.ibb.co/kzpoe5/5.png",
    "https://image.ibb.co/cuKMz5/6.png",
    "https://image.ibb.co/iab1z5/7.png",
    "https://image.ibb.co/hxnVsQ/8.png",
    "https://image.ibb.co/fAKbXQ/9.png",
    "https://image.ibb.co/hbxVsQ/10.png",
    "https://image.ibb.co/d2DQRk/11.png",
    "https://image.ibb.co/eCW1z5/12.png"
  ]

  return imgArray[(Math.random() * 10).toFixed(0)];
}