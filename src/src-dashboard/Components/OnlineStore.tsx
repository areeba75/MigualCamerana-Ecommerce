// import { useState } from "react";
// import { FaCheck } from "react-icons/fa";



// interface DropdownItam {
//     id: number;
//     label: string;
// }

// const OnlineStore = () => {
//     const [inputVaalu, setInputVaalu] = useState<string>("");
//     const [selectedItam, setSelectedItam] = useState<number | null>(null);
//     const [isDropdownOpan, setIsDropdownOpan] = useState<boolean>(false);

//     const droopdownItems: DropdownItam[] = [
//         { id: 1, label: "Default Blog Posts" },
//         // { id: 2, label: "Option 2" },
//         // { id: 3, label: "Option 3" },
//       ];
    
//       const haandleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setInputVaalu(event.target.value);
//         setIsDropdownOpan(true);
//       };
    
//       const handleDroopdownClick = (item: DropdownItam) => {
//         setInputVaalu(item.label);
//         setSelectedItam(item.id);
//         setIsDropdownOpan(false);
//       };
//   return (
//     <div className="relative">
//     <label className="text-sm" htmlFor="">Theme template</label>
// <input
//   type="text"
//   className="w-full p-1 border border-black rounded-lg"
//   value={inputVaalu}
//   onChange={haandleInputChange}
//   onClick={() => setIsDropdownOpan(!isDropdownOpan)}
//   placeholder="Select an option"
// />
// {isDropdownOpan && (
//   <ul
//   className="absolute top-full left-0 right-0 border bg-white z-[1000] p-0 m-0 list-none rounded-lg">
//     {droopdownItems.map((item) => (
//       <li
//         key={item.id}
//         onClick={() => handleDroopdownClick(item)}
//         className={`p-2 cursor-pointer flex justify-between font-semibold hover:bg-[#EBEBEB] ${ selectedItam === item.id ? "#f0f0f0" : "#fff"}`} >
//         {item.label}
//         {selectedItam === item.id && <FaCheck />}
//       </li>
//     ))}
//   </ul>
// )}
// </div>
//   )
// }

// export default OnlineStore
