import Link from "next/link"

type repoCardType = {
    title: string,
    description: string,
    link: string
    openIssues: number,
    stargazers: number,
    language: string,
    archived: boolean
}

export const ProjectCard = (props: repoCardType) => {
    return (
        <Link href={props.link} passHref>
            <div className='p-2 bg-gray-200 hover:bg-gray-300 w-64 rounded-md cursor-pointer'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-slate-600 grow'>{props.title}</h1>
                    <div className='flex items-center'>
                        <svg className="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="12" y1="8" x2="12" y2="12" />  <line x1="12" y1="16" x2="12.01" y2="16" /></svg>
                        <h2 className='mx-1'>0</h2>
                    </div>
                    <div className='flex items-center'>
                        <svg className="h-4 w-4 text-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>
                        <h2 className='mx-1'>0</h2>
                    </div>
                </div>
                <p className='text-slate-500 text-sm indent-0.5'>{props.description}</p>
            </div>
        </Link>
    )
}