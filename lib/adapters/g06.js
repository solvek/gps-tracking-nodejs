/**
 * Created by solvek on 18.03.16.
 */

f = require("../functions");

exports.protocol="GPS06";
exports.model_name="G06";
exports.compatible_hardware=["G06/supplier"];

var adapter = function(device){
    if(!(this instanceof adapter)) return new adapter(device);

    this.device = device;

    /*******************************************
     PARSE THE INCOMING STRING FROM THE DECIVE
     You must return an object with a least: device_id, cmd and type.
     return device_id: The device_id
     return cmd: command from the device.
     return type: login_request, ping, etc.
     *******************************************/
    this.parse_data = function(data){
        console.log("Received data: "+data.toString('hex'));

        return {
            device_id: 'Dummy',
            cmd: 'nocmd',
            data: data.toString('hex')
        };
    };

    this.authorize = function(){

    };
}

exports.adapter = adapter;
