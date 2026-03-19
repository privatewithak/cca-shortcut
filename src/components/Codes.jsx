import { codes } from "./data/arrays";


export default function Codes() {


    return (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 py-4 rounded-2xl flex flex-col w-4/10 h-8/10">
            <div className="flex justify-center items-center border-b border-slate-700 pb-4 px-4">
                <div className="bg-slate-900 backdrop-blur-xl border border-white/10 rounded-2xl p-3 text-white w-full">
                    <h2 className="text-center">Terminology</h2>
                </div>
            </div>
            <div className="flex-1 flex-col overflow-y-auto px-4 pt-4 pb-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent custom-scroll">
                {codes.map(code => (
                    <div key={code} className="mt-2 mb-2">
                        <div key={code} className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col border border-slate-700 w-full">{code}</div>
                        </div>
                ))}
                
            </div>
        </div>
    )
}