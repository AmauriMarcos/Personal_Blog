/* const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const axios      = require('axios');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) =>{
    res.send("hello world");
});

app.post("/", function (req, res) {
  
    const data = {
        members: [
            {
                email_address: req.body.email,
                status: 'subscribed',
                merge_fields: {
                    EMAIL: req.body.email
                }
            }
        ]
    }   


    const jsonData = JSON.stringify(data);
   
    const url = `https://us20.api.mailchimp.com/3.0/lists/${process.env.AUDIENCE_ID}`;

    const options = {
        method: "POST",
        auth: `blooming:${process.env.MAILCHIMPS_API_KEY}`
    }

    const request = https.request(url, options, function(response) {
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    })

    request.write(jsonData);
    request.end(); */

  /*   --data '{"name":"Freddie'\''s Favorite Hats","contact":{"company":"Mailchimp","address1":"675 Ponce De Leon Ave NE","address2":"Suite 5000","city":"Atlanta","state":"GA","zip":"30308","country":"US","phone":""},"permission_reminder":"You'\''re receiving this email because you signed up for updates about Freddie'\''s newest hats.","campaign_defaults":{"from_name":"Freddie","from_email":"freddie@freddiehats.com","subject":"","language":"en"},"email_type_option":true}' */
/* });

module.exports = {
    path: '/api/',
    handler: app
}; */