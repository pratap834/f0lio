import { Project } from '@/types';

const GITHUB_USERNAME = 'pratap834';
const GITHUB_API = 'https://api.github.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Repos to exclude from display
const EXCLUDED_REPOS = [
  'pratap834', // Profile README repo
  'f0lio', // This portfolio repo (optional)
];

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  fork: boolean;
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

  try {
    const headers: HeadersInit = {
      'Accept': 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
    };

    // Add authorization header if token exists
    // Fine-grained tokens use the same Bearer format as classic tokens
    if (GITHUB_TOKEN) {
      headers['Authorization'] = `Bearer ${GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${GITHUB_API}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100&type=public&affiliation=owner`,
      {
        headers,
        signal: controller.signal,
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );

    if (!response.ok) {
      console.warn(`GitHub API responded with status ${response.status} ${response.statusText}. Using fallback.`);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forked repos and excluded repos
    return repos.filter(repo => 
      !repo.fork && 
      !EXCLUDED_REPOS.includes(repo.name.toLowerCase())
    );
  } catch (error) {
    console.warn('GitHub API fetch failed or timed out (offline or unreachable). Using local projects fallback.');
    return [];
  } finally {
    clearTimeout(timeoutId);
  }
}

export function convertGitHubRepoToProject(repo: GitHubRepo): Project {
  // Map common languages/topics to your tech stack
  const techStack = [
    repo.language,
    ...repo.topics.slice(0, 5)
  ].filter(Boolean) as string[];

  // Format repository name to title
  const title = repo.name
    .split(/[-_]/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    id: `github-${repo.id}`,
    title: title,
    description: repo.description || `A ${repo.language || 'code'} project`,
    longDescription: repo.description || `A ${repo.language || 'code'} project from my GitHub repository.`,
    thumbnail: `/images/projects/github-default.jpg`,
    tech: techStack.length > 0 ? techStack : [repo.language || 'Code'].filter(Boolean) as string[],
    github: repo.html_url,
    demo: repo.homepage || undefined,
    featured: repo.stargazers_count >= 5, // Feature repos with 5+ stars
    category: repo.language || 'Other',
  };
}

export async function getAllProjects(manualProjects: Project[]): Promise<Project[]> {
  try {
    const githubRepos = await fetchGitHubRepos();
    const githubProjects = githubRepos.map(convertGitHubRepoToProject);
    
    // Get GitHub URLs from manual projects to avoid duplicates
    const manualGithubUrls = new Set(
      manualProjects.map(p => p.github).filter(Boolean)
    );
    
    // Filter out GitHub projects that are already in manual projects
    const uniqueGithubProjects = githubProjects.filter(
      gp => !manualGithubUrls.has(gp.github)
    );
    
    // Return manual projects first (higher priority), then GitHub projects
    return [...manualProjects, ...uniqueGithubProjects];
  } catch (error) {
    console.warn('Error in getAllProjects, returning manual projects fallback:', error);
    return manualProjects;
  }
}
