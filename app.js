const http = require("http")

http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  // window.name 的值在浏览器中必须是字符串
  response.write(`<script>window.name = '{"name":"hanzichi","age":10}' </script>`)
  response.end()
}).listen(8888)