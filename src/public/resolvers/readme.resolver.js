ReadmeResolver.$inject = ['githubApi', '$stateParams'];
export function ReadmeResolver(githubApi, $stateParams) {
  const { username, repo } = $stateParams;
  const { getReadme, render } = githubApi.markdown;
  return getReadme(`${username}/${repo}`).then(render);
}
