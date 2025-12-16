'use client'

import { useState, useRef, useEffect } from 'react'

export default function PortfolioTerminal() {
    const [history, setHistory] = useState<Array<{ command: string; output: string }>>([
        {
            command: '/welcome', output: `
  _____ ___ ___ __  __ ___ _  _   _   _      
 |_   _| __| _ \\  \\/  |_ _| \\| | /_\\ | |     
   | | | _||   / |\\/| || || .  |/ _ \\| |__   
   |_| |___|_|_\\_|  |_|___|_|\\_/_/ \\_\\____|  

[SYSTEM INITIALIZED] - Terminal Portfolio v1.0

Welcome to the Interactive Portfolio! Type help to see available commands.` },
    ])
    const [currentCommand, setCurrentCommand] = useState('')
    const [historyIndex, setHistoryIndex] = useState(-1)
    const bottomRef = useRef<HTMLDivElement>(null)
    const terminalRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const commands = {
        'help': () => `
[AVAILABLE_COMMANDS]

about       Display personal information
projects    View project portfolio
skills      Show technical skills
experience  Display work history
education   View educational background
contact     Show contact information
clear       Clear terminal screen
help        Display this help message
    `,
        'about': () => `
Name: Arijit Konar
Role: Backend & DevOps Engineer
Education: Integrated B.Tech+M.Tech in IT, IIITM Gwalior
Status: Open to new opportunities

Bio: Passionate Backend & DevOps Engineer with expertise in building scalable 
serverless architectures, reducing latency and costs. Skilled in AWS, Docker, 
Kubernetes, and Python. Winner of multiple hackathons and ranked in top 1.2% 
of JEE Mains applicants.
    `,
        'projects': () => `
[PROJECT PORTFOLIO]

1. VProfile DevOps Project
   • Tech Stack: Jenkins, Terraform, AWS, Docker
   • Impact: Reduced manual deployment effort by 40%, improved release frequency
   • Infrastructure as Code: Terraform for 100% reproducible environments
   • Result: 30% reduction in deployment time

2. Network Traffic Forecasting & Analysis
   • Tech Stack: Python, Pandas, Scikit-learn
   • Data: FacebookVideoLive18 dataset (1.3M+ records)
   • Analysis: Time-Series (lag correlation, rolling statistics)
   • Impact: Reduced bandwidth allocation inefficiency by up to 20%

3. Serverless Function Fusion Platform (Research Project)
   • Tech Stack: Django/DRF, Boto3, ILP, Min-Cut Algorithm
   • Impact: Reduced AWS Lambda workflow latency by 67% and cost by 60%
   • Cloud Stack: Managed Lambda, S3, IAM, CloudWatch
    `,
        'skills': () => `
[TECHNICAL SKILLS MATRIX]

Languages:
  C++                   ████████████████████ 100%
  Python                ████████████████████ 100%
  SQL                   ████████████████     80%

DevOps & Cloud:
  Docker/Kubernetes     ████████████████████ 100%
  AWS                   ██████████████████   90%
  Terraform/Ansible     ██████████████████   90%
  Jenkins/GitHub Actions██████████████████   90%
  Linux/Git             ████████████████████ 100%

Frameworks & Libraries:
  Django/DRF            ██████████████████   90%
  Keras/TensorFlow      ██████████████       70%
    `,
        'experience': () => `
[WORK EXPERIENCE]

May 2025 – Aug 2025 | Backend & DevOps Engineer
IIITM | Research Project
• Implemented multi-algorithm framework reducing AWS Lambda latency by 67%
• Built secure backend services in Django/DRF
• Automated infrastructure using Docker, K8s, and GitHub Actions
• Managed AWS cloud stack ensuring compliance with constraints

POSITIONS OF RESPONSIBILITY
• Secretary, Student Activity Council (1 Year)
• Core Team, Infotsav (6 Months)
• Coordinator, Urja Sports Fest (2 Months)
• Social Media Executive, Aurora Fest (6 Months)
    `,
        'education': () => `
[EDUCATION & CERTIFICATIONS]

Integrated B.Tech and M.Tech in Information Technology
Indian Institute of Information Technology and Management, Gwalior
• Expected July 2027
• CGPA: 7.84

Achievements:
• Winner, Hackatron (INFOTSAV '24)
• Top 3, Smart India Hackathon (Internal)
• JEE Mains Top 1.2% (2022)
• JEE Advanced Qualified (2022)
• Deloitte Technology Job Simulation (2025)
    `,
        'contact': () => `
[CONTACT INFORMATION]

📧 Email: arijitkonar16@gmail.com
🐙 GitHub: https://github.com/Samurai007AK
💼 LinkedIn: https://linkedin.com/arijit-konar
📱 Phone: +91-8269728373

Feel free to reach out for opportunities, collaborations, or just to chat about tech!
    `,
        'clear': () => {
            setHistory([])
            return ''
        },
    }

    const handleCommand = () => {
        const cmd = currentCommand.trim().toLowerCase()
        const commandFn = commands[cmd as keyof typeof commands]
        const output = commandFn ? commandFn() : `Command not found: ${cmd}
Type help to see available commands.`

        if (cmd !== 'clear') {
            setHistory(prev => [...prev, { command: currentCommand, output }])
        }

        setCurrentCommand('')
        setHistoryIndex(-1)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleCommand()
        } else if (e.key === 'ArrowUp') {
            e.preventDefault()
            setHistoryIndex(prev => {
                const newIndex = Math.min(prev + 1, history.length - 1)
                if (history.length > 0) {
                    setCurrentCommand(history[history.length - 1 - newIndex]?.command || '')
                }
                return newIndex
            })
        } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            setHistoryIndex(prev => {
                const newIndex = Math.max(prev - 1, -1)
                setCurrentCommand(newIndex === -1 ? '' : history[history.length - 1 - newIndex]?.command || '')
                return newIndex
            })
        }
    }

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [history])

    useEffect(() => {
        // Focus input when component mounts or when terminal is clicked
        const handleClick = () => {
            inputRef.current?.focus()
        }

        if (terminalRef.current) {
            terminalRef.current.addEventListener('click', handleClick)
        }

        return () => {
            if (terminalRef.current) {
                terminalRef.current.removeEventListener('click', handleClick)
            }
        }
    }, [])

    const renderOutput = (output: string) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g
        const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g

        let parts = output.split(urlRegex)
        parts = parts.flatMap(part =>
            urlRegex.test(part) ? [part] : part.split(emailRegex)
        )

        return parts.map((part, index) => {
            if (urlRegex.test(part)) {
                return (
                    <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
                        {part}
                    </a>
                )
            } else if (emailRegex.test(part)) {
                return (
                    <a key={index} href={`mailto:${part}`} className="text-cyan-400 hover:underline hover:text-cyan-300 transition-colors">
                        {part}
                    </a>
                )
            }
            return <span key={index}>{part}</span>
        })
    }

    return (
        <div className="w-full h-full bg-black text-green-400 font-mono flex flex-col">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 p-3 bg-gray-800 text-xs text-gray-400 shrink-0">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors cursor-pointer" />
                    <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors cursor-pointer" />
                </div>
                <div className="flex-1 text-center font-semibold">arijit@portfolio-terminal:~$ | Interactive Portfolio v1.0</div>
                <div className="text-xs">
                    <span className="text-green-400">●</span> ONLINE
                </div>
            </div>

            {/* Terminal Output */}
            <div
                ref={terminalRef}
                className="flex-1 overflow-y-auto p-4 space-y-3 bg-black cursor-text min-h-[400px]"
                style={{
                    scrollbarWidth: 'thin',
                    scrollbarColor: '#10b981 #1f2937'
                }}
            >
                {history.map((entry, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex gap-2">
                            <span className="text-cyan-400 font-semibold">arijit@portfolio:~$</span>
                            <span className="text-white">{entry.command}</span>
                        </div>
                        <div className="whitespace-pre-wrap text-gray-300 pl-6 leading-relaxed">
                            {renderOutput(entry.output)}
                        </div>
                    </div>
                ))}

                {/* Current Command Input */}
                <div className="flex gap-2 items-center">
                    <span className="text-cyan-400 font-semibold">arijit@portfolio:~$</span>
                    <input
                        ref={inputRef}
                        type="text"
                        value={currentCommand}
                        onChange={e => setCurrentCommand(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 bg-transparent outline-none text-white caret-green-400"
                        autoFocus
                        spellCheck="false"
                    />
                    <span className="text-green-400 animate-pulse">█</span>
                </div>

                {/* Auto-scroll anchor */}
                <div ref={bottomRef} />
            </div>

            {/* Terminal Footer */}
            <div className="bg-gray-800 px-4 py-2 text-xs text-gray-500 border-t border-gray-700 shrink-0">
                <div className="flex justify-between items-center">
                    <span>Type help for available commands • Use ↑/↓ arrows for command history</span>
                    <span>Press Ctrl+C to interrupt • clear to reset terminal</span>
                </div>
            </div>
        </div>
    )
}
