const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors');
const axios      = require('axios');
import Mailchimp from 'mailchimp-api-v3';

const apiKey = process.env.MAILCHIMPS_API_KEY;
const audienceId = process.env.AUDIENCE_ID;
const mailchimp = new Mailchimp(apiKey);

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/subscribe",  (req, res) => {
    res.send("Subscribe Page");
});

app.post('/subscribe', async(req, res) => {
    const {email: email_address} = req.body
      try{
        const response = await mailchimp.request({
          method: 'post',
          path: `/lists/${audienceId}/members`,
          body: {
            email_address,
            status: "subscribed"
          }
        })
        const { _links, ...result } = response
        res.status(result.statusCode).json(result)
      }catch(err){
        res.status(err.status).send(err.detail)
      }
  });

module.exports = {
    path: '/api',
    handler: app
};