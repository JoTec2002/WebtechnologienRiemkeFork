var cookieSession = require('cookie-session')
var express = require('express')
let activeUser = [
    { login: "riemke", userid: 123, cookie: "hdfjhfkjdhfjksd", created: "" }
]
var app = express()

app.use(cookieSession({
    name: 'session',
    keys: ['ljfjdsf23123lkjs32r32r2r', 'weqweqwed34343grge']
}))

app.get('/', function (req, res, next) {
    // Update views
    req.session.views = (req.session.views || 0) + 1

    // Write response
    res.end(req.session.views + ' views')
})

app.listen(3000)