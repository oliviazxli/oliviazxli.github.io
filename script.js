function toggleExpDetail(id) {
    const detail = document.getElementById(id);
    const card = detail.closest('.exp-card');
    const btn = card.querySelector('.show-more-btn');
    const isOpen = detail.classList.contains('open');
    detail.classList.toggle('open');
    btn.textContent = isOpen ? 'Show More ↓' : 'Show Less ↑';
}

const projectData = {
    cv: {
        title: "Monitoring an Urban Site Using a Video Stream",
        tags: ["Group Project", "YOLOv26s", "Computer Vision", "Streamlit"],
        content: `
            <p style="margin-bottom:6px; font-size:13px; color:#888; font-weight:600;">Jan 2026 – Present</p>
            <p style="margin-bottom:20px;">Built a real-time smart video detection system combining YOLOv26s object tracking with KNN-based background subtraction, deployed as an interactive Streamlit dashboard with live alerting.</p>
            <h4 style="margin-bottom:10px;">Key Deliverables:</h4>
            <ul style="margin-left:20px; line-height:1.8;">
                <li><strong>Dataset:</strong> VIRAT</li>
                <li><strong>Detection & Tracking:</strong> YOLOv26s + ByteTrack with persistent ID assignment across frames, filtering for persons, cars, buses, and trucks.</li>
                <li><strong>Motion Filtering:</strong> Static median background + KNN subtractor to suppress false positives — only objects with genuine foreground motion are counted.</li>
                <li><strong>ROI Monitoring:</strong> Configurable region-of-interest with per-zone person count and motion density thresholds, triggering visual alerts on violation.</li>
                <li><strong>Crowd Alerting:</strong> Real-time banner alert when global person count or ROI density exceeds user-defined limits, with on-frame text overlay.</li>
                <li><strong>Live Dashboard:</strong> Streamlit UI with side-by-side annotated video + motion mask, per-frame metrics, unique object counters, and processing progress.</li>
                <li><strong>My Contribution:</strong> Implemented ByteTrack-based persistent ID tracking and designed the configurable ROI monitoring module with per-zone alerting.</li>
            </ul>
        `
    },
    nlp: {
        title: "Checkers AI — Deep Q-Learning Board Game Agent",
        tags: ["Individual Project","Reinforcement Learning", "PyTorch", "Pygame", "DQN"],
        content: `
            <p style="margin-bottom:6px; font-size:13px; color:#888; font-weight:600;">Jan 2026 – Mar 2026</p>
            <p style="margin-bottom:20px;">Implemented an International Checkers game where a human player competes against an AI agent trained with Deep Q-Learning. The agent learns strategic move selection through self-play and a custom reward shaping system.</p>
            <h4 style="margin-bottom:10px;">Key Deliverables:</h4>
            <ul style="margin-left:20px; line-height:1.8;">
                <li><strong>DQN Architecture:</strong> Dueling DQN with a 256-dim input and four fully connected layers (512→1024→512→256), split into Value and Advantage heads for improved training stability.</li>
                <li><strong>State Encoding:</strong> Board represented as four 8×8 binary planes (own/opponent men and kings), flattened to a 256-dim vector with perspective normalization.</li>
                <li><strong>Reward Shaping:</strong> Survival penalty, non-linear progressive advancement reward (7−dist)²/8.0, and exponential capture reward (captured²×3.0) to incentivize aggressive yet strategic play.</li>
                <li><strong>Training:</strong> 40,000 self-play episodes, ε-greedy exploration decaying to 0.05, replay buffer of 100,000, target network sync every 500 steps.</li>
                <li><strong>GUI:</strong> Pygame interface with highlight system for legal moves, mandatory-capture prompts, and real-time dashboard showing game status and results.</li>
            </ul>
            <div style="margin-top:28px;">
                <a href="https://github.com/oliviazxli/Checker_Q-Learning" target="_blank" style="
                    display:inline-flex; align-items:center; gap:8px;
                    background:#000; color:#fff;
                    padding:12px 24px; border-radius:50px;
                    font-size:14px; font-weight:700;
                    text-decoration:none;
                    transition:opacity 0.2s;
                " onmouseover="this.style.opacity=0.75" onmouseout="this.style.opacity=1">
                    View Project ↗
                </a>
            </div>
        `
    },
    pcn: {
        title: "Application of 3D Point Cloud Completion for Underwater Structures",
        tags: ["CVIC2025", "Computer Vision", "Oral Presenter"],
        content: `
            <p style="margin-bottom:6px; font-size:13px; color:#888; font-weight:600;">Oct 2025 – Dec 2025</p>
            <p style="margin-bottom:20px;">Addressed the challenge of incomplete 3D point cloud data in underwater structure detection caused by occlusion, shadows, and scanning angle limitations.</p>
            <h4 style="margin-bottom:10px;">Key Deliverables:</h4>
            <ul style="margin-left:20px; line-height:1.8;">
                <li><strong>Problem:</strong> Solved the inability to train completion networks due to absence of ground truth (complete 3D models) in practical underwater engineering.</li>
                <li><strong>Data:</strong> Real-world sonar scans (Blue View BV5000) from Keziliao Fishing Port, featuring dock pillars and harbor environments.</li>
                <li><strong>Approach:</strong> Integrated RANSAC to estimate 3D reference models from partial 2.5D data, serving as self-supervised training samples for a Point Completion Network (PCN).</li>
                <li><strong>Outcome:</strong> Enabled high-precision 3D reconstruction without manual labels, outperforming traditional 3D-PatchMatch in geometric accuracy and density consistency.</li>
                <li><strong>My Contribution:</strong> Developed the RANSAC-based modeling module to generate training samples and performed denoising/segmentation on raw sonar data.</li>
            </ul>
            <div style="margin-top:28px;">
                <a href="docs/Application of 3D point cloud completion for underwater structures.pdf" target="_blank" style="
                    display:inline-flex; align-items:center; gap:8px;
                    background:#000; color:#fff;
                    padding:12px 24px; border-radius:50px;
                    font-size:14px; font-weight:700;
                    text-decoration:none;
                    transition:opacity 0.2s;
                " onmouseover="this.style.opacity=0.75" onmouseout="this.style.opacity=1">
                    📄 Read Paper
                </a>
            </div>
        `
    },
    individual: {
        title: "Data Visualization Insights for Optimizing an Online Pet Supplies Store",
        tags: ["Group Project", "Tableau", "Data Analytics"],
        content: `
            <p style="margin-bottom:6px; font-size:13px; color:#888; font-weight:600;">Sep 2025 – Dec 2025</p>
            <p style="margin-bottom:20px;">Used Tableau to create an interactive dashboard for data analytics based on the Munchys Pet Supply dataset.</p>
            <h4 style="margin-bottom:10px;">Key Deliverables:</h4>
            <ul style="margin-left:20px; line-height:1.8;">
                <li><strong>Dashboard:</strong> Designed multi-page Tableau dashboards covering sales trends, customer segmentation, and product performance.</li>
                <li><strong>Insights:</strong> Identified top-performing categories and seasonal demand patterns to inform inventory decisions.</li>
                <li><strong>Storytelling:</strong> Presented findings through clear visual narratives suitable for non-technical stakeholders.</li>
                <li><strong>My Contribution:</strong> Responsible for partial dashboard design and project report writing.</li>
            </ul>
        `
    }
};

function openProject(id) {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    const data = projectData[id];
    if (data) {
        content.innerHTML = `
            <div style="margin-bottom:20px;">
                ${data.tags.map(t => `<span style="background:#000; color:#fff; padding:5px 15px; border-radius:50px; font-size:11px; margin-right:8px; font-weight:700;">${t}</span>`).join('')}
            </div>
            <h2 style="font-size:32px; margin-bottom:20px; font-weight:900;">${data.title}</h2>
            <div style="font-size:17px; color:#444; line-height:1.7;">${data.content}</div>
        `;
        overlay.classList.add('open');
        modal.classList.add('open');
        requestAnimationFrame(() => modal.classList.add('visible'));
        document.body.style.overflow = 'hidden';
    }
}

function closeProject() {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('project-modal');
    modal.classList.remove('visible');
    setTimeout(() => {
        modal.classList.remove('open');
        overlay.classList.remove('open');
        document.body.style.overflow = '';
    }, 300);
}

// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#') && href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});