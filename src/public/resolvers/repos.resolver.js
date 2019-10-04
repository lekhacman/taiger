ReposResolver.$inject = ['githubApi', '$stateParams'];
export function ReposResolver(githubApi, $stateParams) {
  const { username } = $stateParams;
  return githubApi.user.getRepos(username);
}
