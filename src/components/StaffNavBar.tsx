
const StaffNavBar = () => {
    return (   
        <div className="container flex flex-col mx-auto bg-white">
            <aside className="group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out m-0 fixed z-40 inset-y-0 left-0 bg-white border-r border-r-dashed border-r-neutral-200 sidenav fixed-start loopple-fixed-start" id="sidenav-main">
                <div className="flex shrink-0 px-8 items-center justify-between h-[96px]">
        </div>

        <div className="flex items-center justify-between px-8 py-5">
            <div className="flex items-center mr-5">
            <div className="mr-2 ">
                <a href="javascript:void(0)" className="text-dark-grey text-lg block">Chaiyapat Meejeingerbell</a>
                <span className="font-thin text-dark-grey">Maid</span>
            </div>
            </div>
        </div>

        <div className="hidden lg:block dark:border-neutral-700/70 border-neutral-200"></div>

        <div className="relative pl-3 my-5 overflow-y-scroll">
            <div className="flex flex-col w-full font-medium">


            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/avaliable-room" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Avaliable Room</a>
                </span>
            </div>



            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/service" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Service</a>
                </span>
            </div>


            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/guest-today" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Guest Today</a>
                </span>
            </div>


            <div className="block pt-5 pb-[.15rem]">
                <div className="px-4 py-[.65rem]">
                <a href="/staff/booking" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Booking</a>
                </div>
            </div>


            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/payment" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Payment</a>
                </span>
            </div>



            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/service" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Service</a>
                </span>
            </div>


            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/product" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Products</a>
                </span>
            </div>


            <div>
                <span className="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]">
                <a href="/staff/assign-maid" className="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark">Assign Maid</a>
                </span>
            </div>

            </div>
            </div>
        </aside>
        </div>
    )
}

export default StaffNavBar ;