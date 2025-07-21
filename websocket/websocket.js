// const WEBSOCKET_URL = process.env.WEBSOCKET_PUBLIC_API_URL;

// export const connectWebSocket = (onMessageCallback) => {
//     // const socket = new WebSocket('wss://ton-sous-domaine.trycloudflare.com/ws/socket-server/');
//     const socket = new WebSocket(`${WEBSOCKET_URL}/notifications/login/`);
  
//     socket.onopen = () => {
//       console.log('WebSocket connecté ✅');
//     };
  
//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       console.log('Message reçu 🔔:', data);
  
//       // Appeler le callback avec le message
//       onMessageCallback(data.message);
//     };
  
//     socket.onerror = (error) => {
//       console.error('Erreur WebSocket ❌', error);
//     };
  
//     socket.onclose = () => {
//       console.warn('WebSocket fermé 🔌');
//     };
  
//     return socket;
//   };
  