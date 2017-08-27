import AV from '../lib/leancloud'
export default function (user) {
  var {id, attributes: {username}} = user || AV.User.current() || {attributes: {}}
  id = id || ''
  username = username || ''
  return {id, username}
}
