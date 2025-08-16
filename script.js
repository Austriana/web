// switch ssl on local
let url = "wss://" + location.host;
if(location.host === 'localhost:3500'){
  url = "ws://" + location.host;
}
let ws = new WebSocket(url);

let toServerMsg = {
  zahl1: 1,
  zahl2: 2,
  zahl3: 3,
  zahl4: 4,
  zahl5: 5,
  zahl6: 6,
  zahl7: 7,
};

let send = document.getElementById('send');
send.addEventListener('click', () => {
  ws.send(JSON.stringify(toServerMsg));
});

ws.addEventListener('message', (msg) => {
  let fromServerMsg = msg.data;
  console.log(JSON.parse(fromServerMsg))
});