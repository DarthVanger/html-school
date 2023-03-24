const token = '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';

const githubLogins = {
  tony: 'antonpetlovanyi',
  'mister-smith': '19thanks96',
  johnny: 'Alianshark',
  dimon: 'Gehinom',
  mazerTim: 'mazerTim',
  valik_h: 'valik-h',
  napaleon: 'DarthVanger',
};

export function getGithubName(student) {
  console.log('student: ', student);
  return githubLogins[student];
}

export async function checkTimeCreated(student) {
  const githubName = getGithubName(student);
  const url = `https://raw.githubusercontent.com/DarthVanger/vangers/master/index.html`;

  const response = await fetch(url);
  const text = await response.text();
  console.log('file text: ', text);
}

export async function checkAppJsCreated(student) {
  const githubName = getGithubName(student);
  const url = `https://api.github.com/repos/${githubName}/vangers/git/trees/master?recursive=1`;

  try {
    const response = await requestGithub(url);
    const tree = response.tree;
    return tree.find(function(file) {
      return file.path === 'app.js';
    });
  } catch(e) {
    console.warn(e);
    return false;
  }
}

export async function checkFirstCommitCreated(student) {
  const githubName = getGithubName(student);
  const url = `https://api.github.com/repos/${githubName}/vangers/commits`;
  try {
    const commits = await requestGithub(url);
    console.log('commits: ', commits);
    return Boolean(commits);
  } catch(e) {
    console.warn(e);
    return false;
  }
}

export async function checkVangersRepoCreated(student) {
  const githubName = getGithubName(student);

  const url = `https://api.github.com/users/${githubName}/repos?per_page=100`;
  console.log('url: ' , url);

  const repos = await requestGithub(url);

  const vangersRepo = repos.find( function(repo) {
    return repo.name === 'vangers';
  });

  console.log('vangers repo: ', vangersRepo); 

  if (vangersRepo === undefined) { // no repo created
    console.log('studnet did not create vangers repo');
    return false;
  } else { // student created vangers repo!
    console.log('student created vangerrs repo');
    return true;
  }

}

async function requestGithub(url) {
  const response = await fetch(url, {
    headers: {
      'Authorization': 'Bearer ' + token,
    },
  });

  if (!response.ok) {
    const responseJson = await response.json();
    throw Error(responseJson?.message || response.status);
  }

  const responseJson = await response.json();
  console.log('Response from Github: ', responseJson);
  return responseJson;
}

