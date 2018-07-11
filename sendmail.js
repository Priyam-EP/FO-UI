const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;

var $ = jQuery = require('jquery')(window);

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
            user: 'kathirr007@gmail.com',
            clientId: '374024780934-uad11adl7jai1tbdg1if3o9ojkrcnc9g.apps.googleusercontent.com',
            clientSecret: 'ZYq8WFtlCTTXGTeKdQ26PVc8',
            refreshToken: '1/ga4TJEHaMUypgYHzZPiSNpE91JRHb-aUi--eDyeRr8M'
        })
    }
})

var
  devBuild = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production'),
  source = './',
  dest = devBuild ? 'builds/development/' : 'builds/production/';

var htmlPaths = [dest + 'mail-guest-confirm.html',
                 dest + 'mail-intern-info.html',
                 dest + 'mail-intern-cta.html',
                 dest + 'mail-contrib-info.html',
                 dest + 'mail-contrib-cta.html'
                 ],
    path,mailOptions;
    $(htmlPaths).each(function(i){
        path = htmlPaths[i];
        mailOptions = {
        from: 'Kathirr007 <kathirr007@gmail.com>',
        to: 'kathirr007@gmail.com, \
             kathirr007@aol.com, \
             kathirr007@hotmail.com, \
             kathirr007@yahoo.com, \
             kathirr007@yandex.com',
        subject: 'Test ' + i,
        text: 'Hello World!!',
        html: {path:''+path+''}
        // html: {path:'https://ep-test.contentplace.io/webapp-theme/fo/mail-intern-info.html'}

      }
      transporter.sendMail(mailOptions, function (err, res) {
          if(err){
              console.log(err);
          } else {
              console.log('Email Sent');
          }
      })
    });
    // for (i=0; i<htmlPaths.length; i++){
    // }

