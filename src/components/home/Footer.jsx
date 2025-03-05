import React from 'react'

const Footer = () => {
  return (
    <>
    {/* Footer */}
    <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-thin tracking-wider mb-6">
            <span className="text-2xl font-thin tracking-wider">
              <a href="/">
                ScaffoldX<span className="text-emerald-400 text-3xl">.</span>
              </a>
            </span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} ScaffoldX. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer