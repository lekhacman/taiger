import * as R from 'ramda';

GithubApi.$inject = ['env', 'http'];
export function GithubApi(env, http) {
  const githubEnv = R.path(['vendor', 'github'], env);
  return {
    user: UserApi({ url: `${githubEnv.url}/users`, http }),
    markdown: Markdown({
      url: `${githubEnv.url}/markdown`,
      contentUrl: githubEnv.content,
      http,
    }),
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

function Markdown({ url, contentUrl, http }) {
  return { getReadme, render };

  function getReadme(repoPath) {
    return http
      .fetch(`${contentUrl}/${repoPath}/master/README.md`)
      .then(
        R.ifElse(R.prop('ok'), toText, R.always('Repo has no readme.md')),
        R.always('Error fetching readme.md liao!')
      );
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
      .then(toText, R.always('Render service unavailable at the moment!'));
  }

  function toText(res) {
    return res.text();
  }
}
