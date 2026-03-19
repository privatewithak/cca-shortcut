import { useState } from 'react'
import Rules from './components/Rules'
import { motion, AnimatePresence } from 'framer-motion'
import Codes from './components/Codes'
import Both from './components/Both'

function App() {
  const [mode, setMode] = useState('rules')

  return (
    <>
      <div className='bg-slate-950 w-screen h-screen relative'>
        <div className='flex flex-col items-center h-full gap-4 pt-8'>
          <div className='bg-white/5 backdrop-blur-xl border border-white/10 w-2/10 h-1.5/20 rounded-2xl p-4 text-white mt-8'>
            <div className='flex flex-row gap-1 bg-slate-900/80 backdrop-blur-sm p-1 rounded-2xl border border-slate-700/50'>
              {[
                { label: 'Regulations', value: 'rules' },
                { label: 'Codes', value: 'codes' },
                { label: 'Both', value: 'both' },
              ].map(({ label, value }) => (
                <button
                  key={value}
                  onClick={() => setMode(value)}
                  className='relative flex-1 px-4 py-2 rounded-xl text-sm font-medium'
                >
                  
                  {mode === value && (
                    <motion.div
                      layoutId='active-tab'
                      className='absolute inset-0 bg-indigo-600 rounded-xl shadow-inner shadow-slate-900/50'
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                
                  <motion.span
                    className='relative z-10'
                    animate={{
                      color: mode === value ? '#ffffff' : '#94a3b8',
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    {label}
                  </motion.span>
                </button>
              ))}
            </div>


          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="flex justify-center w-full h-8/10"
            >

          {mode === 'rules' && (<Rules />)}
          {mode === 'codes' && (<Codes />)}
              {mode === 'both' && (<Both />)}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </>
  )
}

export default App
