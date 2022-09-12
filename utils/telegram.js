"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendTGMessage = exports.sendEnvBotTGMessage = void 0;
const axios_1 = __importDefault(require("axios"));
function sendEnvBotTGMessage(message) {
    return __awaiter(this, void 0, void 0, function* () {
        if (process.env.TG_CHAT_ID && process.env.TG_BOT_ID)
            sendTGMessage(process.env.TG_CHAT_ID, process.env.TG_BOT_ID, message);
    });
}
exports.sendEnvBotTGMessage = sendEnvBotTGMessage;
function sendTGMessage(chat_id, telegram_bot_id, message) {
    return __awaiter(this, void 0, void 0, function* () {
        yield axios_1.default.post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
            chat_id: chat_id,
            text: message,
        });
    });
}
exports.sendTGMessage = sendTGMessage;
