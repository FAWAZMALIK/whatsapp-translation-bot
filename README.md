# WhatsApp Translation Bot

A Node.js-powered WhatsApp bot that detects the language of received messages and translates them between English and Malayalam. This bot uses `whatsapp-web.js` to interact with WhatsApp, `franc` for language detection, and `translate-google` for seamless translations. Designed to be efficient, the bot responds to messages intelligently, avoiding responses to its own messages to prevent infinite loops.

## Features

- **Language Detection**: Detects if the message is in English, Malayalam, or another language.
- **Automatic Translation**: Translates English messages to Malayalam and vice versa.
- **Smart Response**: Avoids responding to its own messages, ensuring no infinite loop.
- **Free Translation Option**: Uses Google Translate API for easy, free translations.

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/FAWAZMALIK/whatsapp-translation-bot
    cd whatsapp-translation-bot
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Run the bot**:
    ```bash
    node index.js
    ```

4. **Scan QR Code**: When you start the bot, a QR code will appear in the terminal. Scan this QR code with WhatsApp Web to connect the bot to your account.

## Dependencies

- **whatsapp-web.js**: Library to interact with WhatsApp Web.
- **franc**: Detects the language of text.
- **translate-google**: Translates messages between English and Malayalam.
- **qrcode-terminal**: Generates QR code in the terminal for WhatsApp Web authentication.

## Usage

Once the bot is running, it will listen for incoming messages and:
- Detect the language using `franc`.
- Translate English messages to Malayalam and reply, and vice versa for Malayalam messages.
- Skip replies to messages not in English or Malayalam.

## Notes

- To customize the bot for other languages, simply adjust the language codes in the `index.js` file.
- Ensure you’re using Node.js v16 or later.

## License

MIT License. See `LICENSE` file for details.
