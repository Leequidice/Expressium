import React from 'react'

export default function Header() {
  return (
    <header className=" top-0 z-50 w-full bg-espresso text-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="text-xl">Espresso</span>
          </a>
          <nav className="flex items-center gap-4">
            <a
              className="px-3 py-1.5 rounded-md hover:bg-espresso-dark transition-colors"
              href="https://discord.gg/"
              target="_blank"
              rel="noreferrer"
              aria-label="Discord"
            >
              <span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M20.317 4.369A19.791 19.791 0 0016.558 3c-.201.363-.431.85-.591 1.23a18.27 18.27 0 00-4.933 0 12.43 12.43 0 00-.6-1.23 19.736 19.736 0 00-3.76 1.369C3.164 9.12 2.35 13.676 2.697 18.185a19.943 19.943 0 003.997 2.028c.325-.45.614-.93.86-1.436a12.9 12.9 0 01-1.356-.649c.116-.086.23-.175.34-.267a14.11 14.11 0 0012.542 0c.11.092.224.181.34.267-.44.248-.9.463-1.375.641.246.507.534.987.86 1.437a19.942 19.942 0 003.996-2.029c.33-4.288-.565-8.807-2.58-13.816zM9.861 15.568c-1.183 0-2.156-1.087-2.156-2.425 0-1.337.95-2.424 2.156-2.424 1.206 0 2.178 1.087 2.156 2.424 0 1.338-.95 2.425-2.156 2.425zm4.279 0c-1.183 0-2.156-1.087-2.156-2.425 0-1.337.95-2.424 2.156-2.424 1.206 0 2.178 1.087 2.156 2.424 0 1.338-.95 2.425-2.156 2.425z"/></svg>
            </a>
            <a
              className="px-3 py-1.5 rounded-md hover:bg-espresso-dark transition-colors"
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M21.543 7.104c.015.211.015.423.015.636 0 6.477-4.934 13.95-13.95 13.95-2.774 0-5.354-.81-7.524-2.208.387.045.759.06 1.161.06a9.86 9.86 0 006.108-2.102 4.93 4.93 0 01-4.6-3.418c.3.045.6.075.915.075.432 0 .864-.06 1.266-.165a4.925 4.925 0 01-3.949-4.83v-.06c.66.363 1.431.579 2.247.6a4.917 4.917 0 01-2.19-4.095c0-.915.24-1.77.66-2.511a13.98 13.98 0 0010.148 5.151 5.548 5.548 0 01-.12-1.125 4.924 4.924 0 018.514-3.366 9.71 9.71 0 003.12-1.185 4.93 4.93 0 01-2.16 2.724 9.86 9.86 0 002.835-.759 10.586 10.586 0 01-2.46 2.541z"/></svg>
            </a>
            <a
              className="px-3 py-1.5 rounded-md hover:bg-espresso-dark transition-colors"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.486 2 12.021c0 4.426 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.606-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.468-1.11-1.468-.908-.621.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.911.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.114-4.555-4.956 0-1.094.39-1.989 1.03-2.688-.103-.253-.447-1.272.098-2.65 0 0 .84-.27 2.75 1.028A9.56 9.56 0 0112 7.844a9.56 9.56 0 012.504.336c1.91-1.298 2.748-1.028 2.748-1.028.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.688 0 3.852-2.337 4.701-4.565 4.95.359.31.678.92.678 1.855 0 1.338-.012 2.415-.012 2.744 0 .267.18.58.688.48A10.02 10.02 0 0022 12.021C22 6.486 17.523 2 12 2z" clipRule="evenodd"/></svg>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}


