import axios from "axios"

export async function sendEnvBotTGMessage(message: string) {
  if (process.env.TG_CHAT_ID && process.env.TG_BOT_ID)
    sendTGMessage(process.env.TG_CHAT_ID, process.env.TG_BOT_ID, message)
}

export async function sendTGMessage(
  chat_id: string,
  telegram_bot_id: string,
  message: string
) {
  await axios.post(
    `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
    {
      chat_id: chat_id,
      text: message,
    }
  )
}
