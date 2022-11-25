import React from 'react'
import LogoNav from '../../components/common/LogoNav/LogoNav';
import Card from '../../components/getStarted/card'

const GetStarted = () => {
  return (
    <>
      <nav>
        <LogoNav />
      </nav>
      <main className="flex flex-col items-center my-20 mx-auto md:w-[40%] gap-10">
        <h1 className="font-bold md:text-5xl w-[80%] text-center">
          What type of service are you looking for?
        </h1>
        <p className="text-gray-600 text-2xl w-[70%] text-center">
          E-Tuze offers comprehensive treatment plans to meeet your mental
          health needs.
        </p>
        <Card
          bg="bg-green-100"
          title="Online Therapy"
          description="Get matched with a licensed therapist and start therapy online."
        >
          <svg
            role="img"
            ariaLabel="Imperfect circle with a chat icon"
            width="40"
            viewBox="0 0 47 47"
          >
            <title>Imperfect circle with a chat icon</title>
            <defs>
              <path
                d="M8.301 5.176c10.338-7.453 26-7.06 33.82 2.504 4.236 5.181 5.318 11.693 4.066 18.985-1.104 6.425-4.899 11.8-9.21 15.513-9.409 8.102-23.732 4.551-31.552-5.013-7.82-9.565-7.461-24.536 2.876-31.989z"
                id="a"
              ></path>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-302 -334) translate(302 334)">
                <mask fill="#fff">
                  <use xlinkHref="#a"></use>
                </mask>
                <use fill="#005368" xlinkHref="#a"></use>
              </g>
              <path
                d="M8.494 20.367a7.238 7.238 0 01-.28 2.692c-.183.61.02 1.27.516 1.679a1.646 1.646 0 001.77.202c1.62-.804 3.775-2.201 5.084-4.348h1.074c5.694 0 10.31-4.542 10.31-10.145 0-5.602-4.616-10.144-10.31-10.144h-6.002C5.382.303.959 4.22.404 9.38c-.555 5.16 2.937 9.9 8.094 10.987h-.004zm2.158-18.36h6.02c4.738 0 8.578 3.779 8.578 8.44 0 4.662-3.84 8.441-8.578 8.441h-1.58a.868.868 0 00-.765.457c-1.022 1.912-2.899 3.183-4.385 3.963.333-1.237.4-2.529.198-3.793a.86.86 0 00-.731-.715c-4.44-.65-7.62-4.56-7.293-8.964.327-4.406 4.05-7.818 8.54-7.826l-.004-.004z"
                transform="translate(-302 -334) translate(302 334) translate(9.724 10.805)"
                fill="#FFF"
                fillRule="nonzero"
                stroke="#FFF"
                strokeWidth="0.5"
              ></path>
            </g>
          </svg>
        </Card>
        <Card
          bg="bg-violet-200"
          title="Couples Therapy"
          description="Relationships-centered therapy for couples and individuals."
        >
          <svg
            role="img"
            ariaLabel="Imperfect circle with two people"
            width="40"
            viewBox="0 0 47 47"
          >
            <title>Imperfect circle with two people</title>
            <defs>
              <path
                d="M8.301 5.176c10.338-7.453 26-7.06 33.82 2.504 4.236 5.181 5.318 11.693 4.066 18.985-1.104 6.425-4.899 11.8-9.21 15.513-9.409 8.102-23.732 4.551-31.552-5.013-7.82-9.565-7.461-24.536 2.876-31.989z"
                id="a"
              ></path>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-302 -682) translate(302 682)">
                <mask fill="#fff">
                  <use xlinkHref="#a"></use>
                </mask>
                <use fill="#1F4B95" xlinkHref="#a"></use>
              </g>
              <g
                transform="translate(-302 -682) translate(312 695)"
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.1599999"
              >
                <path d="M16.062 18.264v-2.006c0-2.216-1.816-4.013-4.055-4.013H4.909c-2.24 0-4.055 1.797-4.055 4.013v2.006"></path>
                <ellipse
                  cx="8.45806746"
                  cy="4.84278265"
                  rx="4.05555267"
                  ry="4.01259134"
                ></ellipse>
                <path d="M25.413 16.396v-1.59c0-1.759-1.453-3.183-3.245-3.183H16.49c-1.385 0-2.005.415-2.005 1.037"></path>
                <ellipse
                  cx="19.3292017"
                  cy="5.25787831"
                  rx="3.24444214"
                  ry="3.18240003"
                ></ellipse>
              </g>
            </g>
          </svg>
        </Card>
        <Card
          bg="bg-blue-100"
          title="Teens Therapy"
          description="Specialized therapy for teens and young adults."
        >
          <svg
            role="img"
            ariaLabel="Imperfect circle with a chat icon"
            width="40"
            viewBox="0 0 47 47"
          >
            <title>Imperfect circle with a chat icon</title>
            <defs>
              <path
                d="M8.301 5.176c10.338-7.453 26-7.06 33.82 2.504 4.236 5.181 5.318 11.693 4.066 18.985-1.104 6.425-4.899 11.8-9.21 15.513-9.409 8.102-23.732 4.551-31.552-5.013-7.82-9.565-7.461-24.536 2.876-31.989z"
                id="a"
              ></path>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-302 -334) translate(302 334)">
                <mask fill="#fff">
                  <use xlinkHref="#a"></use>
                </mask>
                <use fill="#414A91" xlinkHref="#a"></use>
              </g>
              <path
                d="M8.494 20.367a7.238 7.238 0 01-.28 2.692c-.183.61.02 1.27.516 1.679a1.646 1.646 0 001.77.202c1.62-.804 3.775-2.201 5.084-4.348h1.074c5.694 0 10.31-4.542 10.31-10.145 0-5.602-4.616-10.144-10.31-10.144h-6.002C5.382.303.959 4.22.404 9.38c-.555 5.16 2.937 9.9 8.094 10.987h-.004zm2.158-18.36h6.02c4.738 0 8.578 3.779 8.578 8.44 0 4.662-3.84 8.441-8.578 8.441h-1.58a.868.868 0 00-.765.457c-1.022 1.912-2.899 3.183-4.385 3.963.333-1.237.4-2.529.198-3.793a.86.86 0 00-.731-.715c-4.44-.65-7.62-4.56-7.293-8.964.327-4.406 4.05-7.818 8.54-7.826l-.004-.004z"
                transform="translate(-302 -334) translate(302 334) translate(9.724 10.805)"
                fill="#FFF"
                fillRule="nonzero"
                stroke="#FFF"
                strokeWidth="0.5"
              ></path>
            </g>
          </svg>
        </Card>
        <Card
          bg="bg-indigo-200"
          title="Psychiatry Service"
          description="Medication management and psychiatric services."
        >
          <svg
            role="img"
            ariaLabel="Imperfect circle with rx icon"
            width="40"
            viewBox="0 0 47 47"
          >
            <title>Imperfect circle with rx icon</title>
            <defs>
              <path
                d="M8.301 5.176c10.338-7.453 26-7.06 33.82 2.504 4.236 5.181 5.318 11.693 4.066 18.985-1.104 6.425-4.899 11.8-9.21 15.513-9.409 8.102-23.732 4.551-31.552-5.013-7.82-9.565-7.461-24.536 2.876-31.989z"
                id="a"
              ></path>
            </defs>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-302 -508) translate(302 508)">
                <mask fill="#fff">
                  <use xlinkHref="#a"></use>
                </mask>
                <use fill="#DC684F" xlinkHref="#a"></use>
              </g>
              <path
                d="M15.974 27.648c3.868 0 7.295-1.88 9.42-4.777a11.621 11.621 0 002.254-6.897c0-6.447-5.226-11.673-11.674-11.673-6.447 0-11.673 5.226-11.673 11.673 0 3.058 1.176 5.842 3.1 7.923a11.642 11.642 0 008.573 3.751z"
                transform="translate(-302 -508) translate(302 508) translate(7 7) rotate(-60 15.974 15.974)"
                stroke="#FFF"
                strokeDasharray="68.19839681396479"
                strokeLinecap="round"
                strokeWidth="1.84319974"
              ></path>
              <path
                d="M14.51 9.216c.95 0 1.702.227 2.255.68.763.62 1.145 1.416 1.145 2.389 0 .973-.382 1.77-1.145 2.389-.344.285-.74.478-1.19.58l-.17.033 2.382 2.724 1.474-1.839a.184.184 0 01.143-.069h1.41a.307.307 0 01.232.509l-2.23 2.576 2.509 2.96a.307.307 0 01-.242.506l-1.35-.033a.184.184 0 01-.138-.067l-1.808-2.188-1.811 2.189a.184.184 0 01-.138.066l-1.346.033a.307.307 0 01-.241-.506l2.448-2.877-3.268-3.917h-.713v3.416a.83.83 0 01-1.655.08l-.004-.08v-8.325c0-.648.501-1.179 1.137-1.226l.092-.003h2.221zm-.084 1.576h-1.708v2.986h1.708c.642 0 1.106-.144 1.394-.431.287-.288.43-.642.43-1.062 0-.42-.143-.774-.43-1.062-.264-.263-.676-.406-1.237-.428l-.157-.003z"
                fill="#FFF"
                fillRule="nonzero"
                transform="translate(-302 -508) translate(302 508) translate(7 7)"
              ></path>
            </g>
          </svg>
        </Card>
      </main>
    </>
  )
}

export default GetStarted
