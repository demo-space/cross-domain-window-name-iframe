# window.name + iframe 跨域 demo

```bash
$ npm install
$ npm run server
$ npm run client
```

然后打开 <http://localhost:1234>，控制台查看。<http://localhost:8888> 模拟后台接口返回，可以打开查看数据返回的形式

跨域原理：[window.name](https://developer.mozilla.org/en-US/docs/Web/API/Window/name) 的值不是一个普通的全局变量，**而是当前窗口的名字**。window.name 的神奇之处在于它的值在不同的页面，甚至不同的域名加载后依然存在

假设 index.html 页面请求远端服务器的数据，我们在该页面下新建一个 iframe 标签，该 iframe 的 src 属性指向服务器文件地址（利用 iframe 标签的跨域能力)，服务器文件里设置好 window.name 的值（也就是该 iframe 的 contentWindow 的 name 值），然后在 index.html 里读取该 iframe 的 window.name 值（用 iframe.contentWindow.name 去获取）

但是这样报跨域错误。规定如果 index.html 页面和和该页面里的 iframe 框架的 src 如果不同源，则也无法操作框架里的任何东西，所以就取不到 iframe 框架的 name 值了。既然要同源，那就换个 src 去指，前面说了无论怎样加 window.name 值都不会变化（即如果改变 iframe 的 src 值，iframe.contentWindow.name 值都不会变化），于是我们在 index.html 相同目录下，可以新建个 proxy.html 的空页面（经测试，指向 about:blank 也是可以的）

必不可少的条件：

* iframe 的跨域能力
* iframe.contentWindow.name 值在文档刷新后依旧不变
