import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import './App.css'

const roles = ['Full Stack Developer', 'Frontend Developer', 'Designer', 'EDI Analyst']

const navLinks = [
  ['Home', 'home'],
  ['About', 'about'],
  ['Experience', 'Experience'],
  ['Skills', 'skills'],
  ['Projects', 'Projects'],
  ['Contact', 'contact'],
]

const socialLinks = [
  ['LinkedIn', 'fa-brands fa-linkedin', 'https://www.linkedin.com/in/jenish-rojin-67418721a/'],
  ['GitHub', 'fa-brands fa-github', 'https://github.com/Jenishrojin'],
  ['Instagram', 'fa-brands fa-instagram', 'https://www.instagram.com/_jeni.2802_/'],
  ['Email', 'fa-solid fa-envelope', 'mailto:jenishrojin2002@gmail.com'],
]

const experiences = [
  {
    icon: 'fa-solid fa-code',
    title: 'Full Stack Developer',
    period: 'September 2024 - Present',
    company: 'Embedur Systems',
    projects: 'EMS, Hifives, Embedur site, Modelnova site',
    tech: 'Golang, React, TypeScript, Node.js, Docker, WordPress',
    description: 'Building production web apps, internal systems, engagement tools, and client-facing product sites.',
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'EDI Analyst',
    period: 'Jan 2024 - July 2024',
    company: 'Johnson Electrics',
    projects: 'ASTI and TDS JENA',
    tech: 'Oracle EBS, RLM, Sterling Integrator',
    description:
      'Handled live transactions like Delfor, Deljit, and invoices while improving reliability across EDI workflows.',
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full Stack Developer',
    period: 'Aug 2023 - Sept 2023',
    company: 'Skillvertex',
    projects: 'Ecommerce Website',
    tech: 'HTML, CSS, JS, ReactJS, NodeJS, Mysql',
    description:
      'Designed the frontend, backend, and integration flow for an ecommerce site with user data stored in MySQL.',
  },
  {
    icon: 'fa-solid fa-paint-brush',
    title: 'Frontend Developer and Designer',
    period: 'June 2022 - Aug 2022',
    company: 'Sparks Foundation',
    projects: 'Basic Banking System, Payment Gateway Integration',
    tech: 'HTML, CSS, JS, ReactJS, Mysql',
    description: 'Worked on frontend design and graphical representation for banking and payment applications.',
  },
]

const technicalSkills = [
  ['Java', '/images/Technical/Java.png', 82, 'Backend development and object-oriented programming'],
  ['Python', '/images/Technical/py.png', 78, 'Automation, scripting, and AI/ML workflows'],
  ['TypeScript', '/images/Technical/typescript.svg', 92, 'Typed JavaScript for scalable applications'],
  ['WordPress', '/images/Technical/wordpress.svg', 88, 'Content management and WordPress development'],
  ['Javascript', '/images/Technical/js.png', 86, 'Interactive frontend behavior'],
  ['Node.JS', '/images/Technical/node.png', 76, 'Server-side JavaScript APIs'],
  ['Golang', '/images/Technical/golang.svg', 78, 'Fast backend services and API development'],
  ['React', '/images/Technical/react.png', 84, 'Component-driven UI development'],
  ['MongoDB', '/images/Technical/mongo.png', 70, 'Document database modeling'],
  ['Mysql', '/images/Technical/mysql.png', 80, 'Relational database design'],
  ['PostgreSQL', '/images/Technical/postgres.svg', 72, 'Relational database design and SQL'],
  ['Docker', '/images/Technical/docker.svg', 68, 'Containerization and deployment workflows'],
]

