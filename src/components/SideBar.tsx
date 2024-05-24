import { pageTitleList } from '@/utils/pageTitleList'
import { Button, Layout, Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
const { Sider } = Layout

const SideBar = () => {
  const location = useLocation()
  return (
    <div className="h-screen overflow-visible animate-fade-right delay-300">
      <Sider width={250}>
        <div className="bg-white h-screen">
          <div className="pt-32">
            <div className="flex items-center p-4 gap-x-4">
              <img
                className="rounded-full"
                src="https://media1.tenor.com/m/4n5Pk8vDiGUAAAAC/snorlax-pokemon.gif"
                alt=""
                width={50}
                height={50}
              />
              <div className="mr-2">
                <span className="font-medium">Kabigon</span>
                <br />
                <span className="text-sm">Super Admin</span>
              </div>
            </div>
          </div>
          <Menu mode="inline">
            {pageTitleList
              .filter((item) => item.path.startsWith('/' + location.pathname.split('/')[1]))
              .map((item, index) => {
                return (
                  <Menu.Item key={index} icon={item.icon}>
                    <Link to={item.path}>{item.title}</Link>
                  </Menu.Item>
                )
              })}
          </Menu>
          <div className='p-9 bg-white'></div>
          <div className="w-full block absolute bottom-1 overflow-hidden">
            <div className="grid grid-cols-1 place-items-center">
              <Button onClick={() => {}} className="flex items-center border-2 border-white rounded-xl px-3 py-1 fixed bottom-10">
                Log out
              </Button>
            </div>
          </div>
        </div>
      </Sider>
    </div>
  )
}

export default SideBar
