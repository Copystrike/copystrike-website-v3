import Link from "next/link";
import React from "react";

export const SocialMedia = () => {
    const [isMailOpen, setMailOpen] = React.useState(false);

    return (
        <div>
            <div className='grid grid-flow-col gap-x-5 justify-center mt-2'>
                <Link href={`${process.env.NEXT_PUBLIC_TWITTER_PROFILE}`} passHref>
                    <a target="_blank">
                        <svg className="h-8 w-8 text-black cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>
                    </a>
                </Link>

                <Link href={`${process.env.NEXT_PUBLIC_GITHUB_PROFILE}`} passHref>
                    <a target="_blank">
                        <svg className="h-8 w-8 text-black cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <path d="M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21" /></svg>
                    </a>
                </Link>

                <Link href={`${process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}`} passHref>
                    <a target="_blank">
                        <svg className="h-8 w-8 text-black cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>
                    </a>
                </Link>

                <button onClick={() => setMailOpen(!isMailOpen)} >
                    <svg className="h-8 w-8 text-black cursor-pointer" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <rect x="3" y="5" width="18" height="14" rx="2" />  <polyline points="3 7 12 13 21 7" /></svg>
                </button>
            </div>

            <div className='items-center self-center place-content-center flex'>
                <div className={`${!isMailOpen ? 'hidden' : ''} p-2 px-2 bg-zinc-400 mt-2 border-2 border-neutral-600 rounded-md text-left font-mono select-none`}>
                    Mail: <b className='select-all'>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</b><br />
                    Or mail me <a className='underline text-gray-600' href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>direct</a>.
                </div>
            </div>
        </div>
    )
}