#from aiohttp import web
import socketio
import time
import json
## creates a new Async Socket IO Server
sio = socketio.Client()
#sio.connect("https://web-control-game.herokuapp.com")
sio.connect("http://localhost:3000")
#mock data

true = True
while true:
    
    data_set = ['left','right','right','left','right','left','right','right','left','right','left']

    @sio.on('welcome')
    def on_message(data):
        print("I received a message, the message is {0}".format(data))
        for i in range(len(data_set)):
            time.sleep(1.5)
            sio.emit('message',data_set[i])


