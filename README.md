# chanclas-toolbox
little tools & utils that I use   
chanclas

## utils

```sendTGMessage( chat_id: string, telegram_bot_id: string, message: string) : void```   
general send message function   

```sendEnvBotTGMessage (message: string) : void```   
uses bot_id and chat_id from env vars:    
```process.env.TG_CHAT_ID && process.env.TG_BOT_ID```

```isString (arg:any) : boolean```   
checks if a var is a string
