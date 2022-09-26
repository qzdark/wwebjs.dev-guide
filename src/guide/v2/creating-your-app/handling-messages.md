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

### Simple command structure

You learnd how to create a simple command. You already have an if statement that checks messages for a ping/pong command. Adding other command checks is just as easy; chain an `else if` to your existing condition.

```js {5-7}
client.on('message', message => {
	if (message.body === '!ping') {
		message.reply('pong');
	}
	else if (message.body === '!beep') {
		message.reply('meep');
	}
});
```

## Creating more Commands

Now we will go on with this knowledge and create more Commands.

```js {5-13}
client.on('message', msg => {
	if (message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
	else if (msg.body === '!beep') {
       client.sendMessage(message.from, 'meep');
    }
	else if (msg.body === '!chats') {
       client.sendMessage(message.from, 'chats');
    }
	else if (msg.body === '!user info') {
        client.sendMessage(message.from, 'user info');
    }
});
```

### Chats command

Let's start and create a command that count all your chats on your phone. Do to this, we need to modify our message lister to an `async`, because we have to `await` that the client counted all chats. Lets start:

```js {1,8-11}
client.on('message', async msg => {
	if (message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
	else if (msg.body === '!beep') {
		client.sendMessage(message.from, 'meep');
    }
	else if (msg.body === '!chats') {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `You have ${chats.length} chats open.`);
    }
	else if (msg.body === '!user info') {
        client.sendMessage(message.from, 'user info');
    }
}
```
### User info command
```js {12-20}
client.on('message', async msg => {
	if (message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
	else if (msg.body === '!beep') {
		client.sendMessage(message.from, 'meep');
    }
	else if (msg.body === '!chats') {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `You have ${chats.length} chats open.`);
    }
	else if (msg.body === '!user info') {
    	let info = client.info;
        message.reply(
            `*Connection info*\n`+
            `User name: ${info.pushname}\n`+
            `My number: ${info.wid.user}\n`+
            `Platform: ${info.platform}`
        );
    }
}
```
::: tip
The received message contains informations many intersting things. You can take a look here in this preview modal. For a full list of all the properties and methods, check out [the documentation page for it](https://docs.wwebjs.dev/Client.html).
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

### The problem with `if`/`else if`

If you don't plan on making more than a couple commands, then using an `if`/`else if` chain is fine; however, this isn't always the case. Using a giant `if`/`else if` chain will only hinder your development process in the long run.

Here's a small list of reasons why you shouldn't do so:

* Takes longer to find a piece of code you want;
* Easier to fall victim to [spaghetti code](https://en.wikipedia.org/wiki/Spaghetti_code);
* Difficult to maintain as it grows;
* Difficult to debug;
* Difficult to organize;
* General bad practice.

Next, we'll be diving into something called a "command handler" – code that makes handling commands easier and much more efficient. This allows you to move your commands into individual files.

## Create a message handler

The other commands and events in this guide will be based on the message handler, but this does not mean that you have to use it. You can also use your app without a message handler.

<code-group>
<code-block title="main.js" active>
```js {4,6,8-12,14-31}
const fs = require('fs');
const config = require('./config');

client.prefix = config.prefix;

client.commands = new Map();

const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${folder}/${file}`);
	client.commands.set(command.name, command);
};

client.on('message', message => {
	if (!message.body.startsWith(client.prefix)) return;

	const args = message.body.slice(client.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName);
	if (!command) return;

	try {
		command.execute(client, message);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});
 
client.initialize();
```
</code-block>

<code-block title="config.json">
```json
{
	"prefix": "!"
}
```
</code-block>
</code-group>

<code-group>

<code-block title="utility/ping.js">
```js
module.exports = {
    name: 'ping',
    execute(message) {
        message.reply('pong');
    }
}
```
</code-block>

<code-block title="utility/beep.js">
```js
module.exports = {
    name: 'beep',
    execute(message) {
        message.reply('meep');
    }
}
```
</code-block>

<code-block title="utility/chats.js">
```js
module.exports = {
    name: 'chats',
    async execute(client, message) {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `You have ${chats.length} chats open.`);
    }
};
```
</code-block>

<code-block title="utility/typeing.js">
```js
module.exports = {
    name: 'typeing',
    async execute(client, message) {
        const chat = await message.getChat();
        // simulates typing in the chat
        chat.sendStateTyping();
    }
};
```
</code-block>
</code-group>

### Mentioning Contacts

Test

#### Getting mentioned Contacts

#### Sending messages with mentions

## Resulting Code

If you want to compare your code to the code we've constructed so far, you can review it over on the [GitHub repository](). 