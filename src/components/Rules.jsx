import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { ccaArticles, ccaPunishments, crArticles, crPunishments } from "./data/arrays"

function RulesSection({ label, text }) {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-slate-900 text-white p-4 rounded-2xl flex flex-col border border-slate-700 w-full">
            <div className="flex flex-row justify-between items-center cursor-pointer" onClick={() => setOpen(!open)}>
                <span className="flex-1 text-sm">{label}</span>
                <motion.span
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-slate-400 text-xs ml-2"
                >
                    ▼
                </motion.span>
            </div>
            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: 'auto',
                            opacity: 1,
                            transition: {
                                height: { duration: 0.3 },
                                opacity: { duration: 0.42 }
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                                opacity: { duration: 0.1 },
                                height: { duration: 0.3, delay: 0.1 }
                            }
                        }}
                        style={{ overflow: 'hidden' }}
                    >
                        
                        <div className="mt-3 pt-3 border-t border-slate-700 text-slate-300 text-xs leading-relaxed">
                            {text}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

function SectionHeader({ children }) {
    return (
        <div className="flex items-center gap-3 mb-2 mt-4 first:mt-0">
            <span className="text-xs font-semibold tracking-widest uppercase text-slate-500">{children}</span>
            <div className="flex-1 h-px bg-slate-700/60" />
        </div>
    )
}

const contentMap = {
    civ: { articles: crArticles, punishments: crPunishments },
    cca: { articles: ccaArticles, punishments: ccaPunishments },
}

export default function Rules() {
    const [regs, setRegs] = useState('civ')

    const { articles, punishments } = contentMap[regs]

    return (
        <div className={`bg-white/5 backdrop-blur-xl ${regs === 'civ' ? 'border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]' : 'border-rose-400/30 shadow-[0_0_20px_rgba(251,113,133,0.25),inset_0_1px_0_rgba(255,255,255,0.1)]'} py-4 rounded-2xl flex flex-col w-4/10 h-8/10`} >
           
            <div className="flex justify-center items-center border-b border-slate-700 pb-4 px-4">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 text-white w-full">
                    <div className="flex flex-row gap-1 bg-slate-900/80 backdrop-blur-sm p-1 rounded-2xl border border-slate-700/50">
                        {[
                            { label: 'Civilian', value: 'civ' },
                            { label: 'CCA', value: 'cca' },
                        ].map(({ label, value }) => (
                            <button
                                key={value}
                                onClick={() => setRegs(value)}
                                className="relative flex-1 px-4 py-2 rounded-xl text-sm font-medium"
                            >
                                {regs === value && (
                                    <motion.div
                                        layoutId="active-regs"
                                        className="absolute inset-0 bg-indigo-600 rounded-xl shadow-inner shadow-slate-900/50"
                                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                                    />
                                )}
                                <motion.span
                                    className="relative z-10"
                                    animate={{ color: regs === value ? '#ffffff' : '#94a3b8' }}
                                    transition={{ duration: 0.15 }}
                                >
                                    {label}
                                </motion.span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            
            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-2 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent custom-scroll">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={regs}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-2"
                    >
                        <SectionHeader>Articles</SectionHeader>
                        {articles.map((item) => (
                            <RulesSection key={item.label} label={item.label} text={item.text} />
                        ))}

                        <SectionHeader>Punishments</SectionHeader>
                        {punishments.map((item) => (
                            <RulesSection key={item.label} label={item.label} text={item.text} />
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}