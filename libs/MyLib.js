
var MyLib = (function () {
    var MyLib = function (serverAddress) {        
        this.serverAddress = serverAddress;
        console.log("Constructor %s" , this.serverAddress);
    }

    MyLib.prototype.connect = function(streamToken) {
        console.log("Connecting to streamToken %s", streamToken);

        this.getInternalData();
    }

    MyLib.prototype.disconnect = function(streamToken) {
        console.log("Disconnecting to streamToken %s", streamToken);
    }

    MyLib.prototype.getInternalData = function() {
        console.log("getInternalData  %s", this.serverAddress);
    }
    return MyLib;
})();
 
export default MyLib;