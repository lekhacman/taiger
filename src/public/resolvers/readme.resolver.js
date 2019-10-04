ReadmeResolver.$inject = ['githubApi', '$stateParams'];
export function ReadmeResolver(githubApi, $stateParams) {
  const { username, repo } = $stateParams;
  return githubApi.markdown
    .getReadme(`${username}/${repo}`)
    .then(githubApi.markdown.render);
}
