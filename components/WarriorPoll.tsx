'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PollData {
  question: string
  options: string[]
  totalVotes: number
}

const CURRENT_POLL: PollData = {
  question: "Do you regret voting for Trump?",
  options: [
    "Hell No - Would Do It Again Tomorrow",
    "Yes - I Got Played",
    "Didn't Vote - The System is Rigged Anyway"
  ],
  totalVotes: 0
}

export default function WarriorPoll() {
  const [hasVoted, setHasVoted] = useState(false)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [votes, setVotes] = useState<number[]>([0, 0, 0])
  const [showResults, setShowResults] = useState(false)

  // Load existing vote and vote counts from localStorage
  useEffect(() => {
    const storedVote = localStorage.getItem('warrior-poll-vote')
    const storedVotes = localStorage.getItem('warrior-poll-votes')
    
    if (storedVote) {
      setHasVoted(true)
      setSelectedOption(parseInt(storedVote))
      setShowResults(true)
    }
    
    if (storedVotes) {
      setVotes(JSON.parse(storedVotes))
    } else {
      // Initialize with some seed votes for demo
      setVotes([547, 89, 213])
    }
  }, [])

  const handleVote = (optionIndex: number) => {
    // Update votes
    const newVotes = [...votes]
    newVotes[optionIndex]++
    setVotes(newVotes)
    
    // Save to localStorage
    localStorage.setItem('warrior-poll-vote', optionIndex.toString())
    localStorage.setItem('warrior-poll-votes', JSON.stringify(newVotes))
    
    // Update state
    setSelectedOption(optionIndex)
    setHasVoted(true)
    
    // Animate to results
    setTimeout(() => setShowResults(true), 300)
  }

  const totalVotes = votes.reduce((sum, v) => sum + v, 0)
  const getPercentage = (optionIndex: number) => {
    if (totalVotes === 0) return 0
    return Math.round((votes[optionIndex] / totalVotes) * 100)
  }

  const handleShare = () => {
    const winningOption = votes.indexOf(Math.max(...votes))
    const winningText = CURRENT_POLL.options[winningOption]
    const percentage = getPercentage(winningOption)
    
    const shareText = `🔥 ${percentage}% of Jesse's Warriors chose: "${winningText}"\n\nWhat do YOU think? Vote now at jesseonfire.com` 
    
    // Open Twitter share
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`,
      '_blank'
    )
  }

  return (
    <div className="relative">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-fire-orange/10 to-transparent blur-3xl pointer-events-none" />
      
      <div className="relative">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-black mb-3 text-fire-orange uppercase tracking-wider">
            🔥 WARRIORS SOUND OFF
          </h2>
          <p className="text-xl text-gray-400">
            This Week's Question - Cast Your Vote
          </p>
        </motion.div>

        <div className="card-cinematic p-8 md:p-12 border-2 border-fire-orange/30 hover:border-fire-orange/50 transition-all duration-300">
          {/* Question */}
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-white">
            {CURRENT_POLL.question}
          </h3>

          {!showResults ? (
            /* Voting Interface */
            <div className="space-y-4">
              {CURRENT_POLL.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleVote(index)}
                  className="w-full p-6 text-left text-lg font-semibold rounded-xl border-2 border-fire-orange/20 hover:border-fire-orange hover:bg-fire-orange/10 transition-all group text-white"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full border-2 border-gray-600 group-hover:border-fire-orange flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-fire-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="flex-1">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>
          ) : (
            /* Results Display */
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              {/* Vote count */}
              <div className="text-center text-sm text-gray-400 mb-6">
                {totalVotes.toLocaleString()} Warriors Voted
              </div>

              {/* Results bars */}
              {CURRENT_POLL.options.map((option, index) => {
                const percentage = getPercentage(index)
                const isSelected = selectedOption === index
                
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className={`font-semibold ${isSelected ? 'text-fire-orange' : 'text-gray-300'}`}>
                        {option} {isSelected && '✓'}
                      </span>
                      <span className="text-2xl font-display font-black text-fire-orange">
                        {percentage}%
                      </span>
                    </div>
                    
                    <div className="h-4 bg-black/50 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${isSelected ? 'bg-gradient-to-r from-fire-orange to-lava-red' : 'bg-gray-700'}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </div>
                )
              })}

              {/* Share button */}
              <div className="pt-8 text-center">
                <button
                  onClick={handleShare}
                  className="btn-fire px-8 py-4 text-lg"
                >
                  📤 Share Results on Twitter
                </button>
              </div>
            </motion.div>
          )}
        </div>

        {/* Bottom text */}
        <motion.p
          className="text-center text-sm text-gray-500 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          New poll every week. Your voice matters. 🔥
        </motion.p>
      </div>
    </div>
  )
}
