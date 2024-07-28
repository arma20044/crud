import Logoutpage from "@/components/logoutpage";
import Sidebar from "@/components/Sidebar";
import Image from "next/image"

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <main>


        <div className="flex">

        


            

                <Sidebar/>

            

                <div className="p-2 w-full text-slate-900 border-red-500 border-t-white">
                    {
                        children
                    }
                </div>


                <script src="https://unpkg.com/@popperjs/core@2"></script>
                <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>



         

            </div>
        </main>
    );
}