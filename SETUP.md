# AllAiDesk Setup Guide

This document provides detailed instructions for setting up and running the AllAiDesk application.

## Project Structure

```
AllAiDesk/
├── assets/               # App icons and splash screens
├── screens/              # React Native screens
│   ├── HomeScreen.tsx    # Home screen
│   ├── TextScreen.tsx    # Text-based AI chat
│   ├── ImageScreen.tsx   # Image-based AI analysis
│   ├── PDFScreen.tsx     # PDF-based AI analysis
│   └── SettingsScreen.tsx # API key management
├── services/             # AI service abstractions
│   ├── aiService.ts      # Main AI service interface
│   ├── backendApi.ts     # Backend API client
│   ├── ChatGPTService.ts # ChatGPT implementation
│   ├── PerplexityService.ts # Perplexity implementation
│   ├── GeminiService.ts  # Gemini implementation
│   ├── DeepSeekService.ts # DeepSeek implementation
│   ├── ImageAIService.ts # Image analysis service
│   └── PdfAIService.ts   # PDF analysis service
├── utils/                # Utility functions
│   └── storage.ts        # API key storage
├── server/               # Backend server
│   ├── index.ts          # Express server setup
│   └── README.md         # Server setup guide
├── App.tsx               # Main app component
├── app.json              # Expo configuration
├── package.json          # NPM dependencies
└── tsconfig.json         # TypeScript configuration
```

## Frontend Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the Expo development server:
   ```bash
   npx expo start
   ```

3. Use the Expo Go app on your mobile device or run in a simulator/emulator.

## Backend Setup

See the [server/README.md](./server/README.md) file for detailed backend setup instructions.

## API Keys

To use the AI features, you'll need to obtain API keys for:

1. OpenAI (ChatGPT): https://platform.openai.com/
2. Perplexity: https://www.perplexity.ai/
3. Gemini: https://ai.google.dev/
4. DeepSeek: https://deepseek.ai/

Enter these keys in the Settings screen of the app.

## Development Notes

- The app uses a dark theme throughout
- All AI requests are proxied through the backend for security
- API keys are stored locally using AsyncStorage
- Image and PDF processing happens on the client when possible, with fallback to the backend

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Made with ❤️ in India 🇮🇳
