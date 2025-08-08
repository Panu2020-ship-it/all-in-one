# AllAiDesk 🧠 – All-in-One AI App (Made in India 🇮🇳)

An integrated interface for using the best of free AI tools (ChatGPT, Gemini, Perplexity, DeepSeek) with support for **Text**, **Image**, and **PDF** queries – built in a black theme UI.

---

### 👨‍💻 Developed By
**Pranil Raghunath Patil**  
IIT Patna, Maharashtra, India

---

### 🛠 Features

- 🎯 Unified Interface (Black Theme)
- 💬 Text, 🖼️ Image, 📄 PDF input supported
- 🔍 AI Models:
  - ChatGPT (Free - OpenAI)
  - Perplexity AI
  - Gemini (Free via Web)
  - DeepSeek AI

---

### ⚙️ How It Works (Architecture)

1. **Frontend**: React Native + Expo (dark theme)
2. **Backend**: Node.js (Express)
3. **AI APIs**:
   - Use open/free API access (or simulate via browser automation for web-only tools)
   - PDF/Image → text using OCR (e.g., Tesseract or PDF.js)

---

### 🚀 Installation & Run

```bash
# Clone repo
git clone https://github.com/pranilpatil/AllAiDesk.git
cd AllAiDesk

# Install dependencies
npm install   # or yarn install

# Start Expo development server
npx expo start
```

---

### 📱 App Structure

- **screens/**
  - TextScreen.tsx - For text-based AI interactions
  - ImageScreen.tsx - For image-based queries
  - PDFScreen.tsx - For PDF-based queries
  - SettingsScreen.tsx - For API key management
- **services/**
  - AI service abstractions for different providers
- **utils/**
  - Helper functions and utilities
- **server/**
  - Backend proxy for secure API access

---

### 🔑 API Keys Setup

In the Settings screen, you can input your API keys for:
- OpenAI (ChatGPT)
- Perplexity
- Gemini
- DeepSeek

Keys are stored securely using AsyncStorage.

---

Made with ❤️ in India 🇮🇳
