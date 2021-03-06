import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Homepage", href: "#", current: true },
  { name: "Feature", href: "#", current: false },
  { name: "Portfolio", href: "#", current: false },
  { name: "Resume", href: "#", current: false },
  { name: "Blog", href: "#", current: false },
  { name: "Contact", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navigation() {
  return (
    <div className="min-h-full">
      <Disclosure as="nav">
        {({ open }) => (
            <>
          <div className="">
            <div className="flex items-center justify-between h-24">
            {/* Left section */}
              <div className="flex items-center">
                {/* Logo Section */}
                <a href=""> 
                <div className="flex-row flex justify-start items-center">
                    <div className="bg-[url('/src/assets/images/avatarNT.JPG')] bg-cover bg-center bg- h-14 w-14 rounded-full ring-2 ring-offset-2 ring-offset-slate-400"></div>
                  {/* <span className="text-slate-400 ml-4 font-bold tracking-widest text-lg">NGHIATIEU</span> */}
                </div>
                </a>
                
                {/* Menu Item Section */}
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-slate-800 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
             {/* Right section */}
              <div className="hidden md:block">
               
                <div className="ml-4 flex items-center md:ml-6">
                  {/* Notification Icon */}
                  <button
                    type="button"
                    className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notification</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true"></BellIcon>
                  </button>
                  {/* Profile Dropdown                 */}
                  <Menu as="div" className="ml-3 relative">
                    {/* Avatar */}
                    <div>
                      <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src={user.imageUrl}
                          alt=""
                        ></img>
                      </Menu.Button>
                    </div>
                    {/* Dropdown */}
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                    {({active}) => (
                                        <a
                                        href={item.href}
                                        className={classNames(
                                            active ? 'bg-gray-100'
                                            : '' , 'block px-4 py-2 text-sm text-gray-700'
                                        )}
                                        >
                                            {item.name}
                                        </a>
                                    )}
                                </Menu.Item>
                            ))}
                        </Menu.Items>
                    </Transition>

                  </Menu>
                </div>
              </div>
            <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true"></XIcon>
                    ) : (
                        <MenuIcon className="block h-6 w-6" aria-hidden="true"></MenuIcon>
                    )}
                </Disclosure.Button>
            </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3" >
                {navigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                        item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
            <div className="mt-3 px-2 space-y-1">
                {userNavigation.map((item) => (
                    <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                        {item.name}
                    </Disclosure.Button>
                ))}
            </div>
          </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Navigation;
