const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

// In-memory scores — persists for the session, clears on server restart
let scores = {};

io.on('connection', (socket) => {
  // Send current leaderboard to whoever just connected
  socket.emit('leaderboard', sortedScores());

  socket.on('submit_score', ({ name, score }) => {
    // Allow re-submission (higher score wins)
    if (!scores[name] || score > scores[name].score) {
      scores[name] = { name, score, time: Date.now() };
    }
    io.emit('leaderboard', sortedScores());
  });

  socket.on('clear_scores', () => {
    scores = {};
    io.emit('leaderboard', []);
  });
});

function sortedScores() {
  return Object.values(scores).sort((a, b) => b.score - a.score);
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Lean Ninja Quiz running on port ${PORT}`));