const projects = [
  {
    image: '/images/Projects/Ecommerce.jfif',
    title: 'Ecommerce Purchase ',
    category: 'Full Stack',
    role: 'Full Stack Developer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'HTML, CSS, JS'],
      ['Backend', 'Node'],
      ['Database', 'Mysql'],
    ],
    description:
      'An online purchasing platform with product discovery, secure checkout flow, and customer-facing shopping features.',
    caseStudy: ['Product listing flow', 'Backend order handling', 'MySQL user and product data'],
  },
  {
    image: '/images/Projects/EMS.png',
    title: 'Employee Management System',
    category: 'Full Stack',
    role: 'Full Stack Developer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'React, TypeScript'],
      ['Backend', 'Golang, Node.js'],
      ['Database', 'MySQL'],
    ],
    description:
      'A workplace operations app for employee profiles, roles, attendance, and HR management workflows.',
    caseStudy: ['Role-based employee records', 'Operational dashboards', 'Fast searchable employee data'],
    featured: true,
  },
  {
    image: '/images/Projects/Hifives.png',
    title: 'Hifives',
    category: 'Frontend',
    role: 'Full Stack Developer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'React, TypeScript'],
      ['Backend', 'Golang, Node.js'],
      ['Platform', 'Employee Engagement'],
    ],
    description:
      'An employee recognition and engagement platform for appreciation, rewards, and team interaction.',
    caseStudy: ['Recognition workflows', 'Reward interaction screens', 'Engagement-focused UI patterns'],
    featured: true,
  },
  {
    image: '/images/Projects/Bank.jfif',
    title: 'Basic Banking Transaction System',
    category: 'Full Stack',
    role: 'Frontend Developer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'HTML, CSS, JS, React'],
      ['Backend', 'Spring Boot'],
      ['Database', 'Mysql'],
    ],
    description:
      'A banking app for account operations, transaction processing, balance inquiries, deposits, and transfers.',
    caseStudy: ['Account management', 'Transaction flows', 'Balance inquiry interface'],
  },
  {
    image: '/images/Projects/Payment.jpg',
    title: 'Payment Gateway Integration',
    category: 'Backend',
    role: 'Frontend Developer and Designer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'HTML, CSS, JS'],
      ['Backend', 'Node'],
      ['Gateway API', 'Cashfree'],
    ],
    description:
      'Payment gateway integration connecting an application to a payment processor for secure transaction handling.',
    caseStudy: ['Payment initiation', 'Gateway response handling', 'Checkout state management'],
  },
  {
    image: '/images/Projects/Disease Prediction.jfif',
    title: 'Disease Prediction Using AI and ML',
    category: 'AI/ML',
    role: 'AI/ML Developer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'HTML, CSS, JS'],
      ['Backend', 'Django, AIML algorithms'],
      ['Database', 'Mysql'],
    ],
    description:
      'A healthcare-focused prediction workflow using algorithms to analyze medical data and support early diagnosis.',
    caseStudy: ['Prediction pipeline', 'Medical input form', 'Result interpretation UI'],
  },
  {
    image: '/images/Projects/Network Intrusisoj.jfif',
    title: 'Network Intrusion System',
    category: 'AI/ML',
    role: 'AI/ML Developer',
    links: { demo: '#contact', source: 'https://github.com/Jenishrojin' },
    details: [
      ['Frontend', 'HTML, CSS, JS'],
      ['Backend', 'Django, AIML algorithms'],
    ],
    description:
      'A detection system that monitors network traffic for suspicious activity and supports security response.',
    caseStudy: ['Traffic monitoring', 'Threat classification', 'Alert-focused interface'],
  },
]

const certifications = [
  ['Google Cloud Essentials', 'Google Cloud Skills Boost', 'Cloud fundamentals', 'https://www.skills.google/public_profiles/7ff966e5-eb30-493d-a0a5-43ffc114b9d9/badges/1953512'],
  ['Create and Manage Cloud Resources', 'Google Cloud Skills Boost', 'Cloud resources, Infrastructure', 'https://www.skills.google/public_profiles/7ff966e5-eb30-493d-a0a5-43ffc114b9d9/badges/1953703'],
  ['Baseline: Infrastructure', 'Google Cloud Skills Boost', 'Infrastructure modernization', 'https://www.skills.google/public_profiles/7ff966e5-eb30-493d-a0a5-43ffc114b9d9/badges/1955095?qlcampaign=%3A+EDUCR-CRF22-IN-22%3A%3ADgYjp0NdXH9nHJLVzjGJ4w+'],
  ['Perform Foundational Infrastructure Tasks in Google Cloud', 'Google Cloud Skills Boost', 'Google Cloud, Infrastructure', 'https://www.skills.google/public_profiles/7ff966e5-eb30-493d-a0a5-43ffc114b9d9/badges/1958171'],
  ['Foundations of User Experience (UX) Design', 'Coursera', 'UX design, User research', 'https://www.coursera.org/account/accomplishments/certificate/CRZHDJ8YQGYL'],
  ['React JS', 'Great Learning', 'React, Frontend development', 'https://www.mygreatlearning.com/certificate/FKTRKNSM'],
  ['Full Stack Development', 'DevTown', 'Web development, Full stack', 'https://www.cert.devtown.in/verify/20xFeG'],
  ['Free JavaScript and React.js Essentials Bootcamp', 'LetsUpgrade', 'JavaScript, React.js', 'https://verify.letsupgrade.in/certificate/LUERJSAUG12262'],
  ['Professional Badge', 'Credly', 'Verified achievement', 'https://www.credly.com/badges/17025c52-b5e3-48fc-9729-5033448a8765/linked_in_profile'],
]

