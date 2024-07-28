import Link from "next/link";
import { usePathname } from "next/navigation";


export interface ItemsList {
    path: string;
    icon: JSX.Element;
    title: string;
    subtitle: string;
}

export default function Items({ path, icon, title, subtitle }: ItemsList) {

    const current = usePathname()

    return (
        <li className="mb-1 group">
            <Link href={path} className={`flex font-semibold items-center py-2 px-4 text-gray-900 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 ${current === path ? 'bg-blue-300' : ''}`}>
                <i className="ri-home-2-line mr-3 text-lg"></i>
                <span className="text-sm">{title}</span>
            </Link>
        </li>
    );
}