import SideBar from '@/components/SideBar'
import { pageTitleList } from '@/utils/pageTitleList'
import { Layout } from 'antd'
import { Outlet, useLocation } from 'react-router-dom'

const StaffLayout = () => {
  const location = useLocation()

  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <Layout>
          <div className="sticky top-0 left-0 overflow-auto h-full">
            <SideBar />
          </div>
          <Layout style={{ overflow: 'initial' }}>
            <h1 className="text-2xl text-dark-grey font-bold p-5 pl-0 pt-16">
              <span className="px-4 py-1 bg-secondary rounded-r-full w-full shadow-md">
                {pageTitleList.filter((page) => page.path === location.pathname)[0].title}
              </span>
            </h1>
            <Outlet />
          </Layout>
        </Layout>
      </Layout>
    </>
  )
}

export default StaffLayout
