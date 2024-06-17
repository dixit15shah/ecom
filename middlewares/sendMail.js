import {createTransport} from 'nodemailer';

const sendMail = async (email,subject,text) => {
    const transport = createTransport({
      host : 'smtp.gmail.com',
      port : 465,
      auth : {
        user : process.env.EMAIL,
        pass :  process.env.EMAIL_PASSWORD
      },  
    });
    
    
    await transport.sendMail({
        from : process.env.EMAIL,
        to : email,
        subject : subject,
        text : text,
        
    });
};

export default sendMail;