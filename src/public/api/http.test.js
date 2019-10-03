import { newHttp } from './http';

describe('http', function() {
  let http;
  let _fetch;
  beforeEach(function() {
    _fetch = jest.fn();
    http = newHttp(_fetch);
  });

  test('get', async function() {
    expect.assertions(2);
    const res = { json: jest.fn().mockReturnValueOnce('le') };
    _fetch.mockReturnValueOnce(Promise.resolve(res));
    const response = await http.get('andrew');
    expect(_fetch).toHaveBeenCalledWith('andrew');
    expect(response).toEqual('le');
  });

  test('post', async function() {
    expect.assertions(1);
    const res = { json: jest.fn().mockReturnValueOnce('le') };
    _fetch.mockReturnValueOnce(Promise.resolve(res));
    const response = await http.post('andrew');
    expect(response).toEqual('le');
  });
});
