var redis = require('redis')
var client = redis.createClient()

client.set('hi', 'ni hao', redis.print)
client.get('hi', function(error, reply) {
  console.log(reply)
  client.quit()
})