const filters = ['All', 'Frontend', 'Backend', 'AI/ML', 'Full Stack']

function useTypewriter(words) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIndex]
    const delay = isDeleting ? 42 : 86

    const timer = setTimeout(() => {
      if (!isDeleting && text === word) {
        setTimeout(() => setIsDeleting(true), 1100)
        return
      }

      if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((index) => (index + 1) % words.length)
        return
      }

      setText((current) =>
        isDeleting ? word.slice(0, current.length - 1) : word.slice(0, current.length + 1),
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [isDeleting, text, wordIndex, words])

  return text
}

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.16 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}

function RevealSection({ children, className = '', id }) {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className={`${className} reveal ${visible ? 'is-visible' : ''}`} id={id}>
      {children}
    </section>
  )
}

function Navbar({ theme, onToggleTheme }) {
  const [sticky, setSticky] = useState(false)
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const moveFocus = (event, direction) => {
    const links = [...navRef.current.querySelectorAll('a')]
    const index = links.indexOf(document.activeElement)
    if (index === -1) return

    event.preventDefault()
    links[(index + direction + links.length) % links.length].focus()
  }

  return (
    <nav className={`navbar ${sticky ? 'sticky' : ''}`}>
      <div className="max-width">
        <div className="logo">
          <a href="#home">
            Portfo<span>lio</span>
          </a>
        </div>
        <ul className={`menu ${open ? 'active' : ''}`} ref={navRef}>
          {navLinks.map(([label, id]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="menu-btn"
                onClick={() => setOpen(false)}
                onKeyDown={(event) => {
                  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') moveFocus(event, 1)
                  if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') moveFocus(event, -1)
                }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Toggle theme">
            <i className={`fa-solid ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
          </button>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            <i className={`fa-solid ${open ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

function Home({ onPreviewResume }) {
  const typed = useTypewriter(roles)

  return (
    <section className="home" id="home">
      <div className="max-width">
        <div className="home-content">
          <div className="text-1">Hello, my name is</div>
          <div className="text-2">Jenish Rojin S</div>
          <div className="text-3">
            And I&apos;m a <span className="typed-text">{typed}</span>
          </div>
          <div className="hero-actions">
            <button type="button" className="resume-link" onClick={onPreviewResume}>
              <i className="fa-solid fa-file-lines"></i>
              Resume
            </button>
            <a href="#Projects" className="ghost-link">
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function About({ onPreviewResume }) {
  const typed = useTypewriter(roles)

  return (
    <RevealSection className="about" id="about">
      <div className="max-width">
        <h2 className="title">About me</h2>
        <div className="about-content">
          <div className="column left">
            <img src="/images/Profile/profile-transparent.png" alt="Jenish Rojin S" />
          </div>
          <div className="column right">
            <div className="status-card">
              <span className="pulse-dot"></span>
              Currently working on EMS, Hifives, and production React experiences.
            </div>
            <div className="text">
              I&apos;m Jenish and I&apos;m a <span className="typed-text">{typed}</span>
            </div>
            <p>
              Welcome to my portfolio! I am a versatile software developer, designer, and EDI
              analyst with extensive experience in Java, Python, frontend development, React JS, and
              Oracle EDI. My expertise includes creating efficient, scalable backend systems and
              integrating complex functionalities. I craft dynamic, responsive applications with
              user-friendly interfaces and deliver solutions that enhance performance and user
              experience.
            </p>
            <button type="button" onClick={onPreviewResume}>
              <i className="fa-solid fa-file-lines"></i>
              Resume
            </button>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}

function Experience() {
  const timelineRef = useRef(null)
  const [timelineProgress, setTimelineProgress] = useState(0)

  useEffect(() => {
    const updateTimelineProgress = () => {
      const element = timelineRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const viewport = window.innerHeight || document.documentElement.clientHeight
      const total = rect.height + viewport
      const viewed = viewport - rect.top
      const progress = Math.min(Math.max(viewed / total, 0), 1)
      setTimelineProgress(progress)
    }

    updateTimelineProgress()
    window.addEventListener('scroll', updateTimelineProgress, { passive: true })
    window.addEventListener('resize', updateTimelineProgress)
    return () => {
      window.removeEventListener('scroll', updateTimelineProgress)
      window.removeEventListener('resize', updateTimelineProgress)
    }
  }, [])

  return (
    <RevealSection className="Experience" id="Experience">
      <div className="max-width">
        <h2 className="title">Experience</h2>
        <div
          className="timeline"
          ref={timelineRef}
          style={{ '--timeline-progress': timelineProgress }}
        >
          {experiences.map((item) => (
            <article className="timeline-item" key={item.title}>
              <div className="timeline-icon">
                <i className={item.icon}></i>
              </div>
              <div className="timeline-content">
                <span className="timeline-date">{item.period}</span>
                <h3>{item.title}</h3>
                <p>
                  <strong>{item.company}</strong> · {item.projects}
                </p>
                <p>{item.description}</p>
                <span className="tech-line">{item.tech}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

function Skills() {
  return (
    <RevealSection className="skills" id="skills">
      <div className="max-width">
        <h2 className="title">My skills</h2>
        <div className="skills-content">
          <SkillGroup title="Technical Skills" skills={technicalSkills} />
        </div>
      </div>
    </RevealSection>
  )
}

function SkillGroup({ title, skills, id }) {
  return (
    <div className="column skill-column" id={id}>
      <h3 className="cardHeading">{title}</h3>
      <p className="skills-intro">A focused toolkit for building modern, production-ready applications.</p>
      <div className="skill-list">
        {skills.map(([label, image, level, tooltip], index) => (
          <div className="skill-item" key={label} style={{ '--skill-delay': `${index * 0.07}s` }}>
            <div className="skill-top">
              <span className="skill-icon-wrap" data-tooltip={tooltip}>
                <img title={label} src={image} alt={label} />
              </span>
              <span className="skill-name">{label}</span>
            </div>
            <div className="skill-bar">
              <span style={{ width: `${level}%` }}></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectSlide, setProjectSlide] = useState(0)
  const [touchStart, setTouchStart] = useState(null)

  const filteredProjects = projects.filter(
    (project) => activeFilter === 'All' || project.category === activeFilter,
  )

  const goToProjectSlide = (direction) => {
    setProjectSlide((current) => (current + direction + filteredProjects.length) % filteredProjects.length)
  }

  return (
    <RevealSection className="Projects" id="Projects">
      <div className="max-width">
        <h2 className="title">Projects</h2>
        <div className="filter-tabs">
          {filters.map((filter) => (
            <button
              type="button"
              className={activeFilter === filter ? 'active' : ''}
              onClick={() => {
                setActiveFilter(filter)
                setProjectSlide(0)
              }}
              key={filter}
            >
              {filter}
            </button>
          ))}
        </div>
        <div
          className="project-grid"
          style={{ '--project-slide': projectSlide }}
          aria-live="polite"
          onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
          onTouchEnd={(event) => {
            if (touchStart === null) return
            const distance = touchStart - event.changedTouches[0].clientX
            if (Math.abs(distance) > 40) goToProjectSlide(distance > 0 ? 1 : -1)
            setTouchStart(null)
          }}
        >
          {filteredProjects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="box">
                <img src={project.image} alt={project.title} />
                <span className="project-category">{project.category}</span>
                <div className="text">{project.title}</div>
                <p>{project.description}</p>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation()
                    setSelectedProject(project)
                  }}
                >
                  View details
                </button>
              </div>
            </article>
          ))}
        </div>
        {filteredProjects.length > 1 && (
          <div className="project-carousel-controls">
            <button type="button" onClick={() => goToProjectSlide(-1)} aria-label="Previous project">
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <div className="project-carousel-dots">
              {filteredProjects.map((project, index) => (
                <button
                  type="button"
                  className={index === projectSlide ? 'active' : ''}
                  onClick={() => setProjectSlide(index)}
                  aria-label={`Show ${project.title}`}
                  key={project.title}
                ></button>
              ))}
            </div>
            <button type="button" onClick={() => goToProjectSlide(1)} aria-label="Next project">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        )}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </RevealSection>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return createPortal(
    (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div className="project-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <img src={project.image} alt={project.title} />
        <div className="modal-content">
          <span>{project.category}</span>
          <h3>{project.title}</h3>
          <p className="modal-description">
            {project.modalDescription || `${project.description} The project focused on ${project.caseStudy.join(', ').toLowerCase()}, with attention to maintainability, usability, and reliable delivery.`}
          </p>
          <ul>
            {project.details.map(([label, value]) => (
              <li key={label}>
                <strong>{label}:</strong> {value}
              </li>
            ))}
          </ul>
          <p>
            <strong>Role:</strong> {project.role}
          </p>
        </div>
      </div>
    </div>
    ),
    document.body,
  )
}

function Certifications() {
  return (
    <RevealSection className="certifications">
      <div className="max-width">
        <h2 className="title">Licences and Certifications</h2>
        <div className="certification-grid">
          {certifications.map(([title, issuer, focus, url], index) => (
            <article className="certification-card" key={title} style={{ '--cert-delay': `${index * 0.12}s` }}>
              <div className="certification-topline">
                <span className="certification-number">0{index + 1}</span>
                <span className="certification-status"><i className="fa-solid fa-check"></i> Verified</span>
              </div>
              <div className="certification-icon"><i className="fa-solid fa-award"></i></div>
              <h3>{title}</h3>
              <p className="certification-issuer">Issued by <strong>{issuer}</strong></p>
              <div className="certification-tags">
                {focus.split(', ').map((item) => <span key={item}>{item}</span>)}
              </div>
              <a className="certification-link" href={url} target="_blank" rel="noreferrer">
                View certificate <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </article>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

function Contact({ onToast }) {
  const [status, setStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)
  const [successBurst, setSuccessBurst] = useState(false)

  const sendMessage = async (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      service_id: 'service_2d7emrf',
      template_id: 'template_v3sgsqn',
      user_id: 'z0BvmTGeXi--Cw2YL',
      template_params: {
        name: formData.get('name'),
        email: formData.get('email'),
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
        reply_to: formData.get('email'),
      },
    }

    setSending(true)
    setStatus({ type: '', message: '' })

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error('EmailJS request failed')
      }

      setStatus({ type: 'success', message: 'Message sent successfully.' })
      setSuccessBurst(true)
      onToast('Message sent successfully.', 'success')
      form.reset()
      setTimeout(() => setSuccessBurst(false), 2200)
    } catch {
      setStatus({ type: 'error', message: 'Message could not be sent. Please try again.' })
      onToast('Message could not be sent. Please try again.', 'error')
    } finally {
      setSending(false)
    }
  }

  return (
    <RevealSection className="contact" id="contact">
      <div className="max-width">
        <h2 className="title">Contact me</h2>
        <div className="contact-content">
          <div className="column left">
            <div className="text">Get in Touch</div>
            <p>Hi Mate! If you need any help Please contact Me.</p>
            <div className="icons">
              <ContactRow icon="fa-solid fa-user" head="Name" detail="Jenish Rojin S" />
              <ContactRow icon="fa-solid fa-map-marker-alt" head="Address" detail="Chennai, Tamil Nadu, India" />
              <ContactRow
                icon="fa-solid fa-envelope"
                head="Email"
                detail={<a href="mailto:jenishrojin2002@gmail.com">jenishrojin2002@gmail.com</a>}
              />
            </div>
          </div>
          <div className="column right">
            <div className="text">Message me</div>
            {successBurst && (
              <div className="contact-success-pop" role="status">
                <i className="fa-solid fa-check"></i>
                Sent
              </div>
            )}
            <form onSubmit={sendMessage}>
              <div className="fields">
                <div className="field name">
                  <input type="text" name="name" placeholder="Name" required />
                </div>
                <div className="field email">
                  <input type="email" name="email" placeholder="Email" required />
                </div>
              </div>
              <div className="field">
                <input type="text" name="subject" placeholder="Subject" required />
              </div>
              <div className="field textarea">
                <textarea name="message" cols="30" rows="10" placeholder="Message.." required></textarea>
              </div>
              <div className="button-area">
                <button type="submit" disabled={sending}>
                  {sending ? 'Sending...' : 'Send message'}
                </button>
              </div>
              {status.message && <p className={`contact-status ${status.type}`}>{status.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}

function ContactRow({ icon, head, detail }) {
  return (
    <div className="row">
      <i className={icon}></i>
      <div className="info">
        <div className="head">{head}</div>
        <div className="sub-title">{detail}</div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <span>
        Created By Jenish Rojin S |{' '}
        {socialLinks.map(([label, icon, href]) => (
          <a href={href} className="ic" aria-label={label} key={label}>
            <i className={icon}></i>
          </a>
        ))}{' '}
        | <span className="fa-regular fa-copyright"></span> 2020 All rights reserved.
      </span>
    </footer>
  )
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      {socialLinks.map(([label, icon, href]) => (
        <a href={href} aria-label={label} key={label}>
          <i className={icon}></i>
        </a>
      ))}
    </div>
  )
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button className={`scroll-up-btn ${visible ? 'show' : ''}`} type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <i className="fa-solid fa-angle-up"></i>
    </button>
  )
}

function LoadingScreen() {
  const [progress, setProgress] = useState(32)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((value) => (value >= 96 ? 32 : value + 1))
    }, 55)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="loading-screen">
      <div className="loader-brand" aria-hidden="true">
        <div className="loader-emblem"><span>&lt;/&gt;</span></div>
        <div className="loader-rule"></div>
      </div>
      <div className="loader-copy">
        <strong><span>JENISH</span> ROJIN S</strong>
        <small>FULL STACK DEVELOPER</small>
      </div>
      <div className="loader-status">
        <div className="loader-progress" aria-hidden="true"><span style={{ width: `${progress}%` }}></span></div>
        <div className="loader-progress-label"><span>LOADING</span><strong>{progress}%</strong></div>
      </div>
      <p className="loader-tip">Build with purpose. Create with curiosity.</p>
    </div>
  )
}

function ResumePreview({ onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div className="modal-backdrop resume-backdrop" role="presentation" onClick={onClose}>
      <div className="resume-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
        <div className="resume-modal-header">
          <div>
            <span>Resume Preview</span>
            <h3>Jenish Rojin S</h3>
          </div>
          <div className="resume-modal-actions">
            <a href="/RESUME.pdf" download>
              <i className="fa-solid fa-download"></i>
              Download
            </a>
            <button type="button" onClick={onClose} aria-label="Close resume preview">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
        <iframe src="/RESUME.pdf#toolbar=1&navpanes=0" title="Resume preview"></iframe>
      </div>
    </div>
  )
}

function Toasts({ toasts, onDismiss }) {
  return (
    <div className="toast-region" aria-live="polite" aria-label="Notifications">
      {toasts.map((toast) => (
        <div className={`toast ${toast.type}`} key={toast.id}>
          <i className={`fa-solid ${toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}`}></i>
          <span>{toast.message}</span>
          <button type="button" onClick={() => onDismiss(toast.id)} aria-label="Dismiss notification">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light')
  const [loading, setLoading] = useState(true)
  const [showResume, setShowResume] = useState(false)
  const [toasts, setToasts] = useState([])

  const dismissToast = (id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }

  const showToast = (message, type = 'success', group = null) => {
    const id = crypto.randomUUID()
    setToasts((current) => [
      ...current.filter((toast) => !group || toast.group !== group),
      { id, message, type, group },
    ])
    setTimeout(() => dismissToast(id), 4200)
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 850)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {loading && <LoadingScreen />}
      <a href="#home" className="skip-link">
        Skip to content
      </a>
      <ScrollTopButton />
      <FloatingActions />
      <Toasts toasts={toasts} onDismiss={dismissToast} />
      <Navbar
        theme={theme}
        onToggleTheme={() => {
          setTheme((value) => {
            const nextTheme = value === 'dark' ? 'light' : 'dark'
            showToast(`${nextTheme === 'dark' ? 'Dark' : 'Light'} theme enabled.`, 'success', 'theme')
            return nextTheme
          })
        }}
      />
      <Home onPreviewResume={() => setShowResume(true)} />
      <About onPreviewResume={() => setShowResume(true)} />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact onToast={showToast} />
      <Footer />
      {showResume && <ResumePreview onClose={() => setShowResume(false)} />}
    </>
  )
}

export default App
