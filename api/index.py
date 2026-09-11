import sys
import time
import re
from flask import Flask, request, jsonify

try:
    from flask_cors import CORS
    has_cors = True
except ImportError:
    has_cors = False

app = Flask(__name__)

if has_cors:
    CORS(app)

@app.after_request
def add_cors_headers(response):
    response.headers.setdefault("Access-Control-Allow-Origin", "*")
    response.headers.setdefault("Access-Control-Allow-Headers", "Content-Type,Authorization")
    response.headers.setdefault("Access-Control-Allow-Methods", "GET,POST,OPTIONS")
    return response

@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "service": "Aradhya Yadav Portfolio AI Backend",
        "python_version": sys.version,
        "engine": "Multi-Agent Mixture-of-Experts (MoE) Inference Simulator",
        "available_agents": [
            "Inflation Dynamics Agent",
            "Labor Market & Employment Agent",
            "GDP & Economic Growth Agent",
            "Financial Markets & Liquidity Agent",
            "Supply Chain & Commodities Agent",
            "Global Macro & Currency Agent"
        ]
    })

@app.route('/api/forecast', methods=['POST', 'OPTIONS'])
def forecast_policy():
    if request.method == 'OPTIONS':
        return '', 204

    start_time = time.time()
    data = request.get_json(silent=True) or {}
    statement = data.get("text", "").strip()

    if not statement:
        return jsonify({
            "error": "No statement provided. Please supply an economic statement."
        }), 400

    text_lower = statement.lower()

    hawkish_signals = [
        "inflation", "surge", "elevated", "accelerate", "rate hike", "hike",
        "tight labor", "wage pressure", "overheating", "restrictive", "sticky",
        "higher for longer", "upside risk", "tariff", "cpi increase"
    ]
    dovish_signals = [
        "softening", "slowdown", "weakness", "recession", "rate cut", "cut",
        "unemployment rising", "cooling", "disinflation", "deteriorat", "headwind",
        "easing", "downside risk", "layoffs", "slack", "contraction"
    ]
    neutral_signals = [
        "balance", "moderate", "data dependent", "steady", "hold", "gradual",
        "appropriate", "monitor", "dual mandate", "stable", "projected"
    ]

    inf_hawk = sum(1 for w in ["inflation", "cpi", "pce", "prices", "elevated", "sticky", "surge"] if w in text_lower)
    inf_dove = sum(1 for w in ["disinflation", "cooling prices", "deflation", "falling cpi"] if w in text_lower)
    inf_score = inf_hawk - inf_dove

    labor_hawk = sum(1 for w in ["tight labor", "wage growth", "low unemployment", "job gains", "payroll surge"] if w in text_lower)
    labor_dove = sum(1 for w in ["unemployment rising", "layoffs", "job loss", "softening labor", "labor slack"] if w in text_lower)
    labor_score = labor_hawk - labor_dove

    gdp_hawk = sum(1 for w in ["strong growth", "expansion", "overheating", "robust consumption"] if w in text_lower)
    gdp_dove = sum(1 for w in ["slowdown", "contraction", "recession", "weak gdp", "sluggish"] if w in text_lower)
    gdp_score = gdp_hawk - gdp_dove

    fin_hawk = sum(1 for w in ["tight conditions", "yield surge", "excessive liquidity"] if w in text_lower)
    fin_dove = sum(1 for w in ["stress", "volatility", "credit crunch", "banking weakness"] if w in text_lower)
    fin_score = fin_hawk - fin_dove

    total_hawk = sum(1 for w in hawkish_signals if re.search(r'\b' + re.escape(w), text_lower))
    total_dove = sum(1 for w in dovish_signals if re.search(r'\b' + re.escape(w), text_lower))
    total_neutral = sum(1 for w in neutral_signals if re.search(r'\b' + re.escape(w), text_lower))

    net_score = (total_hawk * 1.5) - (total_dove * 1.5)

    if net_score >= 1.5:
        decision = "HIKE"
        confidence = min(96.0, 68.0 + (net_score * 7.0))
        recommendation = "Restrictive policy recommended to curb upside inflation pressures."
    elif net_score <= -1.5:
        decision = "CUT"
        confidence = min(95.0, 68.0 + (abs(net_score) * 7.0))
        recommendation = "Accommodative policy recommended to protect employment and stimulate growth."
    else:
        decision = "HOLD"
        confidence = max(72.0, 85.0 - abs(net_score) * 5.0)
        recommendation = "Maintain current target federal funds rate while monitoring incoming economic prints."

    elapsed_ms = round((time.time() - start_time) * 1000, 2)

    return jsonify({
        "decision": decision,
        "confidence": f"{round(confidence, 1)}%",
        "recommendation": recommendation,
        "input_preview": statement[:120] + "..." if len(statement) > 120 else statement,
        "execution_time_ms": elapsed_ms,
        "agent_consensus": {
            "inflation_agent": {
                "stance": "Hawkish" if inf_score > 0 else ("Dovish" if inf_score < 0 else "Neutral"),
                "signal_strength": abs(inf_score),
                "focus": "Price stability & PCE trajectory"
            },
            "labor_agent": {
                "stance": "Hawkish" if labor_score > 0 else ("Dovish" if labor_score < 0 else "Neutral"),
                "signal_strength": abs(labor_score),
                "focus": "Nonfarm payrolls & wage pressure"
            },
            "gdp_growth_agent": {
                "stance": "Hawkish" if gdp_score > 0 else ("Dovish" if gdp_score < 0 else "Neutral"),
                "signal_strength": abs(gdp_score),
                "focus": "Quarterly output & consumption"
            },
            "financial_markets_agent": {
                "stance": "Hawkish" if fin_score > 0 else ("Dovish" if fin_score < 0 else "Neutral"),
                "signal_strength": abs(fin_score),
                "focus": "Treasury yield curve & credit spreads"
            }
        },
        "probabilities": {
            "CUT": f"{round(max(5.0, min(85.0, 33.3 - net_score * 15)), 1)}%",
            "HOLD": f"{round(max(10.0, min(80.0, 33.4 - abs(net_score) * 10 if abs(net_score) > 1.5 else 60.0)), 1)}%",
            "HIKE": f"{round(max(5.0, min(85.0, 33.3 + net_score * 15)), 1)}%"
        }
    })

@app.route('/api/contact', methods=['POST', 'OPTIONS'])
def handle_contact():
    if request.method == 'OPTIONS':
        return '', 204

    data = request.get_json(silent=True) or {}
    name = data.get("name", "").strip()
    email = data.get("email", "").strip()
    message = data.get("message", "").strip()

    if not name or not email or not message:
        return jsonify({"error": "Name, email, and message are required."}), 400

    print(f"[RECRUITER INQUIRY] From: {name} ({email}) | Message: {message[:60]}")

    return jsonify({
        "success": True,
        "message": f"Thank you, {name}! Your message has been received by Aradhya's server."
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
