exports.handler = function (context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse();

    // A Twilio call should begin with audio, to avoid delay
    twiml.say("The call is being placed!")

    //Customer waits while Carsales Telephony App requests the car code
    twiml.pause({ length: "11" });

    // Customer dials "1000#" which is a valid car code
    twiml.play({ digits: "1w0w0w0w#" });

    // Customer waits for the dealer to answer
    twiml.pause({ length: "15" });

    // Customer and seller are connected and can now talk
    twiml.say("Hello, I'm calling from Twilio. I'm testing case one. This means that the customer and dealer can talk on the phone.");

    // Customer waits while dealer speaks
    twiml.pause({ length: "20" })

    twiml.say("Twilio now ending the call. Bye.")

    // Call is ended
    callback(null, twiml);
};