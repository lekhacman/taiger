ReposResolver.$inject = ['githubApi', '$stateParams'];
export function ReposResolver(githubApi, $stateParams) {
  return githubApi.user.getRepos($stateParams.username);
}
