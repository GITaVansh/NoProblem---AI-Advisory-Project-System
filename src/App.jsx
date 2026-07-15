import { useState, useEffect, useRef } from 'react';

// Custom inline SVG icons for 100% dependency-free, robust rendering
const MessageIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CheckSquareIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

const CalendarIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const KanbanIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="9" y1="3" x2="9" y2="21" />
    <line x1="15" y1="3" x2="15" y2="21" />
  </svg>
);

const CodeIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const PlusIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const TrashIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const ChevronLeftIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const SaveIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);

const CopyIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const FileTextIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const SunIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenuIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const API_BASE = window.location.origin.includes('localhost:5173')
  ? 'http://localhost:5000/api'
  : '/api';

function App() {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState('');
  const [project, setProject] = useState(null);
  
  // Splash Screen States
  const [showSplash, setShowSplash] = useState(true);
  const [splashFade, setSplashFade] = useState(false);
  const [splashText, setSplashText] = useState('');
  const [splashStrike, setSplashStrike] = useState(false);
  const [splashNo, setSplashNo] = useState(false);

  // Splash Screen animation coordination timeline
  useEffect(() => {
    const fullText = "PROBLEM";
    let index = 0;
    
    // Type characters sequentially
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        const char = fullText[index];
        setSplashText(prev => prev + char);
        index++;
      } else {
        clearInterval(typingInterval);
        
        // Pause briefly, then draw strikethrough from left to right
        setTimeout(() => {
          setSplashStrike(true);
          
          // Pause briefly, then slide in "NO"
          setTimeout(() => {
            setSplashNo(true);
            
            // Hold full logo state, then trigger page fade out
            setTimeout(() => {
              setSplashFade(true);
              
              // Clean up splash from DOM when fade transition completes
              setTimeout(() => {
                setShowSplash(false);
              }, 800);
            }, 1200);
          }, 800);
        }, 300);
      }
    }, 150); // 150ms per letter (1.05s total typing)

    return () => {
      clearInterval(typingInterval);
    };
  }, []);
  
  // Get or generate a persistent device user ID
  const [userId] = useState(() => {
    let id = localStorage.getItem('no_problem_user_id');
    if (!id) {
      id = 'usr_' + Math.random().toString(36).substring(2, 11);
      localStorage.setItem('no_problem_user_id', id);
    }
    return id;
  });

  // Mobile active view state: 'sidebar', 'chat', 'tools'
  const [mobileActiveView, setMobileActiveView] = useState('tools');
  
  // Theme state & synchronization
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };
  
  // AI Settings configuration states
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(() => localStorage.getItem('gemini_api_key') || '');
  
  // UI states
  const [activeTab, setActiveTab] = useState('kanban');
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);
  
  // Modals
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);
  const [newProjName, setNewProjName] = useState('');
  const [newProjDesc, setNewProjDesc] = useState('');
  
  // Kanban items add
  const [isAddCardOpen, setIsAddCardOpen] = useState(false);
  const [cardTargetCol, setCardTargetCol] = useState('todo');
  const [newCardTitle, setNewCardTitle] = useState('');
  const [newCardDesc, setNewCardDesc] = useState('');
  const [newCardPriority, setNewCardPriority] = useState('medium');
  
  // Timeline items add
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState('');
  
  // Checklist items add
  const [newChecklistItem, setNewChecklistItem] = useState('');
  
  // XP Optimizer items
  const [xpCode, setXpCode] = useState('// Enter your code here to optimize under XP rules...\n\nfunction processData(varName) {\n  var temp = varName;\n  for(var i=0; i<10; i++) {\n    temp += i;\n  }\n  return temp;\n}');
  const [isXpLoading, setIsXpLoading] = useState(false);
  const [activeXpOpt, setActiveXpOpt] = useState(null);
  
  // Calendar Navigation
  const [currentCalendarDate, setCurrentCalendarDate] = useState(new Date());
  
  // Scribble pad saving indicators
  const [scribbleText, setScribbleText] = useState('');
  const [isScribbleSaving, setIsScribbleSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  
  const chatEndRef = useRef(null);

  // Fetch projects list
  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch full project details when selected project changes
  useEffect(() => {
    if (selectedProjectId) {
      fetchProjectDetails(selectedProjectId);
    } else {
      setProject(null);
    }
  }, [selectedProjectId]);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [project?.chatHistory]);

  const fetchProjects = async () => {
    try {
      const res = await fetch(`${API_BASE}/projects`, {
        headers: { 'X-User-ID': userId }
      });
      const data = await res.json();
      setProjects(data);
      if (data.length > 0 && !selectedProjectId) {
        setSelectedProjectId(data[0].id);
      }
    } catch (err) {
      console.error("Error fetching projects", err);
    }
  };

  const fetchProjectDetails = async (id) => {
    try {
      const res = await fetch(`${API_BASE}/projects/${id}`, {
        headers: { 'X-User-ID': userId }
      });
      const data = await res.json();
      setProject(data);
      setScribbleText(data.scribble || '');
      // Automatically choose tab based on recommended methodology
      if (data.recommendedMethodology) {
        const meth = data.recommendedMethodology.toLowerCase();
        if (meth.includes('kanban')) {
          setActiveTab('kanban');
        } else if (meth.includes('scrum') || meth.includes('waterfall') || meth.includes('hybrid')) {
          setActiveTab('timeline');
        } else if (meth.includes('xp')) {
          setActiveTab('xp');
        }
      }
    } catch (err) {
      console.error("Error fetching project details", err);
    }
  };

  const handleCreateProject = async (e) => {
    e.preventDefault();
    if (!newProjName.trim()) return;
    try {
      const res = await fetch(`${API_BASE}/projects`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-User-ID': userId
        },
        body: JSON.stringify({ name: newProjName, description: newProjDesc })
      });
      const data = await res.json();
      setProjects([...projects, data]);
      setSelectedProjectId(data.id);
      setMobileActiveView('tools');
      setIsNewProjectModalOpen(false);
      setNewProjName('');
      setNewProjDesc('');
    } catch (err) {
      console.error("Error creating project", err);
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await fetch(`${API_BASE}/projects/${id}`, { 
        method: 'DELETE',
        headers: { 'X-User-ID': userId }
      });
      const updated = projects.filter(p => p.id !== id);
      setProjects(updated);
      if (selectedProjectId === id) {
        setSelectedProjectId(updated.length > 0 ? updated[0].id : '');
      }
    } catch (err) {
      console.error("Error deleting project", err);
    }
  };

  // Chat agent submission
  const handleSendChatMessage = async (e) => {
    e.preventDefault();
    if (!chatInput.trim() || !project) return;
    const msg = chatInput;
    setChatInput('');
    setIsChatLoading(true);

    // Optimistically update UI
    setProject(prev => ({
      ...prev,
      chatHistory: [...prev.chatHistory, { sender: 'user', text: msg }]
    }));

    try {
      const res = await fetch(`${API_BASE}/projects/${project.id}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Gemini-API-Key': localStorage.getItem('gemini_api_key') || '',
          'X-User-ID': userId
        },
        body: JSON.stringify({ message: msg })
      });
      const data = await res.json();
      setProject(prev => ({
        ...prev,
        chatHistory: data.chatHistory,
        recommendedMethodology: data.recommendedMethodology,
        methodologyAnalysis: data.methodologyAnalysis
      }));
      // Refresh sidebar list to reflect recommended methodology badge
      fetchProjects();
    } catch (err) {
      console.error("Error sending message to chat agent", err);
    } finally {
      setIsChatLoading(false);
    }
  };

  // Initialize Methodology templates
  const handleInitializeTemplate = async () => {
    if (!project) return;
    if (!window.confirm("This will overwrite some of your current tasks/milestones with a template. Continue?")) return;
    try {
      const res = await fetch(`${API_BASE}/projects/${project.id}/initialize-template`, {
        method: 'POST',
        headers: { 'X-User-ID': userId }
      });
      const data = await res.json();
      setProject(data);
      alert(`Workspace pre-populated template loaded for ${data.recommendedMethodology || 'Scrum'}!`);
    } catch (err) {
      console.error("Error loading template", err);
    }
  };

  // General PUT update to save local edits
  const saveProjectState = async (updatedProject) => {
    try {
      const res = await fetch(`${API_BASE}/projects/${updatedProject.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'X-User-ID': userId
        },
        body: JSON.stringify(updatedProject)
      });
      const data = await res.json();
      setProject(data);
    } catch (err) {
      console.error("Error updating project data", err);
    }
  };

  // Kanban interactions
  const handleAddKanbanCard = (e) => {
    e.preventDefault();
    if (!newCardTitle.trim() || !project) return;

    const newCard = {
      id: 'k_card_' + Date.now(),
      title: newCardTitle,
      description: newCardDesc,
      status: cardTargetCol,
      priority: newCardPriority
    };

    const updatedKanban = [...(project.kanban || []), newCard];
    const updatedProj = { ...project, kanban: updatedKanban };
    
    setProject(updatedProj);
    saveProjectState(updatedProj);
    
    setIsAddCardOpen(false);
    setNewCardTitle('');
    setNewCardDesc('');
    setNewCardPriority('medium');
  };

  const handleDeleteKanbanCard = (cardId) => {
    if (!project) return;
    const updatedKanban = project.kanban.filter(c => c.id !== cardId);
    const updatedProj = { ...project, kanban: updatedKanban };
    setProject(updatedProj);
    saveProjectState(updatedProj);
  };

  const handleMoveKanbanCard = (cardId, nextStatus) => {
    if (!project) return;
    const updatedKanban = project.kanban.map(c => {
      if (c.id === cardId) {
        return { ...c, status: nextStatus };
      }
      return c;
    });
    const updatedProj = { ...project, kanban: updatedKanban };
    setProject(updatedProj);
    saveProjectState(updatedProj);
  };

  // Scribble pad changes
  const handleSaveScribble = async () => {
    if (!project) return;
    setIsScribbleSaving(true);
    setSaveSuccess(false);
    try {
      const res = await fetch(`${API_BASE}/projects/${project.id}`, {
        method: 'PUT',
        headers: { 
          'Content-Type': 'application/json',
          'X-User-ID': userId
        },
        body: JSON.stringify({ scribble: scribbleText })
      });
      const data = await res.json();
      setProject(data);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 2000);
    } catch (err) {
      console.error("Error saving scribble", err);
    } finally {
      setIsScribbleSaving(false);
    }
  };

  // Timeline events addition
  const handleAddTimelineEvent = (e) => {
    e.preventDefault();
    if (!newEventTitle.trim() || !newEventDate || !project) return;

    const newEvent = {
      id: 'ev_' + Date.now(),
      title: newEventTitle,
      date: newEventDate,
      type: (project.recommendedMethodology || 'Scrum').toLowerCase().includes('waterfall') ? 'waterfall' : 'scrum',
      completed: false
    };

    const updatedTimeline = [...(project.timeline || []), newEvent];
    // Sort timeline by date
    updatedTimeline.sort((a, b) => new Date(a.date) - new Date(b.date));

    const updatedProj = { ...project, timeline: updatedTimeline };
    setProject(updatedProj);
    saveProjectState(updatedProj);

    setIsAddEventOpen(false);
    setNewEventTitle('');
    setNewEventDate('');
  };

  const handleToggleEventCompletion = (eventId) => {
    if (!project) return;
    const updatedTimeline = project.timeline.map(ev => {
      if (ev.id === eventId) {
        return { ...ev, completed: !ev.completed };
      }
      return ev;
    });
    const updatedProj = { ...project, timeline: updatedTimeline };
    setProject(updatedProj);
    saveProjectState(updatedProj);
  };

  const handleDeleteTimelineEvent = (eventId) => {
    if (!project) return;
    const updatedTimeline = project.timeline.filter(ev => ev.id !== eventId);
    const updatedProj = { ...project, timeline: updatedTimeline };
    setProject(updatedProj);
    saveProjectState(updatedProj);
  };

  // Checklist interactions
  const handleAddChecklistItem = (e) => {
    e.preventDefault();
    if (!newChecklistItem.trim() || !project) return;

    const newItem = {
      id: 'chk_' + Date.now(),
      text: newChecklistItem,
      completed: false
    };

    const updatedChecklist = [...(project.checklist || []), newItem];
    const updatedProj = { ...project, checklist: updatedChecklist };
    setProject(updatedProj);
    saveProjectState(updatedProj);

    setNewChecklistItem('');
  };

  const handleToggleChecklist = (itemId) => {
    if (!project) return;
    const updatedChecklist = project.checklist.map(chk => {
      if (chk.id === itemId) {
        return { ...chk, completed: !chk.completed };
      }
      return chk;
    });
    const updatedProj = { ...project, checklist: updatedChecklist };
    setProject(updatedProj);
    saveProjectState(updatedProj);
  };

  const handleDeleteChecklistItem = (itemId) => {
    if (!project) return;
    const updatedChecklist = project.checklist.filter(chk => chk.id !== itemId);
    const updatedProj = { ...project, checklist: updatedChecklist };
    setProject(updatedProj);
    saveProjectState(updatedProj);
  };

  // XP Optimizer interactions
  const handleRunXPOptimizer = async () => {
    if (!project || !xpCode.trim()) return;
    setIsXpLoading(true);
    try {
      const res = await fetch(`${API_BASE}/projects/${project.id}/xp/optimize`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'X-User-ID': userId
        },
        body: JSON.stringify({ code: xpCode })
      });
      const data = await res.json();
      // Reload project details to include new optimization history item
      fetchProjectDetails(project.id);
      setActiveXpOpt(data);
    } catch (err) {
      console.error("Error optimizing code", err);
    } finally {
      setIsXpLoading(false);
    }
  };

  // Calendar calculations helper
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth(); // 0-indexed
    
    // First day of current month
    const firstDay = new Date(year, month, 1);
    const startDayOfWeek = firstDay.getDay(); // 0: Sun, 1: Mon, ...
    
    const days = [];
    
    // Previous month trailing days
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const dayVal = prevMonthLastDay - i;
      const prevMonth = month === 0 ? 11 : month - 1;
      const prevYear = month === 0 ? year - 1 : year;
      days.push({
        dayNum: dayVal,
        month: prevMonth,
        year: prevYear,
        isCurrentMonth: false,
        dateString: `${prevYear}-${String(prevMonth + 1).padStart(2, '0')}-${String(dayVal).padStart(2, '0')}`
      });
    }
    
    // Current month days
    const lastDay = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= lastDay; i++) {
      days.push({
        dayNum: i,
        month: month,
        year: year,
        isCurrentMonth: true,
        dateString: `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
      });
    }
    
    // Next month leading days to reach 42 cells (6 rows * 7 columns)
    const remaining = 42 - days.length;
    for (let i = 1; i <= remaining; i++) {
      const nextMonth = month === 11 ? 0 : month + 1;
      const nextYear = month === 11 ? year + 1 : year;
      days.push({
        dayNum: i,
        month: nextMonth,
        year: nextYear,
        isCurrentMonth: false,
        dateString: `${nextYear}-${String(nextMonth + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`
      });
    }
    
    return days;
  };

  const nextMonth = () => {
    setCurrentCalendarDate(new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentCalendarDate(new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() - 1, 1));
  };

  const calendarDays = getDaysInMonth(currentCalendarDate);
  const monthName = currentCalendarDate.toLocaleString('default', { month: 'long' });
  const calendarYear = currentCalendarDate.getFullYear();

  return (
    <>
      {showSplash && (
        <div className={`splash-screen ${splashFade ? 'fade-out' : ''}`}>
          <div className="splash-background-glow" />
          <div className="splash-content">
            <span className={`splash-no ${splashNo ? 'animate-no' : ''}`}>NO</span>
            <span className="splash-problem">
              {splashText}
              {splashStrike && <span className="splash-strike-line" />}
            </span>
          </div>
        </div>
      )}
      <div className="app-container">
        {/* Mobile Header Bar */}
        <div className="mobile-header">
          <button 
            onClick={() => setMobileActiveView(mobileActiveView === 'sidebar' ? 'tools' : 'sidebar')} 
            className="mobile-menu-btn"
            title="Toggle Menu"
          >
            <MenuIcon size={20} />
          </button>
          <div className="mobile-logo logo-text">
            <span className="logo-no">NO</span>
            <span className="logo-problem">PROBLEM</span>
          </div>
          {project && (
            <div className="mobile-view-toggle">
              <button 
                onClick={() => setMobileActiveView('chat')} 
                className={`mobile-toggle-btn ${mobileActiveView === 'chat' ? 'active' : ''}`}
              >
                Chat
              </button>
              <button 
                onClick={() => setMobileActiveView('tools')} 
                className={`mobile-toggle-btn ${mobileActiveView === 'tools' ? 'active' : ''}`}
              >
                Workspace
              </button>
            </div>
          )}
        </div>

        {/* SIDEBAR: Project lists and general parameters */}
        <aside className={`sidebar ${mobileActiveView === 'sidebar' ? 'mobile-show' : 'mobile-hide'}`}>
          <div className="sidebar-header">
            <div className="sidebar-title logo-text">
              <span className="logo-no">NO</span>
              <span className="logo-problem">PROBLEM</span>
            </div>
            <div className="sidebar-subtitle">AI Advisory & Project System</div>
          </div>
        
        <div className="project-list-container">
          <div className="section-label">Active Workspaces</div>
          {projects.map(p => (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProjectId(p.id);
                setMobileActiveView('tools');
              }}
              className={`project-item ${selectedProjectId === p.id ? 'active' : ''}`}
            >
              <div className="project-item-name">{p.name}</div>
              <div className="project-item-desc">{p.description || "No description"}</div>
              {p.recommendedMethodology && (
                <span className="project-item-meth">{p.recommendedMethodology}</span>
              )}
            </button>
          ))}
          {projects.length === 0 && (
            <div style={{ padding: '8px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
              No projects configured. Create one below.
            </div>
          )}
        </div>

        <div className="sidebar-footer">
          <button onClick={toggleTheme} className="btn btn-secondary w-full" style={{ marginBottom: '4px' }}>
            {theme === 'dark' ? (
              <>
                <SunIcon size={12} style={{ marginRight: '6px' }} /> Light Mode
              </>
            ) : (
              <>
                <MoonIcon size={12} style={{ marginRight: '6px' }} /> Dark Mode
              </>
            )}
          </button>
          <button onClick={() => setIsSettingsOpen(true)} className="btn btn-secondary w-full" style={{ marginBottom: '4px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
            AI Settings
          </button>
          <button onClick={() => setIsNewProjectModalOpen(true)} className="btn w-full" style={{ marginBottom: '4px' }}>
            <PlusIcon size={14} style={{ marginRight: '4px' }} /> New Project
          </button>
          {project && (
            <button 
              onClick={() => handleDeleteProject(project.id)} 
              className="btn btn-danger w-full"
            >
              <TrashIcon size={14} style={{ marginRight: '4px' }} /> Delete Project
            </button>
          )}
        </div>
      </aside>

      {/* MAIN CONTAINER: Workspace Dashboard */}
      {project ? (
        <main className={`main-content ${mobileActiveView !== 'sidebar' ? 'mobile-show' : 'mobile-hide'}`}>
          <header className="dashboard-header">
            <div>
              <h1 className="project-title">{project.name}</h1>
              <p className="project-desc">{project.description || "No project description provided."}</p>
              {project.recommendedMethodology ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div className="methodology-badge">
                    Active: {project.recommendedMethodology}
                  </div>
                  <button 
                    onClick={handleInitializeTemplate} 
                    className="btn btn-secondary" 
                    style={{ padding: '2px 8px', fontSize: '10px', marginTop: '8px' }}
                  >
                    Reset/Load Template
                  </button>
                </div>
              ) : (
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', fontFamily: 'var(--font-mono)' }}>
                  Use the AI Advisor on the left pane to analyze your problem & assign a methodology.
                </div>
              )}
            </div>
            
            {project.methodologyAnalysis && (
              <div style={{ border: '1px solid var(--border-color)', padding: '10px', backgroundColor: 'var(--bg-primary)', maxWidth: '300px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}>Methodology Scores</div>
                <div style={{ fontSize: '11px', whiteSpace: 'pre-line', marginTop: '4px', lineHeight: '1.4' }}>
                  {project.methodologyAnalysis}
                </div>
              </div>
            )}
          </header>

          <div className="workspace-grid">
            {/* AI ADVISOR CHAT PANEL */}
            <section className={`agent-pane ${mobileActiveView === 'chat' ? 'mobile-show' : 'mobile-hide'}`}>
              <div className="pane-header">
                <span>AI Methodology Advisor</span>
                <MessageIcon size={14} />
              </div>
              <div className="chat-history">
                {project.chatHistory?.map((msg, idx) => (
                  <div key={idx} className={`chat-message ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}
                {isChatLoading && (
                  <div className="chat-message agent" style={{ fontStyle: 'italic', fontFamily: 'var(--font-mono)' }}>
                    Analyzing inputs...
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>
              <form onSubmit={handleSendChatMessage} className="chat-input-area">
                <input
                  type="text"
                  placeholder="Explain problem or project attributes..."
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  className="input-field"
                  disabled={isChatLoading}
                />
                <button type="submit" className="btn" disabled={isChatLoading}>
                  Send
                </button>
              </form>
            </section>

            {/* INTERACTIVE WORKSPACE TABS */}
            <section className={`tools-pane ${mobileActiveView === 'tools' ? 'mobile-show' : 'mobile-hide'}`}>
              <nav className="tabs-bar">
                <button
                  onClick={() => setActiveTab('kanban')}
                  className={`tab-btn ${activeTab === 'kanban' ? 'active' : ''}`}
                >
                  <KanbanIcon size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Kanban & Scribble
                </button>
                <button
                  onClick={() => setActiveTab('timeline')}
                  className={`tab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
                >
                  <CalendarIcon size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Timeline & Calendar
                </button>
                <button
                  onClick={() => setActiveTab('checklist')}
                  className={`tab-btn ${activeTab === 'checklist' ? 'active' : ''}`}
                >
                  <CheckSquareIcon size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> Checklist Tab
                </button>
                <button
                  onClick={() => setActiveTab('xp')}
                  className={`tab-btn ${activeTab === 'xp' ? 'active' : ''}`}
                >
                  <CodeIcon size={12} style={{ marginRight: '6px', verticalAlign: 'middle' }} /> XP Code Optimizer
                </button>
              </nav>

              <div className="tab-content">
                
                {/* TAB 1: KANBAN & SCRIBBLE PAD (ALIGNED SIDE-BY-SIDE) */}
                {activeTab === 'kanban' && (
                  <div className="kanban-scribble-layout">
                    {/* KANBAN SECTION */}
                    <div className="kanban-section">
                      <div className="kanban-board">
                        
                        {/* column: TODO */}
                        <div className="kanban-column">
                          <div className="column-header">
                            <span>To Do</span>
                            <span className="column-count">
                              {project.kanban?.filter(c => c.status === 'todo').length || 0}
                            </span>
                          </div>
                          <div className="cards-container">
                            {project.kanban?.filter(c => c.status === 'todo').map(card => (
                              <div key={card.id} className="kanban-card">
                                <div className="card-title">{card.title}</div>
                                {card.description && <div className="card-desc">{card.description}</div>}
                                <div className="card-footer">
                                  <span className={`card-priority ${card.priority}`}>{card.priority}</span>
                                  <div className="card-actions">
                                    <button 
                                      onClick={() => handleMoveKanbanCard(card.id, 'in_progress')} 
                                      className="card-action-btn"
                                      title="Move to In Progress"
                                    >
                                      <ChevronRightIcon size={14} />
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteKanbanCard(card.id)} 
                                      className="card-action-btn"
                                      title="Delete Card"
                                    >
                                      <TrashIcon size={12} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button 
                              onClick={() => { setCardTargetCol('todo'); setIsAddCardOpen(true); }} 
                              className="btn btn-secondary" 
                              style={{ width: '100%', padding: '6px', fontSize: '11px', marginTop: '4px' }}
                            >
                              <PlusIcon size={12} /> Add Card
                            </button>
                          </div>
                        </div>

                        {/* column: IN PROGRESS */}
                        <div className="kanban-column">
                          <div className="column-header">
                            <span>In Progress</span>
                            <span className="column-count">
                              {project.kanban?.filter(c => c.status === 'in_progress').length || 0}
                            </span>
                          </div>
                          <div className="cards-container">
                            {project.kanban?.filter(c => c.status === 'in_progress').map(card => (
                              <div key={card.id} className="kanban-card">
                                <div className="card-title">{card.title}</div>
                                {card.description && <div className="card-desc">{card.description}</div>}
                                <div className="card-footer">
                                  <span className={`card-priority ${card.priority}`}>{card.priority}</span>
                                  <div className="card-actions">
                                    <button 
                                      onClick={() => handleMoveKanbanCard(card.id, 'todo')} 
                                      className="card-action-btn"
                                      title="Move to To Do"
                                    >
                                      <ChevronLeftIcon size={14} />
                                    </button>
                                    <button 
                                      onClick={() => handleMoveKanbanCard(card.id, 'done')} 
                                      className="card-action-btn"
                                      title="Move to Done"
                                    >
                                      <ChevronRightIcon size={14} />
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteKanbanCard(card.id)} 
                                      className="card-action-btn"
                                      title="Delete Card"
                                    >
                                      <TrashIcon size={12} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button 
                              onClick={() => { setCardTargetCol('in_progress'); setIsAddCardOpen(true); }} 
                              className="btn btn-secondary" 
                              style={{ width: '100%', padding: '6px', fontSize: '11px', marginTop: '4px' }}
                            >
                              <PlusIcon size={12} /> Add Card
                            </button>
                          </div>
                        </div>

                        {/* column: DONE */}
                        <div className="kanban-column">
                          <div className="column-header">
                            <span>Done</span>
                            <span className="column-count">
                              {project.kanban?.filter(c => c.status === 'done').length || 0}
                            </span>
                          </div>
                          <div className="cards-container">
                            {project.kanban?.filter(c => c.status === 'done').map(card => (
                              <div key={card.id} className="kanban-card">
                                <div className="card-title" style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                                  {card.title}
                                </div>
                                {card.description && <div className="card-desc" style={{ color: 'var(--text-muted)' }}>{card.description}</div>}
                                <div className="card-footer">
                                  <span className={`card-priority ${card.priority}`} style={{ opacity: 0.5 }}>{card.priority}</span>
                                  <div className="card-actions">
                                    <button 
                                      onClick={() => handleMoveKanbanCard(card.id, 'in_progress')} 
                                      className="card-action-btn"
                                      title="Move to In Progress"
                                    >
                                      <ChevronLeftIcon size={14} />
                                    </button>
                                    <button 
                                      onClick={() => handleDeleteKanbanCard(card.id)} 
                                      className="card-action-btn"
                                      title="Delete Card"
                                    >
                                      <TrashIcon size={12} />
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                            <button 
                              onClick={() => { setCardTargetCol('done'); setIsAddCardOpen(true); }} 
                              className="btn btn-secondary" 
                              style={{ width: '100%', padding: '6px', fontSize: '11px', marginTop: '4px' }}
                            >
                              <PlusIcon size={12} /> Add Card
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* ALIGNED SCRIBBLE PAD */}
                    <div className="scribble-section">
                      <div className="scribble-header">
                        <span>Scribble Pad</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          {saveSuccess && <span style={{ fontSize: '9px', textTransform: 'lowercase', color: 'var(--text-muted)' }}>Saved!</span>}
                          <button 
                            onClick={handleSaveScribble} 
                            disabled={isScribbleSaving} 
                            className="btn btn-secondary"
                            style={{ padding: '2px 6px', fontSize: '9px' }}
                          >
                            <SaveIcon size={10} style={{ marginRight: '3px' }} /> {isScribbleSaving ? 'Saving' : 'Save'}
                          </button>
                        </div>
                      </div>
                      <textarea
                        value={scribbleText}
                        onChange={(e) => setScribbleText(e.target.value)}
                        placeholder="# Scribble Board&#10;&#10;- Meeting at 10 AM&#10;- Discuss Kanban WIP limits&#10;- Refactor total price calculation"
                        className="scribble-textarea"
                      />
                    </div>
                  </div>
                )}

                {/* TAB 2: TIMELINE & CALENDAR */}
                {activeTab === 'timeline' && (
                  <div className="timeline-calendar-layout">
                    {/* CALENDAR SECTION */}
                    <div className="calendar-section">
                      <div className="calendar-header">
                        <button onClick={prevMonth} className="btn btn-secondary" style={{ padding: '2px 6px' }}>
                          <ChevronLeftIcon size={12} />
                        </button>
                        <span>{monthName} {calendarYear}</span>
                        <button onClick={nextMonth} className="btn btn-secondary" style={{ padding: '2px 6px' }}>
                          <ChevronRightIcon size={12} />
                        </button>
                      </div>
                      <div className="calendar-grid">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                          <div key={d} className="calendar-day-header">{d}</div>
                        ))}
                        {calendarDays.map((day, idx) => {
                          const isToday = new Date().toDateString() === new Date(day.year, day.month, day.dayNum).toDateString();
                          const eventsOnThisDay = project.timeline?.filter(e => e.date === day.dateString) || [];
                          
                          return (
                            <div 
                              key={idx} 
                              className={`calendar-day-cell ${day.isCurrentMonth ? '' : 'other-month'} ${isToday ? 'today' : ''}`}
                            >
                              <span className="day-number">{day.dayNum}</span>
                              <div className="day-events">
                                {eventsOnThisDay.map(ev => (
                                  <div 
                                    key={ev.id} 
                                    className={`day-event-badge ${ev.completed ? 'completed' : ''}`}
                                    title={ev.title}
                                  >
                                    {ev.title}
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* TIMELINE SETTER */}
                    <div className="timeline-section">
                      <div className="pane-header" style={{ border: '1px solid var(--border-color)', borderBottom: 'none' }}>
                        <span>Virtual Timeline Setters</span>
                        <button onClick={() => setIsAddEventOpen(true)} className="btn btn-secondary" style={{ padding: '2px 6px', fontSize: '10px' }}>
                          <PlusIcon size={10} /> Add Milestone
                        </button>
                      </div>
                      <div className="milestones-list">
                        {project.timeline && project.timeline.length > 0 ? (
                          project.timeline.map(ev => (
                            <div key={ev.id} className="milestone-item">
                              <div className="milestone-header">
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <input 
                                    type="checkbox" 
                                    checked={ev.completed}
                                    onChange={() => handleToggleEventCompletion(ev.id)}
                                    className="checklist-checkbox"
                                  />
                                  <span className="milestone-title" style={{ textDecoration: ev.completed ? 'line-through' : 'none', color: ev.completed ? 'var(--text-muted)' : 'inherit' }}>
                                    {ev.title}
                                  </span>
                                </div>
                                <span className="milestone-date">{ev.date}</span>
                              </div>
                              <div className="milestone-footer">
                                <span className="project-item-meth" style={{ fontSize: '8px' }}>
                                  {ev.type || 'Scrum'}
                                </span>
                                <button 
                                  onClick={() => handleDeleteTimelineEvent(ev.id)} 
                                  className="card-action-btn"
                                  style={{ padding: '0 4px' }}
                                >
                                  <TrashIcon size={12} />
                                </button>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div style={{ padding: '24px', textAlign: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                            No milestones listed. Use the advisor to generate a schedule or click Add Milestone above.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: CHECKLIST */}
                {activeTab === 'checklist' && (
                  <div className="checklist-container">
                    <div className="checklist-header">
                      Project checklist & tasks
                    </div>
                    <div className="checklist-items">
                      {project.checklist && project.checklist.map(item => (
                        <div key={item.id} className="checklist-item">
                          <div className="checklist-item-left">
                            <input 
                              type="checkbox" 
                              checked={item.completed} 
                              onChange={() => handleToggleChecklist(item.id)}
                              className="checklist-checkbox"
                            />
                            <span className={`checklist-text ${item.completed ? 'completed' : ''}`}>
                              {item.text}
                            </span>
                          </div>
                          <button onClick={() => handleDeleteChecklistItem(item.id)} className="card-action-btn">
                            <TrashIcon size={14} />
                          </button>
                        </div>
                      ))}
                      {(!project.checklist || project.checklist.length === 0) && (
                        <div style={{ textAlign: 'center', color: 'var(--text-muted)', padding: '20px', fontFamily: 'var(--font-mono)' }}>
                          No checklist items. Create one below!
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleAddChecklistItem} style={{ padding: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '8px' }}>
                      <input 
                        type="text" 
                        placeholder="Add new task item..." 
                        value={newChecklistItem}
                        onChange={(e) => setNewChecklistItem(e.target.value)}
                        className="input-field"
                      />
                      <button type="submit" className="btn">Add</button>
                    </form>
                  </div>
                )}

                {/* TAB 4: XP CODE OPTIMIZER */}
                {activeTab === 'xp' && (
                  <div className="xp-layout">
                    <div className="xp-description">
                      <strong>Extreme Programming (XP) Code Optimization Assistant:</strong> Refactor code according to XP principles. XP focuses on high code quality, test-driven development (TDD), and refactoring code smells early. Input your code snippet below to scan for design flaws and receive an optimized version.
                    </div>
                    <div className="xp-workspace">
                      {/* Left Pane: Code Editor Input */}
                      <div className="code-editor-panel">
                        <div className="pane-header" style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <span>XP Source Input</span>
                          <button 
                            onClick={handleRunXPOptimizer} 
                            disabled={isXpLoading} 
                            className="btn" 
                            style={{ padding: '2px 8px', fontSize: '10px' }}
                          >
                            {isXpLoading ? 'Analyzing...' : 'Run XP Analysis'}
                          </button>
                        </div>
                        <textarea
                          value={xpCode}
                          onChange={(e) => setXpCode(e.target.value)}
                          className="code-textarea"
                          style={{ minHeight: '200px' }}
                        />
                        
                        <div className="pane-header" style={{ borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                          <span>Optimization History</span>
                        </div>
                        <div style={{ padding: '10px', overflowY: 'auto', flex: 1, maxHeight: '180px' }} className="opt-history-list">
                          {project.xpOptimizations && project.xpOptimizations.length > 0 ? (
                            project.xpOptimizations.map((opt, i) => (
                              <div 
                                key={opt.id} 
                                onClick={() => setActiveXpOpt(opt)}
                                className={`opt-history-item ${activeXpOpt?.id === opt.id ? 'active' : ''}`}
                                style={{ borderLeft: activeXpOpt?.id === opt.id ? '3px solid var(--border-color)' : '1px solid var(--border-muted)' }}
                              >
                                <span>Snippet #{i + 1}</span>
                                <span style={{ fontSize: '9px', color: 'var(--text-muted)' }}>{new Date(parseInt(opt.id.split('_').pop() || Date.now())).toLocaleTimeString()}</span>
                              </div>
                            ))
                          ) : (
                            <div style={{ color: 'var(--text-muted)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>No scan runs yet.</div>
                          )}
                        </div>
                      </div>

                      {/* Right Pane: Analysis Suggestions & Refactored output */}
                      <div className="optimization-panel">
                        <div className="pane-header" style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <span>XP Review Feedback & TDD Tests</span>
                        </div>
                        <div className="suggestion-content">
                          {activeXpOpt ? (
                            <div>
                              <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.4' }}>
                                {/* Basic Custom Markdown parser (simplified) */}
                                {activeXpOpt.suggestions.split('\n').map((line, i) => {
                                  if (line.startsWith('### ')) {
                                    return <h3 key={i}>{line.replace('### ', '')}</h3>;
                                  } else if (line.startsWith('- ')) {
                                    return <li key={i} style={{ marginLeft: '12px', marginBottom: '6px' }}>{line.replace('- ', '')}</li>;
                                  } else if (line.startsWith('```')) {
                                    return null; // Skip raw triple backticks in view container
                                  }
                                  return <p key={i} style={{ marginBottom: '8px' }}>{line}</p>;
                                })}
                              </div>
                              
                              <h3 style={{ marginTop: '16px' }}>XP Optimized Code Output</h3>
                              <div style={{ position: 'relative', marginTop: '8px' }}>
                                <pre style={{ margin: 0, padding: '12px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)' }}>
                                  <code>{activeXpOpt.optimizedCode}</code>
                                </pre>
                                <button 
                                  onClick={() => {
                                    navigator.clipboard.writeText(activeXpOpt.optimizedCode);
                                    alert("Copied code to clipboard!");
                                  }}
                                  className="btn btn-secondary"
                                  style={{ position: 'absolute', top: '8px', right: '8px', padding: '2px 6px', fontSize: '9px' }}
                                >
                                  <CopyIcon size={10} style={{ marginRight: '2px' }} /> Copy
                                </button>
                              </div>
                            </div>
                          ) : (
                            <div style={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                              Click "Run XP Analysis" to review code structure
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </section>
          </div>
        </main>
      ) : (
        <div className={`no-project-selected ${mobileActiveView !== 'sidebar' ? 'mobile-show' : 'mobile-hide'}`}>
          <FileTextIcon size={48} />
          <div>Select or create a workspace to begin methodology problem-solving.</div>
          <button onClick={() => setIsNewProjectModalOpen(true)} className="btn">
            Create Project
          </button>
        </div>
      )}

      {/* MODAL: Create New Project */}
      {isNewProjectModalOpen && (
        <div className="modal-overlay">
          <form onSubmit={handleCreateProject} className="modal-content">
            <div className="modal-header">Create Project Workspace</div>
            
            <div className="form-group">
              <label htmlFor="proj-name">Project Name</label>
              <input
                id="proj-name"
                type="text"
                required
                placeholder="e.g. Migration to Cloud Infrastructure"
                value={newProjName}
                onChange={(e) => setNewProjName(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="proj-desc">Brief Problem/Description</label>
              <textarea
                id="proj-desc"
                placeholder="e.g. Legacy architecture with high scalability issue but rigid safety requirements..."
                value={newProjDesc}
                onChange={(e) => setNewProjDesc(e.target.value)}
                className="input-field"
                style={{ height: '80px', resize: 'none' }}
              />
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                onClick={() => setIsNewProjectModalOpen(false)} 
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn">
                Create
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: Add Kanban Card */}
      {isAddCardOpen && (
        <div className="modal-overlay">
          <form onSubmit={handleAddKanbanCard} className="modal-content">
            <div className="modal-header">Add Task Card to {cardTargetCol.toUpperCase()}</div>
            
            <div className="form-group">
              <label htmlFor="card-title">Task Title</label>
              <input
                id="card-title"
                type="text"
                required
                placeholder="Describe the task..."
                value={newCardTitle}
                onChange={(e) => setNewCardTitle(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="card-desc">Description</label>
              <textarea
                id="card-desc"
                placeholder="Add detail specs (optional)..."
                value={newCardDesc}
                onChange={(e) => setNewCardDesc(e.target.value)}
                className="input-field"
                style={{ height: '60px', resize: 'none' }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="card-priority">Priority</label>
              <select
                id="card-priority"
                value={newCardPriority}
                onChange={(e) => setNewCardPriority(e.target.value)}
                className="input-field"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                onClick={() => setIsAddCardOpen(false)} 
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn">
                Add Card
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: Add Timeline Milestone */}
      {isAddEventOpen && (
        <div className="modal-overlay">
          <form onSubmit={handleAddTimelineEvent} className="modal-content">
            <div className="modal-header">Schedule Milestone</div>
            
            <div className="form-group">
              <label htmlFor="event-title">Milestone Title</label>
              <input
                id="event-title"
                type="text"
                required
                placeholder="e.g. Design review gate"
                value={newEventTitle}
                onChange={(e) => setNewEventTitle(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="event-date">Target Date</label>
              <input
                id="event-date"
                type="date"
                required
                value={newEventDate}
                onChange={(e) => setNewEventDate(e.target.value)}
                className="input-field"
              />
            </div>

            <div className="modal-footer">
              <button 
                type="button" 
                onClick={() => setIsAddEventOpen(false)} 
                className="btn btn-secondary"
              >
                Cancel
              </button>
              <button type="submit" className="btn">
                Add Event
              </button>
            </div>
          </form>
        </div>
      )}

      {/* AI Settings Modal */}
      {isSettingsOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">AI Settings Configuration</div>
            <div className="form-group">
              <label htmlFor="api-key-input">Gemini API Key</label>
              <input
                id="api-key-input"
                type="password"
                placeholder="AIzaSy..."
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
                className="input-field"
              />
              <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px' }}>
                Enter your Google Gemini API Key to enable the real-time AI Agent. The key is stored safely in your local browser storage.
              </p>
            </div>
            <div className="modal-footer">
              <button 
                onClick={() => setIsSettingsOpen(false)} 
                className="btn btn-secondary"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  localStorage.setItem('gemini_api_key', apiKeyInput);
                  setIsSettingsOpen(false);
                  alert("Settings saved successfully!");
                }} 
                className="btn"
              >
                Save Key
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default App;
