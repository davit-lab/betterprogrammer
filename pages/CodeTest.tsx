
import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, RotateCcw, ShieldCheck, Terminal, 
  Settings, Cpu, Globe, Database, Code, 
  FileJson, FileCode, CheckCircle2, Eye, Monitor
} from 'lucide-react';

type Language = 'javascript' | 'python' | 'cpp' | 'java' | 'html' | 'sql';

interface LanguageConfig {
  name: string;
  icon: React.ReactNode;
  extension: string;
  defaultCode: string;
  color: string;
}

const LANGUAGES: Record<Language, LanguageConfig> = {
  javascript: {
    name: 'JavaScript',
    icon: <FileJson size={18} />,
    extension: '.js',
    color: '#f7df1e',
    defaultCode: `// BetterProgrammer JS Environment\nfunction greetUser(name) {\n  console.log("მოგესალმებით, " + name + "!");\n}\n\ngreetUser("დეველოპერო");`
  },
  python: {
    name: 'Python',
    icon: <FileCode size={18} />,
    extension: '.py',
    color: '#3776ab',
    defaultCode: `# BetterProgrammer Python Environment\ndef calculate_discount(price, percent):\n    return price * (1 - percent/100)\n\nprint(f"ახალი ფასი: {calculate_discount(100, 20)}₾")`
  },
  cpp: {
    name: 'C++',
    icon: <Code size={18} />,
    extension: '.cpp',
    color: '#00599c',
    defaultCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Hello BetterProgrammer World!" << endl;\n    return 0;\n}`
  },
  java: {
    name: 'Java',
    icon: <Globe size={18} />,
    extension: '.java',
    color: '#007396',
    defaultCode: `public class Main {\n    public static void main(String[] args) {\n        System.out.println("Java Environment Active");\n    }\n}`
  },
  html: {
    name: 'HTML/CSS',
    icon: <Globe size={18} />,
    extension: '.html',
    color: '#e34f26',
    defaultCode: `<!DOCTYPE html>\n<html>\n<head>\n  <style>\n    body {\n      background: #081d2d;\n      color: white;\n      font-family: sans-serif;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 90vh;\n      margin: 0;\n    }\n    .card {\n      background: rgba(255,255,255,0.1);\n      padding: 2rem;\n      border-radius: 20px;\n      border: 1px solid rgba(255,255,255,0.2);\n      text-align: center;\n      box-shadow: 0 20px 50px rgba(0,0,0,0.3);\n    }\n    h1 { color: #00ff41; margin-bottom: 10px; }\n    p { opacity: 0.7; }\n  </style>\n</head>\n<body>\n  <div class="card">\n    <h1>BetterProgrammer</h1>\n    <p>Live Preview Environment</p>\n  </div>\n</body>\n</html>`
  },
  sql: {
    name: 'SQL',
    icon: <Database size={18} />,
    extension: '.sql',
    color: '#336791',
    defaultCode: `SELECT name, price \nFROM products \nWHERE category = 'Front-end'\nORDER BY price DESC;`
  }
};

