import React from 'react'
import { GithubIcon } from "@/logos/github";
const Hero = () => {
  return (
    <section className="relative mb-[8rem] h-screen py-16 text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"
    >
        <div className="fixed left-1/2 z-10 flex flex-col items-center">
        <p className="mb-2 text-xl font-light">
          <span className="font-medium">Projects</span> Beta
        </p>
        <p className="mb-8 text-center text-xs font-light text-text">
          by{" "}
          <a
            href="https://www.codesandbox.com"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            CodeSandbox
          </a>
          ,
          <br />
          rebuilt by{" "}
          <a
            href="https://www.frontend.fyi"
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            Frontend.FYI
          </a>
          </p>
          <h1 className="mb-12 text-center font-heading text-3xl leading-[1]">
          Development
          <br />
          reimagined.
        </h1>

        <a href="#" className="flex items-center text-lg text-primary">
          <GithubIcon className="mr-2 inline h-5 w-5" />
          Import GitHub project
        </a>

        </div>


    </section>
  )
}

export default Hero