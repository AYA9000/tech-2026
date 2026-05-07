# Team 6 7

A social online multiplayer game where players from around the world can create characters, match with others, and participate in various activities together with chat and voice communication.

## Features

- **195+ Countries** with flags to choose from
- **150+ Official Languages**
- **30+ Activities** across 3 categories:
  - Careers (12 activities): Sushi chef, firefighter, doctor, construction worker, etc.
  - Culture (10 activities): Tango, origami, calligraphy, flamenco, folk dance, etc.
  - Hobbies (12 activities): Football, guitar, painting, baking, fishing, etc.
- **Character Selection**: Browse and choose from 20 different character variations
- **Real-time Chat**: Communicate with other players in activity rooms
- **Voice Chat**: Talk to other players using WebRTC
- **Profile System**: Save your character and statistics
- **Matchmaking**: Automatically match with other players for activities

## How to Run

### Option 1: Direct File Opening (Simplest)
1. Open the folder in your file explorer
2. Double-click on `index.html`
3. The game will open in your default web browser

### Option 2: VS Code Live Server (Recommended)
1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. The game will open at `http://127.0.0.1:5500/index.html`

### Option 3: Python Simple HTTP Server
1. Open a terminal/command prompt in the project folder
2. Run: `python -m http.server 8000`
3. Open your browser and go to: `http://localhost:8000/index.html`

### Option 4: Node.js HTTP Server
1. Install http-server globally: `npm install -g http-server`
2. Run in the project folder: `http-server -p 8000`
3. Open your browser and go to: `http://localhost:8000/index.html`

## Firebase Setup (Required for Multiplayer)

To enable online multiplayer features, you need to set up Firebase:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Realtime Database
4. Get your Firebase configuration
5. Update `firebase-config.js` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

6. Download Firebase SDK and place in `lib/firebase.js`

## Project Structure

```
Tech 2026/
├── index.html              # Registration page
├── game.html               # Main menu
├── activity.html           # Activity room
├── style.css               # Global styles
├── data/
│   ├── countries.js        # 195+ countries
│   ├── languages.js        # 150+ languages
│   └── activities.js       # 30+ activities
├── modules/
│   ├── auth.js             # Account system
│   ├── avatar.js           # Avatar generation
│   ├── matchmaking.js      # Matchmaking system
│   ├── chat.js             # Chat system
│   ├── voice.js            # Voice chat (WebRTC)
│   └── game.js             # Game logic
├── lib/
│   ├── firebase.js         # Firebase SDK
│   └── peerjs.min.js       # PeerJS for WebRTC
└── firebase-config.js      # Firebase configuration
```

## How to Play

1. **Create Profile**
   - Enter username and age
   - Select your country and language
   - Choose your gender
   - Browse and select a character from the carousel
   - Click "Save & Start"

2. **Main Menu**
   - Click "Find Activity" to join a game
   - View your statistics
   - Change settings

3. **Choose Activity**
   - Select from Careers, Culture, or Hobbies
   - Click "Join" on an activity
   - Wait for other players to join

4. **Activity Room**
   - Chat with other players
   - Use voice chat (microphone)
   - Complete activities together
   - Earn points and track statistics

## Character Selection

When creating your profile:
- Scroll horizontally through 20 different character variations
- Click on any character to select it
- The selected character will have a blue border
- Use the arrow buttons to navigate

## Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Supported (responsive design)

## Troubleshooting

**Microphone not working?**
- Check browser permissions
- Ensure you're using HTTPS or localhost
- Try refreshing the page

**Can't see other players?**
- Make sure Firebase is properly configured
- Check your internet connection
- Try refreshing the page

**Avatars not loading?**
- Check your internet connection
- DiceBear API might be temporarily unavailable
- Try refreshing the page

## Development

To add new activities:
1. Edit `data/activities.js`
2. Add new activity object to the appropriate array
3. Define mechanics in the `mechanics` property
4. Implement game logic in `modules/game.js`

## Credits

- **DiceBear** - Avatar generation API
- **FlagCDN** - Country flags
- **Firebase** - Real-time database and authentication
- **PeerJS** - WebRTC for voice chat

## License

This project is open source and available for educational purposes.

## Support

For issues or questions:
- Check the troubleshooting section
- Review the code comments
- Test with different browsers

Enjoy the game!
