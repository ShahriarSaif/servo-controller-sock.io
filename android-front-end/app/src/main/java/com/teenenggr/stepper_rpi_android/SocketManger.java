package com.teenenggr.stepper_rpi_android;

import com.github.nkzawa.socketio.client.Socket;
import com.github.nkzawa.socketio.client.IO;

public class SocketManger {
    private static SocketManger sharedInstance = new SocketManger();
    private Socket mSocket;
    {
        try {
            mSocket = IO.socket("");
        }
        catch(Exception e) {

        }
    }
    
    SocketManger() {

    }
}