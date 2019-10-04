import * as R from 'ramda';
import { GithubApi } from './github.api';

describe('Github API', function() {
  let http;
  let githubApi;

  beforeEach(function() {
    http = R.reduce((api, method) => R.assoc(method, jest.fn(), api), {}, [
      'get',
      'post',
      'fetch',
    ]);
    http.METHOD = {
      POST: 'POST',
    };
    githubApi = GithubApi(
      {
        vendor: {
          github: { url: 'http://localhost', content: 'http://localhost' },
        },
      },
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

  describe('Markdown API', function() {
    test('getReadme', async function() {
      expect.assertions(2);
      const readme = '# nand2teris';
      const response = {
        text: jest.fn().mockReturnValueOnce(readme),
        ok: true,
      };
      http.fetch.mockReturnValueOnce(Promise.resolve(response));

      const res = await githubApi.markdown.getReadme('lekhacman/nand2teris');
      expect(http.fetch).toHaveBeenCalledTimes(1);
      expect(res).toEqual(readme);
    });

    test('render', async function() {
      expect.assertions(2);
      const readme = '# nand2teris';
      const html = '<p><h1>nand2teris</h1></p>';
      const response = { text: jest.fn().mockReturnValueOnce(html), ok: true };
      http.fetch.mockReturnValueOnce(Promise.resolve(response));

      const res = await githubApi.markdown.render(readme);
      expect(http.fetch).toHaveBeenCalledTimes(1);
      expect(res).toEqual(html);
    });
  });
});
