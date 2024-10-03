
// import { useState } from "react";
// import { FaCheck } from "react-icons/fa";

// interface DropdownItem {
//   id: number;
//   label: string;
//   subItems: SubItem[];
// }

// interface SubItem {
//   id: number;
//   label: string;
// }

// const BlogOrganizationBlog = () => {
//   const [inputVlue, setInputVlue] = useState<string>("");
//   const [selectdItem, setSelectdItem] = useState<number | null>(null);
//   const [selectedSubItem, setSelectedSubItem] = useState<number | null>(null);
//   const [isDropdwnOpen, setIsDropdwnOpen] = useState<boolean>(false);
//   const [expandedItemId, setExpandedItemId] = useState<number | null>(null);

//   const dropdownItems: DropdownItem[] = [
//     { id: 1, label: "Blog", subItems: [{ id: 101, label: "News" }] },
//     { id: 2, label: "Action", subItems: [{ id: 102, label: "Create new Blog" }] },
//   //   { id: 3, label: "Option 3", subItems: [{ id: 103, label: "Sub Option 3.1" }] },
//   ];

//   const handleInputChang = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setInputVlue(event.target.value);
//     setIsDropdwnOpen(true);
//   };

//   const handleDropdownClik = (items: DropdownItem) => {
//     setExpandedItemId(expandedItemId === items.id ? null : items.id); // Toggle sub-items
//     setSelectdItem(items.id);
//   };

//   const handleSubItemClik = (subItem: SubItem) => {
//     setInputVlue(subItem.label);
//     setSelectedSubItem(subItem.id);
//     setIsDropdwnOpen(false);
//   };
//   return (
//    <section className="">
//          <div className="relative w-[200px] px-2">
//         <label className="text-base p-2" htmlFor="">Blog</label>
//       <input
//         type="text"
//         className="w-full p-2 border border-black rounded-lg"
//         value={inputVlue}
//         onChange={handleInputChang}
//         onClick={() => setIsDropdwnOpen(!isDropdwnOpen)}
//         placeholder="Select an option"
//       />
//       {isDropdwnOpen && (
//         <ul
//         className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg"
//         >
//           {dropdownItems.map((item) => (
//             <li key={item.id} style={{ padding: "8px" }}>
//               <div
//                 onClick={() => handleDropdownClik(item)}
//                 className={`p-2 font-semibold cursor-pointer flex justify-between hover:rounded-lg hover:bg-gray-200 ${selectdItem === item.id ? "bg-gray-200" : "bg-white"}`}
//               >
//                 {item.label}
//                 {selectdItem === item.id && <FaCheck />}
//               </div>
//               {expandedItemId === item.id && (
//                 <ul
//                 className="list-none p-0 m-0 mt-2 border-l rounded-lg border"
//                 >
//                   {item.subItems.map((subItem) => (
//                     <li
//                       key={subItem.id}
//                       onClick={() => handleSubItemClik(subItem)}
//                       className={`p-2 pl-6 cursor-pointer flex justify-between hover:rounded-lg hover:bg-gray-200 ${selectedSubItem === subItem.id ? "bg-gray-200" : "bg-white"}`}
//                     >
//                       {subItem.label}
//                       {selectedSubItem === subItem.id && <FaCheck />}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//    </section>
//   )
// }

// export default BlogOrganizationBlog
