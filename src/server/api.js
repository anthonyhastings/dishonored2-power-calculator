const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 4321;

app.use(cors());

app.get('/characters', function (request, response) {
  setTimeout(function () {
    response.set('Content-Type', 'application/vnd.api+json');
    response.send({
      links: {
        self: `http://localhost:${PORT}/characters`
      },
      data: [
        {
          id: 'de2351c7-f1c3-409d-8973-414d5c37364c',
          name: 'Corvo',
          description: 'Legendary Royal Protector to the Empress, and figure of infamy from the time of the Rat Plague.'
        },
        {
          id: 'eb903f97-3dcb-44a5-ba95-d4b277d8c55a',
          name: 'Emily',
          description: 'Ruler of the Empire of the Isles, trained in stealth and combat by her father, Corvo Attano.'
        }
      ]
    });
  }, 1500);
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
