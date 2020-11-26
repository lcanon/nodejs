//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
const proxy = require('express-http-proxy');
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mongoURL = process.env.OPENSHIFT_MONGODB_DB_URL || process.env.MONGO_URL,
    mongoURLLabel = "";

app.use('/api', proxy('http://rest-goals-frontdev2ops.apps.cluster-7ff0.7ff0.example.opentlc.com/api'));
app.use(express.static('dist/ui'));

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});


app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
