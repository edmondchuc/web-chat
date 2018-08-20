# Angular Chat App

## Dependencies
* `npm install express`
* `npm install angular`
* `npm install socket.io`

## Angular Components
* `ng generate service socket`

## Socket.IO Bug
* In `polyfill.ts`, add:
```javascript
(window as any).global = window;
```

## References
* https://codingblast.com/chat-application-angular-socket-io/
