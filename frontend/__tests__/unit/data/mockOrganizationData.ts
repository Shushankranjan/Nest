export const mockOrganizationData = {
  hits: [
    {
      objectID: 'org1',
      avatarUrl: 'https://avatars.githubusercontent.com/u/1234567?v=4',
      collaboratorsCount: 50,
      company: 'Test Company',
      createdAt: 1596744799,
      description: 'This is a test organization',
      email: 'org@example.com',
      followersCount: 1000,
      location: 'San Francisco, CA',
      login: 'test-org',
      name: 'Test Organization',
      publicRepositoriesCount: 2000,
      updatedAt: 1727390473,
      url: 'https://github.com/test-org',
    },
    {
      objectID: 'org2',
      avatarUrl: 'https://avatars.githubusercontent.com/u/7654321?v=4',
      collaboratorsCount: 75,
      company: 'Another Company',
      createdAt: 1496744799,
      description: 'Another test organization',
      email: 'another-org@example.com',
      followersCount: 2000,
      location: 'New York, NY',
      login: 'another-org',
      name: 'Another Organization',
      publicRepositoriesCount: 1500,
      updatedAt: 1727390473,
      url: 'https://github.com/another-org',
    },
  ],
  nbPages: 2,
}

export const mockOrganizationDetailsData = {
  organization: {
    avatarUrl: 'https://avatars.githubusercontent.com/u/1234567?v=4',
    collaboratorsCount: 50,
    company: 'Test Company',
    createdAt: 1596744799,
    email: 'org@example.com',
    followersCount: 1000,
    location: 'San Francisco, CA',
    login: 'test-org',
    name: 'Test Organization',
    updatedAt: 1727390473,
    url: 'https://github.com/test-org',
    stats: {
      totalRepositories: 25,
      totalContributors: 150,
      totalStars: 5000,
      totalForks: 1200,
      totalIssues: 300,
    },
  },
  topContributors: [
    {
      login: 'user1',
      name: 'User One',
      avatarUrl: 'https://avatars.githubusercontent.com/u/11111?v=4',
    },
    {
      login: 'user2',
      name: 'User Two',
      avatarUrl: 'https://avatars.githubusercontent.com/u/22222?v=4',
    },
    {
      login: 'user3',
      name: 'User Three',
      avatarUrl: 'https://avatars.githubusercontent.com/u/33333?v=4',
    },
  ],
  recentPullRequests: [
    {
      title: 'Test Pull Request 1',
      createdAt: 1727390000,
      url: 'https://github.com/test-org/test-repo-1/pull/1',
      author: {
        login: 'user1',
        avatarUrl: 'https://avatars.githubusercontent.com/u/11111?v=4',
      },
    },
    {
      title: 'Test Pull Request 2',
      createdAt: 1727380000,
      url: 'https://github.com/test-org/test-repo-2/pull/2',
      author: {
        login: 'user2',
        avatarUrl: 'https://avatars.githubusercontent.com/u/22222?v=4',
      },
    },
  ],
  recentReleases: [
    {
      name: 'Release v1.0.0',
      tagName: 'v1.0.0',
      publishedAt: 1727390000,
      url: 'https://github.com/test-org/test-repo-1/releases/tag/v1.0.0',
      repositoryName: 'test-repo-1',
      author: {
        login: 'user1',
        avatarUrl: 'https://avatars.githubusercontent.com/u/11111?v=4',
      },
    },
    {
      name: 'Release v2.0.0',
      tagName: 'v2.0.0',
      publishedAt: 1727380000,
      url: 'https://github.com/test-org/test-repo-2/releases/tag/v2.0.0',
      repositoryName: 'test-repo-2',
      author: {
        login: 'user2',
        avatarUrl: 'https://avatars.githubusercontent.com/u/22222?v=4',
      },
    },
  ],
  organizationRepositories: [
    {
      name: 'test-repo-1',
      url: 'https://github.com/test-org/test-repo-1',
      contributorsCount: 20,
      forksCount: 300,
      openIssuesCount: 50,
      starsCount: 1500,
      key: 'test-org/test-repo-1',
    },
    {
      name: 'test-repo-2',
      url: 'https://github.com/test-org/test-repo-2',
      contributorsCount: 15,
      forksCount: 200,
      openIssuesCount: 30,
      starsCount: 1000,
      key: 'test-org/test-repo-2',
    },
  ],
  recentIssues: [
    {
      title: 'Test Issue 1',
      createdAt: 1727390000,
      url: 'https://github.com/test-org/test-repo-1/issues/1',
      author: {
        login: 'user1',
        avatarUrl: 'https://avatars.githubusercontent.com/u/11111?v=4',
      },
    },
    {
      title: 'Test Issue 2',
      createdAt: 1727380000,
      url: 'https://github.com/test-org/test-repo-2/issues/2',
      author: {
        login: 'user2',
        avatarUrl: 'https://avatars.githubusercontent.com/u/22222?v=4',
      },
    },
  ],
  recentMilestones: [
    {
      author: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/33333?v=4',
        login: 'milestone-author1',
        name: 'Milestone Author 1',
      },
      title: 'v2.0.0 Release',
      openIssuesCount: 5,
      closedIssuesCount: 15,
      repositoryName: 'Project Repo 1',
      organizationName: 'OWASP',
      createdAt: '2025-03-01T10:00:00Z',
      url: 'https://github.com/OWASP/repo-one/milestone/1',
    },
  ],
}
