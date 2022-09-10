# Handling Messages

:::tip
This page is a follow-up and bases its code on the [previous page](/guide/v2/creating-your-app/authentication).
:::

## Listening to messages

Now that we can connect to WhatsApp, it's time to listen for incoming messages. Doing so with whatsapp-web.js is pretty straightforward. The client emits a `message` event whenever a message is received. This means we can capture it like so:

```js
// Listening to all incoming messages
client.on('message', message => {
	console.log(message.body);
});
```

<!--// Listening to received messages (onley others)
client.on('recived_message', message => {
	console.log(message.body);
});

// Listening to received messages (onley yours)
client.on('create_message', message => {
	console.log(message.body);
});-->
<!-- Image -->

Running this example should log all incoming messages to the console. 

## Replying to messages

Logging to the console is great and all, but it doesn't provide any feedback for the end-user. Let's create a basic ping/pong command before you move on to making real commands. Remove the `console.log(message.body)` line from your code and replace it with the following:

```js {2-5}
client.on('message', message => {
	if (message.body === '!ping') {
		// send back "pong" to the chat the message was sent in
		client.sendMessage(message.from, 'pong');
	}
});
```

Restart your application and then send `!ping` to a chat. If all goes well, you should see something like this:

<!-- <WhatsappMessages>
// Create Whatsapp chat with demo
</WhatsappMessages> -->

The messages received have a convenience function on them that allows you to directly reply to them via WhatsApp's reply feature.

```js {2-5}
client.on('message', message => {
	if (message.body === '!ping') {
		// reply back "pong" directly to the message
		message.reply('pong');
	}
});
```

<!-- <WhatsappMessages>
// Create Wha  tsapp chat with demo
</WhatsappMessages> -->

In this case, notice that we dont have to specify which chat we were sending the message to.

## Creating more Commands

You already learnd how to create a simple command. Now we will go on with this knowledge and create more Commands.

::: tip

The received message contains informations many intersting things. You can take a look here in this preview modal.
::: details Preview modal
```js
Message {
  	_data: {
    	id: {
			fromMe: boolen,
      		remote: string,
      		id: string,
      		_serialized: string
    	},
    	body: string,
    	type: string,
    	t: number,
    	notifyName: string,
    	from: string,
    	to: string,
    	self: string,
    	ack: number,
    	isNewMsg: boolen,
    	star: boolen,
    	kicNotified: boolen,
    	recvFresh: boolen,
    	isFromTemplate: boolen,
    	pollInvalidated: boolen,
    	broadcast: boolen,
    	mentionedJidList: [],
    	isVcardOverMmsDocument: boolen,
    	isForwarded: boolen,
    	hasReaction: boolen,
    	ephemeralOutOfSync: boolen,
    	productHeaderImageRejected: boolen,
    	lastPlaybackProgress: number,
    	isDynamicReplyButtonsMsg: boolen,
    	isMdHistoryMsg: boolen,
    	requiresDirectConnection: boolen,
    	pttForwardedFeaturesEnabled: boolen,
    	isEphemeral: boolen,
    	isStatusV3: boolen,
    	links: []
  	},
    mediaKey: string,
    id: {
        fromMe: boolen,
        remote: string,
        id: string,
        _serialized: string
    },
    ack: number,
    hasMedia: boolen,
    body: string,
    type: string,
    timestamp: number,
    from: string,
    to: string,
    author: string,
    deviceType: string,
    isForwarded: boolen,
    forwardingScore: number,
    isStatus: boolen,
    isStarred: boolen,
    broadcast: boolen,
    fromMe: boolen,
    hasQuotedMsg: boolen,
    duration: string,
    location: string,
    vCards: [],
    inviteV4: string,
    mentionedIds: [],
    orderId: string,
    token: string,
    isGif: boolen,
    isEphemeral: boolen,
    links: []
}
```
:::

Let's start and create a command that count all your chats on your phone. Do to this, we need to modify our message lister to an `async`, because we have to `await` the `client` counted all chats.

```js {1,5-8}
client.on('message', async msg => {
	if (message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
	else if (msg.body === '!chats') {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `You have ${chats.length} chats open.`);
    }
}
```



## Create a message handler

<code-group>
<code-block title="main.js" active>
```js

```
</code-block>

<code-block title="commandHandler.js">
```js

```
</code-block>

<code-block title="config.json">
```json

```
</code-block>
</code-group>

### Mentioning Contacts

#### Getting mentioned Contacts

#### Sending messages with mentions

