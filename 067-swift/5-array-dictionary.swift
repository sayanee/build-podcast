// https://en.wikipedia.org/wiki/Internet_Protocol

var ip = [String]()
ip = [ "link", "internet", "transport", "application" ]

print(ip)
ip[3] = "app"
print(ip)

var layers = [
  "link": [ "Ethernet", "WiFi", "Bluetooth" ],
  "transport": [ "TCP", "UDP" ]
]

print(layers)
layers["app"] = [ "DNS", "HTTP", "SMTP" ]
print(layers)
