import React from "react";
import { HiOutlineBell, HiOutlineChatAlt } from "react-icons/hi";
import { Popover, Transition, Menu } from "@headlessui/react";
import { Fragment } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-between items-center p-2 w-full">
        <div>
          <input
            className="w-[200px] h-8 rounded-lg p-2"
            type="text"
            placeholder="search items"
          />
        </div>
        <div className="flex justify-center flex-row items-center gap-2">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="p-2 text-black hover:text-white duration-100 inline-flex items-center focus:outline-none">
                  <i className="text-2xl font-bold">
                    <HiOutlineChatAlt />
                  </i>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute  bg-white right-5 p-2 rounded-lg w-[300px] shadow-lg">
                    <div>
                      <strong>Messages</strong>
                    </div>
                    <div>Pakistan is the king</div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button className="p-2 text-black hover:text-white duration-100 inline-flex items-center focus:outline-none">
                  <i className="text-2xl font-bold">
                    <HiOutlineBell />
                  </i>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute  bg-white right-5 p-2 rounded-lg w-[300px] shadow-lg">
                    <div>
                      <strong>Notifications</strong>
                    </div>
                    <div>Pakistan is the king</div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
          <Menu as="div" className="relative">
            <div>
              <Menu.Button className="bg-black w-10 h-10 rounded-full focus:right-2">
                <span className="sr-only">Open User menu</span>
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-no-repeat bg-center"
                  style={{
                    background: 'url("https://source.unsplash.com/80x80?face")',
                  }}
                >
                  <span className="sr-only">Muhammad Zahid</span>
                </div>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className=" flex flex-col items-start absolute origin-top-right z-10 mt-1 w-48 right-0 bg-white rounded-lg shadow-lg p-2">
                <Menu.Item>
                  {({ active }) => (
                   <button onClick={() => navigate("/profile")} className="font-semibold hover:p-2 hover:bg-slate-100 p-1 rounded-lg duration-100">
                      Muhammad Zahid
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => navigate("/setting")} className="font-semibold hover:p-2 hover:bg-slate-100 p-1 rounded-lg duration-100">
                      Setting
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button onClick={() => navigate("/signout")} className="font-semibold hover:p-2 hover:bg-slate-100 p-1 rounded-lg duration-100">
                      Sign Out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
