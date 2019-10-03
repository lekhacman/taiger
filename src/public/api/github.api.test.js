import * as R from 'ramda';
import { GithubApi } from './github.api';

describe('Github API', function() {
  let http;
  let githubApi;

  beforeEach(function() {
    http = R.reduce((api, method) => R.assoc(method, jest.fn(), api), {}, [
      'get',
      'post',
    ]);
    githubApi = GithubApi(
      { vendor: { github: { url: 'http://localhost' } } },
      http
    );
  });

  describe('User API', function() {
    test('getRepos', async function() {
      expect.assertions(2);

      http.get.mockReturnValueOnce(Promise.resolve({}));
      const res = await githubApi.user.getRepos('lekhacman');
      expect(http.get).toHaveBeenCalledTimes(1);
      expect(res).toEqual({});
    });
  });
});
