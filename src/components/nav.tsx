import { NavItem } from './nav-item'
import { Socials } from './socials'
const navlinks = [{
    name: 'About',
    path: '/about'
},
{
    name: 'Skills',
    path: '/skills'
},
{
    name: 'Projects',
    path: '/projects'
},
{
    name: 'Contact',
    path: '/contact'
}
]


export const Nav = () => {
  return (
    <div className='flex flex-col justify-between items-stretch text-center h-full pb-24 text-white'>
        <div className='text-white'>Logo</div>
        <nav>
            <ul className='flex flex-col'>
                {navlinks.map((link, index) => (
                    <NavItem key={index} {...link}/>
                ))}
            </ul>
        </nav>
        <Socials />
    </div>
  )
}
