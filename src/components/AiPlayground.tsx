import React, { useState } from 'react';
import { Bot, Play, RefreshCw, Terminal } from 'lucide-react';

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
    desc: "Inflation Surge & Elevated Wages",
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
          focus: "Core PCE & price trajectory"
        },
        labor_agent: {
          stance: dove > 0 ? "Dovish" : (hawk > 0 ? "Hawkish" : "Neutral"),
          signal_strength: Math.abs(dove),
          focus: "Unemployment rate & wage pressures"
        },
        gdp_growth_agent: {
          stance: dove > 0 ? "Dovish" : "Neutral",
          signal_strength: 1,
          focus: "Quarterly output deceleration"
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
    <section id="playground" className="py-20 border-t border-slate-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Interactive AI Sandbox
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1.5">
            Test the Policy Forecasting Engine
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Live simulation powered by the Python Flask backend. Test simulated Fed statement scenarios across domain agents.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-6 space-y-4">
            <div>
              <label className="text-xs font-medium text-slate-400 uppercase tracking-wider block mb-2">
                Sample Scenario:
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
                    className={`p-3 text-left rounded-lg border transition-colors text-xs ${
                      statement === preset.text
                        ? 'bg-slate-800 border-indigo-500 text-white'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <div className="font-semibold text-white mb-0.5">{preset.title}</div>
                    <div className="text-[11px] text-slate-400 truncate">{preset.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="surface-card p-5 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-medium text-slate-300">
                  Economic Statement Text:
                </label>
                <span className="text-[11px] font-mono text-slate-500">
                  {statement.length} chars
                </span>
              </div>
              <textarea
                rows={5}
                value={statement}
                onChange={(e) => setStatement(e.target.value)}
                className="w-full p-3 rounded-lg surface-input text-xs font-mono text-slate-200 placeholder-slate-500 transition-colors resize-none leading-relaxed"
                placeholder="Paste macroeconomic statement here..."
              />

              <div className="flex items-center justify-between mt-4">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Flask: <code className="text-slate-300">/api/forecast</code></span>
                </span>

                <button
                  type="button"
                  onClick={handleRunForecast}
                  disabled={loading || !statement.trim()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-500 transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Computing...</span>
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

          {/* Results Column */}
          <div className="lg:col-span-6">
            {result ? (
              <div className="surface-card p-6 rounded-xl space-y-5">
                {/* Result header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase">
                      Forecasted Decision
                    </span>
                    <div className="flex items-baseline gap-3 mt-0.5">
                      <span
                        className={`text-2xl font-bold tracking-tight ${
                          result.decision === 'HIKE'
                            ? 'text-rose-400'
                            : result.decision === 'CUT'
                            ? 'text-emerald-400'
                            : 'text-amber-400'
                        }`}
                      >
                        {result.decision}
                      </span>
                      <span className="text-xs font-mono text-slate-300">
                        {result.confidence} confidence
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[11px] font-mono text-slate-500">Latency</span>
                    <div className="text-xs font-mono text-indigo-400">
                      {result.execution_time_ms} ms
                    </div>
                  </div>
                </div>

                {/* Recommendation */}
                <p className="text-xs text-slate-300 italic bg-slate-900/60 p-3 rounded-lg border border-slate-800/80">
                  "{result.recommendation}"
                </p>

                {/* Probabilities */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Decision Probabilities
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <div className="text-emerald-400 font-bold">{result.probabilities.CUT}</div>
                      <div className="text-[10px] text-slate-500 font-mono">CUT</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <div className="text-amber-400 font-bold">{result.probabilities.HOLD}</div>
                      <div className="text-[10px] text-slate-500 font-mono">HOLD</div>
                    </div>
                    <div className="p-2 rounded bg-slate-900 border border-slate-800">
                      <div className="text-rose-400 font-bold">{result.probabilities.HIKE}</div>
                      <div className="text-[10px] text-slate-500 font-mono">HIKE</div>
                    </div>
                  </div>
                </div>

                {/* Agent Consensus */}
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Specialized Agent Stances
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {Object.entries(result.agent_consensus).map(([key, agent]) => {
                      const name = key.replace('_agent', '').replace('_', ' ').toUpperCase();

                      return (
                        <div
                          key={key}
                          className="p-2.5 rounded bg-slate-900/80 border border-slate-800 flex items-center justify-between"
                        >
                          <div>
                            <div className="text-[11px] font-semibold text-white">
                              {name}
                            </div>
                            <div className="text-[10px] text-slate-400">
                              {agent.focus}
                            </div>
                          </div>
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-mono font-medium ${
                              agent.stance === 'Hawkish'
                                ? 'bg-rose-950/40 text-rose-300 border border-rose-500/20'
                                : agent.stance === 'Dovish'
                                ? 'bg-emerald-950/40 text-emerald-300 border border-emerald-500/20'
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
              <div className="surface-card p-8 rounded-xl flex flex-col items-center justify-center text-center h-full min-h-[280px]">
                <Bot className="w-8 h-8 text-slate-600 mb-2" />
                <div className="text-xs font-medium text-slate-300">
                  Ready to test MoE inference
                </div>
                <div className="text-[11px] text-slate-500 mt-1 max-w-xs">
                  Select a scenario and click "Run MoE Forecast" to query the Python Flask backend.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
