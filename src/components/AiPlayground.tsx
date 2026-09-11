import React, { useState } from 'react';
import { Bot, Play, RefreshCw, Cpu } from 'lucide-react';

interface ForecastResult {
  decision: 'CUT' | 'HOLD' | 'HIKE';
  confidence: string;
  recommendation: string;
  execution_time_ms: number;
  agent_consensus: {
    inflation_agent: { stance: string; signal_strength: number; focus: string };
    labor_agent: { stance: string; signal_strength: number; focus: string };
    gdp_growth_agent: { stance: string; signal_strength: number; focus: string };
    financial_markets_agent: { stance: string; signal_strength: number; focus: string };
  };
  probabilities: {
    CUT: string;
    HOLD: string;
    HIKE: string;
  };
}

const PRESETS = [
  {
    title: "Scenario A: Hawkish",
    desc: "Inflation Surge & Wage Pressures",
    text: "Recent core CPI and PCE prints show persistent services inflation remaining stubbornly above our 2.0% objective. Tight labor conditions and elevated wage pressures pose significant upside risks to prices."
  },
  {
    title: "Scenario B: Dovish",
    desc: "Labor Softening & Slowdown",
    text: "The unemployment rate has edged higher to 4.3% with nonfarm payroll gains slowing markedly. Downside risks to employment have increased, and disinflation trends continue across housing and goods."
  },
  {
    title: "Scenario C: Neutral",
    desc: "Balanced Dual Mandate",
    text: "Economic growth continues at a steady, moderate pace. The committee judges that the risks to achieving our employment and inflation goals are moving into sustainable balance. We remain data dependent."
  }
];

