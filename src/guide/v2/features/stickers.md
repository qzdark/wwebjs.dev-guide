# Stickers

## Sending Stickers

You can make WhatsApp stickers using whatsapp-web.js library

<b>This an example to how recive a media from user and resend it as a WhatsApp sticker</b>

```js
const {Client}=require("whatsapp-web.js")
const client=new Client()
client.on("message",async (msg)=>{
if(msg.body==="!sticker"){
    if(!msg.hasMedia){
        //checking if user message has a media included , to resend it as sticker
        return;
    }
    const media=await msg.downloadMedia();// Downloading the media from user message
 client.sendMessage(msg.from,media,{sendMediaAsSticker:true})//sending the media as A sticker
}
})
```

<b> or sending a custom sticker </b>

```js
const {MessageMedia}=require("whatsapp-web.js")
const media=MessageMedia.fromFilePath('Image Path');//importing media from a local image
//Or from a Link const media = await MessageMedia.fromUrl('Image Link');
client.sendMessage(msg.from,media,{
sendMediaAsSticker:true,)
```

## Sticker Options

```js
client.sendMessage(msg.from,media,{
sendMediaAsSticker:true,
stickerAuthor:"WhatsApp Bot"//The Author of the sticker
stickerName:"WhatsApp sticker",//Sticker Name
stickerCategories:["Fun"]//Sticker Categories
})
```
