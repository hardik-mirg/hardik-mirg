import React from 'react'
import ShuffleText from '../components/ShuffleText'
import RotatingText from '../components/RotatingText'
import './styles/hero.css'

const Hero = () => {
    return (
        <div className="hero">
            <div className="fun-fact-card">
                <span className="fun-fact-badge">FUN FACT</span>
                <span>This website, along with all other projects on this domain, is self-hosted on an old Android smartphone instead of a data centre!</span>
            </div>
            <ShuffleText
                text="HARDIK"
                className='title'
                splitType="chars"
                colorFrom={'#fff'}
                colorTo={'#fff'}
                shuffleOnInit={true}
                delay={300}
                duration={1}
                easing="power3.out"
                useNativeScroll={false}
                loop={true}
                loopDelay={2}
            />
            <ShuffleText
                text="MIRG"
                className='title'
                splitType="chars"
                colorFrom={'#fff'}
                colorTo={'#fff'}
                shuffleOnInit={true}
                delay={300}
                duration={1}
                easing="power3.out"
                useNativeScroll={false}
                loop={true}
                loopDelay={2}
            />
            <RotatingText
                className='rotating'
                texts={['Aerospace', 'Robotics', 'Electronics', 'CS', 'AI', 'Photography', 'Music']}
                mainClassName=""
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
                splitBy="characters"
                animatePresenceMode="popLayout"
                auto
                loop
            />
            <div className="marquee-container">
                <div className="marquee-content" style={{ alignItems: 'center' }}>
                    {/* Render twice for seamless looping */}
                    {[...Array(2)].map((_, i) => (
                        <React.Fragment key={i}>
                            {['html', 'css', 'js', 'nodejs', 'express', 'mongodb', 'react', 'dart', 'flutter', 'mysql', 'python', 'cpp', 'tailwind', 'git', 'github', 'vscode', 'apple', 'linux', 'windows', 'arduino', 'bash', 'cloudflare', 'codepen', 'debian', 'ubuntu', 'devto', 'discord', 'discordjs', 'docker', 'figma', 'latex', 'md', 'matlab', 'mint', 'netlify', 'nginx', 'notion', 'obsidian', 'npm', 'opencv', 'replit', 'ros', 'supabase', 'vite'].map((tech) => (
                                <img key={tech + i} src={`https://skillicons.dev/icons?i=${tech}`} alt={tech} className="tech-icon-marquee" style={{ height: '40px', width: 'auto', pointerEvents: 'auto', transition: 'transform 0.2s' }} />
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Hero