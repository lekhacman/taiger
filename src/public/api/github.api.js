import * as R from 'ramda';

GithubApi.$inject = ['env', 'http'];
export function GithubApi(env, http) {
  const githubEnv = R.path(['vendor', 'github'], env);
  return {
    user: newUserApi({ url: `${githubEnv.url}/users`, http }),
  };
}

function newUserApi({ url, http }) {
  return {
    getRepos,
  };

  function getRepos(username) {
    return http.get(`${url}/${username}/repos`);
  }
}
