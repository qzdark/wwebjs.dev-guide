# Handling Messages

:::tip
This page is a follow-up and bases its code on the [previous page](/guide/v2/creating-your-app/authentication).
:::

## Listening to messages

Now that we can connect to WhatsApp, it's time to listen for incoming messages. Doing so with whatsapp-web.js is pretty straightforward. The client emits a `message` event whenever a message is received. This means we can capture it like so:

::: tip INFO
You can take a look here, how your received `message.body` will look like.
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

Now we will go on with this knowledge and create more Commands. In this case we will create 2 more commands that we modify:

```js {8-13}
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

In the first example we use a client method called `getChats()` to count all your open chats on your Phone:

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

The code above would result in this:

<!--image-->

::: tip
The received message contains informations many intersting things. For a full list of all the properties and methods, check out [the documentation page](https://docs.wwebjs.dev/Message.html) for it.
:::

### User info command

In this second example we modify the other if statement and show some information about you:

```js {12-20}
client.on('message', async message => {
	if (message.body === '!ping') {
		client.sendMessage(message.from, 'pong');
	}
	else if (message.body === '!beep') {
		client.sendMessage(message.from, 'meep');
    }
	else if (message.body === '!chats') {
        const chats = await client.getChats();
        client.sendMessage(message.from, `You have ${chats.length} chats open.`);
    }
	else if (message.body === '!user info') {
    	let info = client.info;
        client.sendMessage(message.from,
            `*Connection info*\n`+
            `User name: ${info.pushname}\n`+
            `My number: ${info.wid.user}\n`+
            `Platform: ${info.platform}`
        );
    }
};
```

The code above would result in this:

<!--image-->

::: tip
The get informations about your device and other intersting things, check out [the documentation page](https://docs.wwebjs.dev/Client.html) for a full list of all the properties and methods.
:::


### The problem with `if`/`else if`

If you don't plan on making more than a couple commands, then using an `if`/`else if` chain is fine. But sometimes this isn't always the case. Using a giant `if`/`else if` chain will only create you some problems. It will hinder your development process in the long run. Here are some reasons why you shouldn't do so:

- Takes longer to find a piece of code you want;
- Difficult to maintain as it grows;
- Difficult to debug;
- General bad practice.

But for that we created a solution that allows you to move your commands into individual files.

::: warning
Even if you are not interrested to use a message handler, we would recommend you to read the next part. Because all future created commands and events in this guide will be based on the message handler, but this does not mean that you have to use it. You can also use your app without a message handler.
:::

## Create a message handler

Befor we cam start of using our own message handler, we have to install a separated tool, which will allow us to read files from folders. This is in most cases not needed, because is already installed by using [node.js](https://nodejs.org/en), but sometimes you still have to configure it. Todo this you have to open your terminal and install the [filesystem](https://nodejs.org/api/fs.html) package:

<code-group>
<code-block title="npm" active>
```bash
npm install fs
```
</code-block>

<code-block title="yarn">
```bash
yarn add fs
```
</code-block>

<code-block title="pnpm">
```bash
pnpm add fs
```
</code-block>
</code-group>

After the install we can now require the fs module in our `main.js` file and creating a new folder named `commands` where all our commands will be moved into. We can do this by creating a new file for each command.

<code-group>
<code-block title="main.js" active>
```js {1,3-4,6-10,12-24}
const fs = require('fs');

client.prefix = "!";
client.commands = new Map();

const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${folder}/${file}`);
	client.commands.set(command.name, command);
};

client.on('message', async message => {
	if (!message.body.startsWith(client.prefix)) return;

	const args = message.body.slice(client.prefix.length).trim().split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName);
	if (!command) return;

	command.execute(client, message);
});
 
client.initialize();
```
</code-block>

<code-block title="commands/ping.js">
```js {1-6}
module.exports = {
    name: 'ping',
    execute(message) {
        message.reply('pong');
    }
}
```
</code-block>

<code-block title="commands/chats.js">
```js {1-7}
module.exports = {
    name: 'chats',
    async execute(client, message) {
        const chats = await client.getChats();
        client.sendMessage(msg.from, `You have ${chats.length} chats open.`);
    }
};
```
</code-block>

<code-block title="commands/user-info.js">
```js {1-12}
module.exports = {
    name: 'user info',
    async execute(client, message) {
    	let info = client.info;
        client.sendMessage(msg.from,
            `*Connection info*\n`+
            `User name: ${info.pushname}\n`+
            `My number: ${info.wid.user}\n`+
            `Platform: ${info.platform}`
        );
    }
};
```
</code-block>
</code-group>

In the end your folder should have a look like this:

::: vue
whatsapp-app
├── `.wwebjs_auth`
│   └── `session-1`
│
├── `commands`
│   ├── beep.js
│   ├── chats.js
│   ├── ping.js
│   └── user-info.js
│
├── `node_modules`
│  
├── main.js
├── package-lock.json
└── package.json
:::

## Resulting Code

If you want to compare your code to the code we've constructed so far, you can review it over on the [GitHub repository](). 
