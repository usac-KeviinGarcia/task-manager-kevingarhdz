import app from './app'

app.listen(app.get('port'))

console.log('Server online', app.get('port'))