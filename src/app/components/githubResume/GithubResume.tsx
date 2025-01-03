
'use client'

import { useEffect, useState } from 'react';
import { Octokit } from "octokit";
import { RepositoryData } from '@/app/types';
import ProjectCard from './ProjectCard';

const GithubResume = () => {
  const [repositories, setRepositories] = useState<Array<RepositoryData>>([]);
  const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN,
    org: 'ORG',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const repos = await octokit.request('GET /users/Misho506/repos');

        const reposWithLanguages = await Promise.all(
          repos.data.map(async (repo: { name: string; description: string; html_url: string; }) => {
            const languagesResponse = await octokit.request(`GET /repos/Misho506/${repo.name}/languages`);
            return {
              name: repo.name,
              description: repo.description,
              link: repo.html_url,
              languages: Object.keys(languagesResponse.data)
            };
          })
        );

        setRepositories(reposWithLanguages);
      } catch (error) {
        console.error(error);
        setRepositories([]);
      }
    };

    fetchRepos();
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto p-4 mt-10">
      <h2 className="text-4xl mb-8">My GitHub Projects</h2>
      {repositories && repositories.length > 0 && repositories.map((repo, index) => (
        <ProjectCard project={repo} key={index} />
      ))}
    </section>
  );
};

export default GithubResume;
