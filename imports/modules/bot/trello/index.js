import { Picker } from 'meteor/meteorhacks:picker'
import { trelloStartup, trelloHandler } from '../../../modules/trello-webhook.js'

export default function Trello() {
  // Trello webhook
  let trelloChannel = Meteor.settings.trello.channelId

  Picker.route('/webhook-trello/', (params, req, res, next) => {
    let data = ''
    req.on('error', error => {
      console.error(error)
    }).on('data', chunk => {
      data += chunk
    }).on('end', () => {
      req.body = data
      trelloHandler(req, (error, result) => {
        if (error) {
          console.error('Trello: ' + error)
          res.statusCode = 403
          res.end('unauthorized\n')
        } else if (result === 'hook') {
          // new hook registered, do nothing for now
        } else if (result) bot.sendMessage(trelloChannel, result)
        res.end('ok')
      })
    })
  })

  trelloStartup((error, response) => {
    if (error) console.error('Trello: ' + error)
    else console.log('Trello: ' + response)
  })

  // Internal utility functions
  let getId = (server, nickname) => {
    let id
    _.forEach(server.members, (value) => {
      let nick = server.detailsOf(value.id).nick
      if (nick === nickname) {
        id = value.id
      }
    })
    return id || '404'
  }
}
