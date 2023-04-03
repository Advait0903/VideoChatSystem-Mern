const crypto = require('crypto')
const smsSid = process.env.SMS_SID;
const hashService  = require('./hash-service');
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid , smsAuthToken , {
    lazyLoading: true
});

class OtpService {

    async generateOtp() {
        const otp = crypto.randomInt(1000, 9999);
        return otp;
    }


    async sendBySms(phone,otp) {
        return await twilio.messages.create({
            to : phone,
            from: process.env.SMS_FROM_NUMBER,
            body: `Your Videochat OTP is ${otp}`,
        });
    };


    verifyOtp(hashedOtp, data) {
        
        let computedHash = hashService.hashOtp(data);
        return computedHash === hashedOtp;
        
    }
}

module.exports = new OtpService();