// import * as R from 'ramda';

export function newHttp(_fetch) {
  return {
    get,
    post,
  };

  function get(url) {
    return _fetch(url).then(toJson);
  }

  function post(url, data) {
    return _fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      body: JSON.stringify(data),
    }).then(toJson);
  }

  function toJson(res) {
    return res.json();
  }
}
