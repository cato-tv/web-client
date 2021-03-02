import * as React from 'react'

function MusicPlayerIcon(props) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11zM3 12a9 9 0 1018 0 9 9 0 00-18 0zm5-5a1 1 0 011.53-.848l8 5a1 1 0 010 1.696l-8 5A1 1 0 018 17V7zm2 1.804L15.113 12 10 15.196V8.804z"
        fill="#51DFD7"
      />
    </svg>
  )
}

export {MusicPlayerIcon}
