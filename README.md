# Angular Chat App

## Demo
See the demo at http://www.edmondchuc.com

## Dependencies
* `npm install express`
* `npm install angular`
* `npm install socket.io`

## Angular Special Components
* `ng generate service socket`

## Socket.IO Bug
* In `polyfill.ts`, add:
```javascript
(window as any).global = window;
```

## References
* https://codingblast.com/chat-application-angular-socket-io/