const CodeTest: React.FC = () => {
  const [activeLang, setActiveLang] = useState<Language>('javascript');
  const [codes, setCodes] = useState<Record<Language, string>>(
    Object.fromEntries(Object.entries(LANGUAGES).map(([k, v]) => [k, v.defaultCode])) as Record<Language, string>
  );
  const [output, setOutput] = useState<{msg: string, type: 'info' | 'success' | 'error'}[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [outputTab, setOutputTab] = useState<'terminal' | 'preview'>('terminal');
  const [previewContent, setPreviewContent] = useState('');

  // Automatically switch to preview tab when HTML is selected
  useEffect(() => {
    if (activeLang === 'html') {
      setOutputTab('preview');
      setPreviewContent(codes['html']);
    } else {
      setOutputTab('terminal');
    }
  }, [activeLang]);

  const runCode = () => {
    setIsRunning(true);
    
    if (activeLang === 'html') {
      setPreviewContent(codes['html']);
      setOutput(prev => [...prev, { msg: '> Rendering HTML/CSS Preview...', type: 'info' }]);
    } else {
      const newLog = { msg: `> Running ${LANGUAGES[activeLang].name} engine...`, type: 'info' as const };
      setOutput(prev => [...prev, newLog]);
    }

    setTimeout(() => {
      const result = { 
        msg: `Execution Finished. Status: ${activeLang === 'sql' ? '[Success: 3 rows returned]' : 'Success (0)'}`, 
        type: 'success' as const 
      };
      setOutput(prev => [...prev, result]);
      setIsRunning(false);
    }, 800);
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCodes(prev => ({ ...prev, [activeLang]: e.target.value }));
  };

  return (
    <div className="min-h-screen pt-28 pb-10 px-4 md:px-10 bg-[#050c14]">
      <div className="max-w-[1600px] mx-auto mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl md:text-5xl font-black tracking-tighter">IDE <span className="text-blue-500">Playground</span></h1>
          <p className="text-white/40 text-sm font-medium uppercase tracking-widest">BetterProgrammer Virtual Cloud Environment</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={runCode} 
            disabled={isRunning}
            className="btn-grad px-8 py-3 rounded-xl font-black flex items-center gap-2 text-sm shadow-lg shadow-blue-500/20"
          >
            <Play size={16} fill="currentColor" /> {isRunning ? 'გაშვება...' : 'RUN CODE'}
          </button>
          <button 
            onClick={() => setOutput([])}
            className="glass p-3 rounded-xl hover:bg-white/5 transition-colors border border-white/10"
          >
            <RotateCcw size={18} className="text-white/60" />
          </button>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr_450px] gap-4 h-[75vh]">
        
        {/* SIDEBAR */}
        <div className="glass rounded-2xl border border-white/5 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 bg-black/20 flex items-center gap-2">
            <Settings size={14} className="text-white/40" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Environments</span>
          </div>
          <div className="flex-1 p-2 space-y-1 overflow-y-auto">
            {(Object.keys(LANGUAGES) as Language[]).map(key => (
              <button
                key={key}
                onClick={() => setActiveLang(key)}
                className={`w-full flex items-center justify-between p-3 rounded-xl transition-all group ${
                  activeLang === key ? 'bg-blue-600 text-white shadow-xl' : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span style={{ color: activeLang === key ? 'white' : LANGUAGES[key].color }}>
                    {LANGUAGES[key].icon}
                  </span>
                  <span className="text-sm font-bold">{LANGUAGES[key].name}</span>
                </div>
                <span className="text-[10px] font-mono opacity-40 group-hover:opacity-100">{LANGUAGES[key].extension}</span>
              </button>
            ))}
          </div>
          <div className="p-4 bg-white/5 mt-auto flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">Server: Online</span>
          </div>
        </div>

        {/* EDITOR AREA */}
        <div className="glass rounded-2xl border border-white/5 flex flex-col relative overflow-hidden group">
          <div className="flex items-center bg-black/40 border-b border-white/5">
            <div className="flex items-center gap-2 px-6 py-3 border-r border-white/5 bg-[#081d2d]">
               <span style={{ color: LANGUAGES[activeLang].color }}>{LANGUAGES[activeLang].icon}</span>
               <span className="text-xs font-bold text-white/80">main{LANGUAGES[activeLang].extension}</span>
            </div>
          </div>

          <textarea
            value={codes[activeLang]}
            onChange={handleCodeChange}
            spellCheck={false}
            className="flex-1 bg-transparent p-10 font-mono text-sm leading-relaxed text-blue-100/90 outline-none resize-none selection:bg-blue-500/30"
          />

          <div className="flex items-center justify-between px-6 py-2 bg-blue-600/5 border-t border-white/5">
             <div className="flex gap-6 text-[10px] font-bold text-white/40 uppercase tracking-widest">
               <span>Spaces: 4</span>
               <span>UTF-8</span>
             </div>
             <div className="flex items-center gap-2 text-green-400 text-[10px] font-bold uppercase tracking-widest">
               <ShieldCheck size={12} /> Secured Sandbox
             </div>
          </div>
        </div>

        {/* OUTPUT AREA (TERMINAL & PREVIEW) */}
        <div className="flex flex-col gap-4">
          <div className="flex-1 glass rounded-2xl border border-white/5 overflow-hidden flex flex-col">
            <div className="flex bg-black/20 border-b border-white/5">
              <button 
                onClick={() => setOutputTab('terminal')}
                className={`flex-1 p-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all ${outputTab === 'terminal' ? 'bg-white/5 text-blue-400 border-b-2 border-blue-500' : 'text-white/40 hover:text-white'}`}
              >
                <Terminal size={14} /> Terminal
              </button>
              <button 
                onClick={() => setOutputTab('preview')}
                className={`flex-1 p-4 flex items-center justify-center gap-2 text-[10px] font-bold uppercase tracking-widest transition-all ${outputTab === 'preview' ? 'bg-white/5 text-blue-400 border-b-2 border-blue-500' : 'text-white/40 hover:text-white'}`}
              >
                <Eye size={14} /> Preview
              </button>
            </div>

            <div className="flex-1 relative">
              {outputTab === 'terminal' ? (
                <div className="absolute inset-0 p-6 font-mono text-xs overflow-y-auto space-y-3">
                  {output.length === 0 ? (
                    <div className="text-white/10 italic">Ready for execution...</div>
                  ) : (
                    output.map((line, i) => (
                      <div key={i} className={`${line.type === 'error' ? 'text-red-400' : line.type === 'success' ? 'text-green-400' : 'text-blue-400'} leading-relaxed`}>
                        {line.msg}
                      </div>
                    ))
                  )}
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col bg-white overflow-hidden animate-in fade-in duration-500">
                  {/* Browser Bar Mockup */}
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-3">
                     <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                     </div>
                     <div className="flex-1 bg-white rounded-md text-[10px] text-gray-400 px-3 py-1 truncate flex items-center gap-2">
                        <Monitor size={10} /> http://localhost:3000/preview
                     </div>
                  </div>
                  <iframe
                    title="Live Preview"
                    srcDoc={previewContent}
                    sandbox="allow-scripts"
                    className="w-full h-full border-none bg-white"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="glass p-6 rounded-2xl border border-white/5 space-y-4">
             <div className="flex items-center gap-3">
               <div className="p-2 bg-blue-500/10 rounded-lg"><CheckCircle2 className="text-blue-400" size={18} /></div>
               <div>
                 <p className="text-xs font-bold text-white uppercase tracking-widest">Auto-Rendering</p>
                 <p className="text-[10px] text-white/30">Sandboxed Environment</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
    </div>
  );
};

export default CodeTest;
