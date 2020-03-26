import React from 'react'

import Layout from '../components/layout'
import ClubCard from '../components/clubcard'
import BroncosLogo from '../images/kungsbackalogosmall.png'
import StagsLogo from '../images/skanestagslogo.png'
import KungarLogo from '../images/kungarlogo.jpg'
import clubsPageStyles from './clubs.module.css'

export default () => {
	const clubData = [
    {
      key: 1,
      clubName: "Kungsbacka Broncos",
      imgSrc: BroncosLogo,
      imgAlt: "The Kungsbacka Broncos logo",
      description:
        "Kungsbacka Broncos are a club based in the Gothenburg region.",
      clubLink: "https://www.facebook.com/KungsbackaRugbyClub/",
    },
    {
      key: 2,
      clubName: "Skåne Stags",
      imgSrc: StagsLogo,
      imgAlt: "The Skane Stags logo",
      description:
        "Skåne Stags are a rugby league club with players from the main cities in the south of Sweden.",
      clubLink: "https://www.skanestags.com",
    },
    {
      key: 3,
      clubName: "Stockholm Kungar",
      imgSrc: KungarLogo,
      imgAlt: "The Stockholm Kungar logo",
      description:
        "The Stockholm Kungar are the side representing the Swedish capital",
      clubLink: "https://www.facebook.com/stockholm.rl/",
    },
  ]

  return (
  	<Layout pageTitle="SRL Clubs">
			<div className={clubsPageStyles.clubsContainer}>
				{clubData.map(club => 
					<ClubCard
						key={club.key}
						clubName={club.clubName}
						imgSrc={club.imgSrc}
						imgAlt={club.imgAlt}
						description={club.description}
						clubLink={club.clubLink}
					/>)
				}
			</div>
    </Layout>
)}