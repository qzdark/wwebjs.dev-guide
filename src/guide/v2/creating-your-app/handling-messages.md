# Handling Messages

:::tip
This page is a follow-up and bases its code on the [previous page](/guide/v2/creating-your-app/authentication).
:::

## Listening to messages

Now that we can connect to WhatsApp, it's time to listen for incoming messages. Doing so with whatsapp-web.js is pretty straightforward. The client emits a `message` event whenever a message is received. This means we can capture it like so:

```js
client.on('message', message => {
	console.log(message.body);
}); 
```

<!-- Image -->

Running this example should log all incoming messages to the console. 

## Replying to messages

The messages received have a convenience function on them that allows you to directly reply to them via WhatsApp's reply feature. This will show the quoted message above the reply.

To test this out, let's build a simple ping/pong command:

```
client.on('message', message => {
	if(message.body === '!ping') {
		message.reply('pong');
	}
});
```

## Message Object

```json

```

## Creating a Command

### Create a message handler

## Mentioning Contacts

### Getting mentioned Contacts

### Sending messages with mentions

