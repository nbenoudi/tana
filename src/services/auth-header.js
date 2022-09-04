export default function authHeader() {
   
    if (localStorage.getItem("access_token")) {
      return { 'Authorization':'Bearer'+ localStorage.getItem("access_token").replace("\""," ").replace("\"",""),
      'Content-Type': 'text/html; charset=UTF-8',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    }

    } else {
      return {};
    }
  }
  /*

For Node.js Express back-end, please use x-access-token header like this:

  export default function authHeader() {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.accessToken) {
    // for Node.js Express back-end
    return { 'x-access-token': user.accessToken };
  } else {
    return {};
  }
}
*/