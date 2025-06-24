import { Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/outline";
import mainPages from "./pages";

interface SidebarProps {
    activePage: string;
    onSelectPage: (label: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage, onSelectPage }) => {
    return (
        <aside className="w-64 bg-white border-r border-blue-600 p-4 flex flex-col">
            <nav className="flex-1 space-y-1">
                {mainPages.map(({ label, icon: Icon }) => (
                    <button
                        key={label}
                        onClick={() => onSelectPage(label)}
                        className={`w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium transition relative ${
                            activePage === label
                                ? "bg-blue-100 text-blue-700 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1 before:bg-blue-600"
                                : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                        <Icon className="h-5 w-5" />
                        <span>{label}</span>
                    </button>
                ))}
            </nav>

            <div className="border-t pt-4">
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
                    <Cog6ToothIcon className="h-5 w-5" />
                    <span>Settings</span>
                </button>
                <button className="w-full flex items-center space-x-3 px-4 py-2 rounded text-sm font-medium text-red-600 hover:bg-red-50 transition">
                    <PowerIcon className="h-5 w-5" />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;
