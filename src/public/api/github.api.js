import * as R from 'ramda';

GithubApi.$inject = ['env', 'http'];
export function GithubApi(env, http) {
  const githubEnv = R.path(['vendor', 'github'], env);
  return {
    user: UserApi({ url: `${githubEnv.url}/users`, http }),
    markdown: Markdown({ url: `${githubEnv.url}/markdown`, http }),
  };
}

function UserApi({ url, http }) {
  return {
    getRepos,
  };

  function getRepos(username) {
    return http.get(`${url}/${username}/repos`);
  }
}

function Markdown({ url, http }) {
  return { getReadme, render };

  function getReadme(repoPath) {
    return http
      .fetch(`https://raw.githubusercontent.com/${repoPath}/master/README.md`)
      .then(toText);
  }

  function render(text) {
    return http
      .fetch(url, {
        method: http.METHOD.POST,
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        redirect: 'follow',
        body: JSON.stringify({ text }),
      })
      .then(toText);
  }

  function toText(res) {
    return res.text();
  }
}
