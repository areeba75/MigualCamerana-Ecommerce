import { useState } from "react";
import "./AdminSideBar.scss";
import { Link } from "react-router-dom";
import {
  MdOutlineShoppingBag,
  MdHomeFilled,
  MdArrowForwardIos,
} from "react-icons/md";
import { AiFillReconciliation } from "react-icons/ai";
import { GrUserManager } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoStorefront } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import React from "react";


const AdminSideBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  const checkDropdownOpen = (index: any) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClick = (index: any) => {
    setActiveIndex(index);
  };

  return (
    <section className="sidebarListStyle md:pl-5 md:pr-3 h-[95.6vh] bg-[#EBEBEB] overflow-auto ">
      <ul>
        {menuItems.map((item, idx) =>
          item.index === 8 ? (
            <div className="flex justify-between pr-1 my-2 relative md:right-[12px] text-black">
              <p>Sales channels</p>
              <span className="relative top-[6px] text-zinc-400">
                <MdArrowForwardIos />
              </span>
            </div>
          ) : item.index === 11 ? (
            <div className="flex justify-between pr-1 my-2 relative right-[12px]">
              <p>Add apps</p>
              <span className="relative top-[6px] text-zinc-400">
                <MdArrowForwardIos />
              </span>
            </div>
          ) : (
            <div className="py-[4px] pl-2">
              <Link to={`${item.route}`}>
                <li
                  className={`flex gap-2 py-1 px-3 hover:bg-[#f3f3f3] text-[#212529] text-lg font-semibold rounded-lg ${
                    activeIndex === item.activeIndex
                      ? "bg-active text-active"
                      : ""
                  }`}
                  onClick={() => {
                    handleClick(item.activeIndex);
                    checkDropdownOpen(item.index);
                  }}
                >
                  <span className="relative top-1 text-xg">
                    {item.IconBase}
                  </span>
                  <span>{item.title}</span>
                </li>
              </Link>
              {dropdownOpen === item.index && item.items && (
                <ul className="dropdown pl-4">
                  {item.items.map((subItem, subIdx) => (
                    <Link key={subIdx} to={subItem.route}>
                      <li
                        className={`text-[#75777d] hover:text-black my-[4px] py-1 px-3 hover:bg-[#f3f3f3] text-lg font-semibold rounded-lg ${
                          activeIndex === subItem.activeIndex
                            ? "bg-active text-active"
                            : ""
                        }`}
                        onClick={() => handleClick(subItem.activeIndex)}
                      >
                        {subItem.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          )
        )}
      </ul>
    </section>
  );
};

export default AdminSideBar;

const menuItems = [
  {
    title: "Home",
    route: "/admin",
    IconBase: <MdHomeFilled />,
    activeIndex: 0,
    index: 0,
  },
  {
    title: "Orders",
    route: "/admin/order",
    IconBase: <AiFillReconciliation />,
    activeIndex: 1,
    index: 1,
    // items: [
    //   { label: 'Drafts', route: '/order/new', activeIndex: 2 },
    //   { label: "Abandoned" , route: '/order/all', activeIndex: 3 }
    // ]
  },
  {
    title: "Products",
    route: "/admin/prooduct",
    IconBase: <MdOutlineShoppingBag />,
    activeIndex: 4,
    index: 2,
    items: [
      { label: "Collections", route: "/admin/prooduct/coollection", activeIndex: 5 },
      // {  route: '/product/collection/new', activeIndex: 33 },
      // { label: 'Inventory', route: '/product/inventory', activeIndex: 6 },
      // { label: 'Purchase orders', route: '/product/purchase-orders', activeIndex: 7 },
      // { label: 'Transfers', route: '/product/transfers', activeIndex: 8 },
      // { label: 'Gift Cards', route: '/product/gift-cards', activeIndex: 9 }
    ],
  },
  {
    title: "Customers",
    route: "/admin/customer",
    IconBase: <GrUserManager />,
    activeIndex: 10,
    index: 3,
    items: [
      // { label: 'Segments', route: '/customers/segments', activeIndex: 11 },
      // { label: 'Segments', route: '/customers/segments', }
    ],
  },
  // {
  //   title: 'Content',
  //   route: '/content',
  //   IconBase: <TfiGallery />,
  //   activeIndex: 12,
  //   index: 4,
  //   items: [
  //     { label: 'Metaobjects', route: '/content/metaobjects', activeIndex: 13 },
  //     { label: 'Files', route: '/content/files', activeIndex: 14 }
  //   ]
  // },
  {
    title: "Analytics",
    route: "/admin/analytics",
    IconBase: <SiGoogleanalytics />,
    activeIndex: 15,
    index: 5,
    // items: [
    //   { label: 'Reports', route: '/analytics/reports', activeIndex: 16 },
    //   { label: 'Live View', route: '/analytics/live-view', activeIndex: 17 }
    // ]
  },
  // {
  //   title: 'Marketing',
  //   route: '/marketing',
  //   IconBase: <HiCursorArrowRipple />,
  //   activeIndex: 18,
  //   index: 6,
  //   items: [
  //     { label: 'Campaigns', route: '/marketing/campaigns', activeIndex: 19 },
  //     { label: 'Automations', route: '/marketing/automations', activeIndex: 20 }
  //   ]
  // },
  {
    title: "Discounts",
    route: "/admin/discount",
    IconBase: <RiDiscountPercentLine />,
    activeIndex: 21,
    index: 7,
  },
  {
    index: 8,
    title: "Add apps",
    IconBase: <MdArrowForwardIos />,
  },
  {
    title: "Online Store",
    route: "/admin/blog-post",
    IconBase: <IoStorefront />,
    activeIndex: 24,
    index: 9,
    items: [
      { label: "Blog posts", route: "/admin/blog-post", activeIndex: 24, index: 9 },
      // { label: 'Pages', route: '/online-store/pages', activeIndex: 25 },
      // { label: 'Navigation', route: '/online-store/navigation', activeIndex: 26 },
      // { label: 'Preferences', route: '/online-store/preferences', activeIndex: 27 }
    ],
  },

  // {
  //   title: 'Point of Sale',
  //   route: '/point-of-sale',
  //   IconBase: <FaFileInvoiceDollar />,
  //   activeIndex: 28,
  //   index: 10,
  //   items: [
  //     { label: 'Staff', route: '/point-of-sale/staff', activeIndex: 29 },
  //     { label: 'Locations', route: '/point-of-sale/locations', activeIndex: 30 },
  //     { label: 'Settings', route: '/point-of-sale/settings', activeIndex: 31 }
  //   ]
  // },
  // {
  //   index: 11,
  //   title: 'Add apps',
  //   IconBase: <MdArrowForwardIos />,
  // },
  // {
  //   title: 'Add Apps',
  //   route: '#',
  //   IconBase: <AiOutlinePlusCircle />,
  //   activeIndex: 32,
  //   index: 12,
  // },
];