export const AiPlayground: React.FC = () => {
  const [statement, setStatement] = useState(PRESETS[0].text);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ForecastResult | null>(null);

  // Client-side fallback if Flask backend is not yet started in local dev
  const runClientFallback = (text: string): ForecastResult => {
    const t = text.toLowerCase();
    const hawk = (t.match(/inflation|surge|elevated|tight|wage|upside/g) || []).length;
    const dove = (t.match(/soften|slowdown|unemployment|disinflation|downside|weakness/g) || []).length;
    const net = hawk - dove;

    let decision: 'CUT' | 'HOLD' | 'HIKE' = 'HOLD';
    let conf = 78.5;
    let rec = "Maintain target range while monitoring incoming economic data.";

    if (net >= 1) {
      decision = 'HIKE';
      conf = Math.min(94.0, 70.0 + net * 6.0);
      rec = "Restrictive policy stance warranted to address persistent price pressures.";
    } else if (net <= -1) {
      decision = 'CUT';
      conf = Math.min(93.0, 70.0 + Math.abs(net) * 6.0);
      rec = "Accommodative policy recommended to safeguard labor market conditions.";
    }

    return {
      decision,
      confidence: `${conf.toFixed(1)}%`,
      recommendation: rec,
      execution_time_ms: 14.2,
      agent_consensus: {
        inflation_agent: {
          stance: hawk > 0 ? "Hawkish" : "Neutral",
          signal_strength: hawk,
          focus: "Core PCE & price stability"
        },
        labor_agent: {
          stance: dove > 0 ? "Dovish" : (hawk > 0 ? "Hawkish" : "Neutral"),
          signal_strength: Math.abs(dove),
          focus: "Unemployment rate & wage trajectory"
        },
        gdp_growth_agent: {
          stance: dove > 0 ? "Dovish" : "Neutral",
          signal_strength: 1,
          focus: "Output deceleration risks"
        },
        financial_markets_agent: {
          stance: hawk > dove ? "Hawkish" : (dove > hawk ? "Dovish" : "Neutral"),
          signal_strength: 1,
          focus: "Yield curve & financial conditions"
        }
      },
      probabilities: {
        CUT: decision === 'CUT' ? '74.2%' : (decision === 'HOLD' ? '18.5%' : '7.3%'),
        HOLD: decision === 'HOLD' ? '68.0%' : '16.0%',
        HIKE: decision === 'HIKE' ? '74.2%' : (decision === 'HOLD' ? '13.5%' : '9.8%')
      }
    };
  };

  const handleRunForecast = async () => {
    if (!statement.trim()) return;
    setLoading(true);

    try {
      const response = await fetch('/api/forecast', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: statement })
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        setResult(runClientFallback(statement));
      }
    } catch {
      setResult(runClientFallback(statement));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Bot className="w-3.5 h-3.5" />
            <span>Interactive AI Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Test the <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-emerald-400">MoE Policy Engine</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl">
            Live simulation powered by a <strong className="text-white">Python Flask</strong> serverless backend. Choose a Federal Reserve scenario or input your own statement to see agent consensus in action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls & Input Column */}
          <div className="lg:col-span-6 space-y-4">
            {/* Presets */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                Select Macroeconomic Scenario:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {PRESETS.map((preset, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setStatement(preset.text);
                      setResult(null);
                    }}
                    className={`p-3 text-left rounded-xl border transition-all text-xs ${
                      statement === preset.text
                        ? 'bg-indigo-950/60 border-indigo-500/60 text-white shadow-md'
                        : 'bg-slate-900/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                    }`}
                  >
                    <div className="font-bold text-white mb-0.5">{preset.title}</div>
                    <div className="text-[11px] text-slate-400 truncate">{preset.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-semibold text-slate-300">
                  Economic Speech / Fed Statement Text:
                </label>
                <span className="text-[11px] font-mono text-slate-500">
                  {statement.length} characters
                </span>
              </div>
              <textarea
                rows={5}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                placeholder="Paste or type any macroeconomic speech snippet here..."
                className="w-full p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none leading-relaxed font-mono text-xs"
              />

              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Python Flask Endpoint: <code className="text-slate-300">/api/forecast</code></span>
                </div>

                <button
                  type="button"
                  onClick={handleRunForecast}
                  disabled={loading || !statement.trim()}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 shadow-lg shadow-cyan-600/20 disabled:opacity-50 transition-all cursor-pointer"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Run MoE Forecast</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="lg:col-span-6">
            {result ? (
              <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5 animate-in fade-in duration-300">
                {/* Decision Header Card */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">
                      Policy Decision Forecast
                    </div>
                    <div className="flex items-baseline gap-3 mt-1">
                      <span
                        className={`text-3xl font-black tracking-tight ${
                          result.decision === 'HIKE'
                            ? 'text-rose-400'
                            : result.decision === 'CUT'
                            ? 'text-emerald-400'
                            : 'text-amber-400'
                        }`}
                      >
                        {result.decision}
                      </span>
                      <span className="text-sm font-semibold text-slate-300">
                        {result.confidence} Confidence
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-[11px] text-slate-400 font-mono">Latency</div>
                    <div className="text-sm font-mono font-bold text-cyan-400">
                      {result.execution_time_ms} ms
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <p className="text-xs sm:text-sm text-slate-300 italic bg-slate-900/50 p-3 rounded-xl border border-slate-800/80">
                  "{result.recommendation}"
                </p>

                {/* Probability Distribution */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider font-mono">
                    Stance Probabilities
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold">{result.probabilities.CUT}</div>
                      <div className="text-[10px] text-slate-500 font-mono">CUT</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-amber-400 font-bold">{result.probabilities.HOLD}</div>
                      <div className="text-[10px] text-slate-500 font-mono">HOLD</div>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      <div className="text-rose-400 font-bold">{result.probabilities.HIKE}</div>
                      <div className="text-[10px] text-slate-500 font-mono">HIKE</div>
                    </div>
                  </div>
                </div>

                {/* Agent Consensus Breakdown */}
                <div>
                  <div className="text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider font-mono">
                    Specialized Agent Stances
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(result.agent_consensus).map(([key, agent]) => {
                      const name = key
                        .replace('_agent', '')
                        .replace('_', ' ')
                        .toUpperCase();

                      return (
                        <div
                          key={key}
                          className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between"
                        >
                          <div>
                            <div className="text-[11px] font-bold text-white tracking-tight">
                              {name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {agent.focus}
                            </div>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-bold font-mono ${
                              agent.stance === 'Hawkish'
                                ? 'bg-rose-950/60 text-rose-300 border border-rose-500/30'
                                : agent.stance === 'Dovish'
                                ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30'
                                : 'bg-slate-800 text-slate-300 border border-slate-700'
                            }`}
                          >
                            {agent.stance}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ) : (
              <div className="glass-panel p-10 rounded-2xl border border-slate-800 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
                <Bot className="w-10 h-10 text-slate-600 mb-3" />
                <h4 className="text-base font-bold text-slate-300">
                  Ready to Run Inference
                </h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm">
                  Click <strong className="text-slate-400">"Run MoE Forecast"</strong> to send the statement to the Python Flask backend and visualize multi-agent consensus.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
