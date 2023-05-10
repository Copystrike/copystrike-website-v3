import type { NextPage } from 'next'
import Link from 'next/link'
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { ProjectCard } from '../libs/components/ProjectCard';
import { SocialMedia } from '../libs/components/SocialMediaIcons';


const Home: NextPage = () => {

  const [githubProfile, setGithubProfile]: any = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/users/Copystrike/repos?type=sources&sort=updated')
      .then(res => res.json())
      .then(data => setGithubProfile(data))
  }, []);

  return (
    <div className="flex flex-col sm:scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-300 dark:scrollbar-thumb-blue-100 dark:scrollbar-track-gray-700">
      <div className='mt-[23vh] px-2 text-center'>
        <h1 className='mb-1 text-3xl font-bold text-center md:text-4xl'>Hey, I&apos;m Nick.</h1>
        <p className='mt-2 md:text-lg font-lato'>As a passionate Fullstack engineer, I love spending my days immersed in the exciting world of tech and programming, constantly learning and exploring new ideas.</p>
        <div className='self-center mt-5 text-center'>
          <h1 className='text-xl italic font-light'>Ways to get in touch with me</h1>
          <SocialMedia />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center my-10'>
        <p className='mb-1 text-3xl font-bold text-center md:text-4xl capitalize'>Recent updated projects</p>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
          
            {githubProfile && !Array.isArray(githubProfile) &&
              (
                <div className='text-center text-gray-500 italic'>
                  <p>Looks like you&apos;ve made too many requests to the github API witch caused a rate limit error.</p>
                  <p>Try visiting this website again in 5 minutes to see all the projects.</p>
                </div>
              )
            }
          
            {githubProfile && Array.isArray(githubProfile) && githubProfile.filter((project: any) => project.fork == false).map((project: any, index: number) => {
              if (index <= 5) {
                return (<ProjectCard key={project.id} openIssues={project.open_issues_count} stargazers={project.stargazers_count} language={project.language} archived={project.archived} title={project.name} description={project.description} link={project.html_url} />)
              }
            })}

        </div>
        <div className='col-span-2 content-center flex justify-center pt-5'>
            <button className='bg-zinc-200 rounded-md p-2 font-bold flex items-center' onClick={() => window.open(process.env.NEXT_PUBLIC_GITHUB_PROFILE + "?tab=repositories", "_blank")}>Check all projects <ExternalLinkIcon /></button>
          </div>
      </div>
    </div>
  )
}

function ExternalLinkIcon() {
  return (<svg className="ml-1 h-3.5 w-3.5 text-black/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />  <polyline points="15 3 21 3 21 9" />  <line x1="10" y1="14" x2="21" y2="3" /></svg>)
}

export default Home
