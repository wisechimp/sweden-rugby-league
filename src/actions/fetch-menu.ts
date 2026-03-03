import nationalTeamMenu from '@/data/menu/national-team'
import clubTeams from '@/data/menu/club-teams'
import aboutMenu from '@/data/menu/about'

const fetchMenu = (menu: string) => {
  let menuData
  switch (menu) {
    case 'National Team':
      menuData = nationalTeamMenu
      break
    case 'Clubs':
      menuData = clubTeams
      break
    case 'About':
      menuData = aboutMenu
  }
  return menuData
}

export default fetchMenu
