import * as R from 'ramda';

export function newHttp(_fetch, _window) {
  const METHOD = R.compose(
    Object.freeze,
    R.fromPairs,
    R.map(method => [method, method])
  )(['GET', 'POST']);

  return {
    get,
    post,
    fetch: _fetch.bind(_window),
    METHOD,
  };

  function get(url) {
    return _fetch(url).then(toJson);
  }

  function post(url, data) {
    return _fetch(url, {
      method: METHOD.POST,
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
