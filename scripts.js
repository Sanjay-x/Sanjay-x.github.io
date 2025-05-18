// Role rotator with smooth transition
const roles = ["Data Scientist", "Data Analyst", "ML Engineer", "AI Engineer"];
let index = 0;

function updateRole() {
  const roleElement = document.getElementById("role-title");
  
  // Fade out only the role text
  roleElement.style.opacity = "0";
  roleElement.style.transform = "translateY(10px)";
  
  setTimeout(() => {
    roleElement.innerText = roles[index];
    roleElement.style.opacity = "1";
    roleElement.style.transform = "translateY(0)";
  index = (index + 1) % roles.length;
  }, 500);
}

// Style the role title element
document.addEventListener('DOMContentLoaded', () => {
  const roleElement = document.getElementById("role-title");
  roleElement.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
  roleElement.style.display = "inline-block";
  roleElement.style.opacity = "1";
});

// Initial call and set interval
updateRole();
setInterval(updateRole, 3000);

// Project Card Expander
function openProject(name) {
  const modalContainer = document.getElementById('modalContainer');
  const modal = document.getElementById('projectModal');
  const content = document.getElementById('projectContent');
  const dimBg = document.querySelector('.dim-background');

  const projects = {
    "agent": `
      <h3>AI Research Agent</h3>
      
      <h4>Purpose</h4>
      <p>To automate and simplify the research workflow using AI enabling users to search, extract, summarize, and download key information from the web in just a few clicks.</p>
      
      <h4>Technologies</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>Streamlit</span>
        <span>Gemini LLM API</span>
        <span>Google Custom Search API</span>
        <span>ReportLab</span>
        <span>ChromaDB</span>
      </div>

      <h4>How It Works</h4>
      <ul>
        <li>Users input queries via text or voice</li>
        <li>Performs a Google Search using the query</li>
        <li>Scrapes the top article links from search results</li>
        <li>Extracts content and summarizes it using the Gemini LLM API</li>
        <li>Stores context in ChromaDB for embedding and reference</li>
        <li>Exports the final summary as a clean PDF using ReportLab</li>
        <li>Delivered through a fast, interactive Streamlit UI</li>
      </ul>

      <div class="project-links">
        <a href="https://drive.google.com/file/d/1EPs-rE-sGucYjRzjxvmkvD8cMXWhWmNH/view" target="_blank" class="demo-link">View Demo</a>
        <a href="https://github.com/Sanjay-x/AI-Research-Agent" target="_blank" class="github-link">GitHub Repository</a>
      </div>`,
    "mri": `
      <h3>Brain Tumor Detection System & RAG Bot</h3>
      
      <h4>Purpose</h4>
      <p>To provide an intelligent medical imaging system that accurately detects brain tumors from MRI scans and delivers detailed, context-aware medical insights using Retrieval-Augmented Generation (RAG).</p>
      
      <h4>Technologies</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>Streamlit</span>
        <span>TensorFlow</span>
        <span>Cohere API</span>
        <span>SentenceTransformers</span>
        <span>SQLite</span>
        <span>ChromaDB</span>
      </div>

      <h4>How It Works</h4>
      <ul>
        <li>Users upload MRI scan images through a responsive Streamlit UI</li>
        <li>A fine-tuned CNN model analyzes the scan and classifies tumors with 98% accuracy</li>
        <li>Tumor types supported: Glioma, Meningioma, Pituitary, No tumor</li>
        <li>A RAG-powered chatbot (using SentenceTransformers + Cohere API) provides medical explanations</li>
        <li>ChromaDB stores knowledge base and medical references</li>
        <li>Results and responses are generated in real time for a seamless user experience</li>
      </ul>

      <div class="project-links">
        <a href="https://www.linkedin.com/posts/sanjay-s-24a37b342_ai-machinelearning-healthcareai-activity-7297668990066200578-By0g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFXXBpoBO6UO1EDaKIlayWQRDldz1q-odAg" target="_blank" class="demo-link">View Demo</a>
        <a href="https://github.com/Sanjay-x/Tumor-Prediction-And-RAG-Implementation" target="_blank" class="github-link">GitHub Repository</a>
      </div>`,
    "cluster": `
      <h3>Customer Segmentation Analysis</h3>
      
      <h4>Purpose</h4>
      <p>By understanding customer behavior, we can define targeted strategies for different customer groups such as Inactive, Casual, or Regular to improve retention, personalize marketing, and boost overall business performance.</p>
      
      <h4>Technologies</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>Pandas</span>
        <span>NumPy</span>
        <span>Scikit-learn</span>
        <span>Matplotlib</span>
        <span>Seaborn</span>
      </div>

      <h4>Project Structure</h4>
      <ul>
        <li>Data Preprocessing: Cleaned and prepared raw customer data</li>
        <li>Feature Quantization: Transformed continuous variables into categorical ranges (e.g., low, medium, high)</li>
        <li>Feature Encoding: Converted categories into numeric values for model compatibility</li>
      </ul>

      <h4>Clustering Techniques</h4>
      <ul>
        <li>K-Means Clustering</li>
        <li>Hierarchical Clustering</li>
        <li>Gaussian Mixture Model (GMM)</li>
        <li>Custom Rule-Based Clustering</li>
      </ul>

      <p class="additional-info">Visualization: Used pie charts and other visual tools to represent segment distributions clearly</p>

      <div class="project-links">
        <a href="https://github.com/Sanjay-x/Customer-Segment-Cluster" target="_blank" class="github-link">GitHub Repository</a>
      </div>`,
    "unemployment": `
      <h3>Economic Factors Affecting Unemployment</h3>
      
      <h4>Purpose</h4>
      <p>To analyze and understand how various economic indicators impact unemployment rates across India, China, and the USA and use predictive models to forecast future unemployment trends and support informed policy or business decisions.</p>
      
      <h4>Technologies</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>Pandas</span>
        <span>Matplotlib</span>
        <span>Seaborn</span>
        <span>Plotly</span>
        <span>Scikit-learn</span>
        <span>TensorFlow</span>
        <span>Statsmodels</span>
      </div>

      <h4>Project Structure</h4>
      <ul>
        <li>Data Collection & Preprocessing: Collected and cleaned macroeconomic data from public datasets</li>
        <li>Exploratory Data Analysis: Visualized economic indicators such as GDP, inflation, interest rates, and employment sectors</li>
        <li>Correlation Analysis: Identified relationships between inflation, GDP growth, and unemployment</li>
      </ul>

      <h4>Modeling</h4>
      <ul>
        <li>SARIMA for time series forecasting</li>
        <li>LSTM Neural Network for deep learning-based predictions</li>
        <li>Evaluation: Compared actual 2024 unemployment data with model forecasts</li>
      </ul>

      <h4>Key Insights</h4>
      <ul>
        <li>India: Agricultural employment rose after 2019 due to policy changes</li>
        <li>China: Urbanization led to a drop in agriculture sector employment</li>
        <li>USA: Maintained stability across sectors</li>
      </ul>

      <div class="project-links">
        <a href="https://github.com/Sanjay-x/Unemployment_Rate-Forecasting" target="_blank" class="github-link">GitHub Repository</a>
      </div>`,
    "realestate": `
      <h3>Real Estate Intelligence</h3>
      
      <h4>Purpose</h4>
      <p>To build a data-driven real estate intelligence system that helps identify profitable land deals, predict construction costs, estimate selling price & ROI, and minimize project risks through AI and machine learning models.</p>
      
      <h4>How It Boosts Real Estate Business</h4>
      <ul>
        <li><strong>Land Discovery:</strong> Aggregates leads from real estate sites, social media, and government portals using a smart monitoring system</li>
        <li><strong>Deal Evaluation:</strong> Predicts land value and opportunity score using legal rates, market prices, and amenities</li>
        <li><strong>Cost Forecasting:</strong> Uses historical project data to predict construction costs by type, material, and location</li>
        <li><strong>ROI & Pricing:</strong> Accurately estimates selling price and ROI by analyzing location, buyer segment, and property features</li>
        <li><strong>Risk Reduction:</strong> Classifies projects based on success probability and financial risk using regression and classification models</li>
        <li><strong>Smart Marketing:</strong> Scores and targets buyers based on income, location, and preferences — boosting conversion and revenue</li>
      </ul>

      <h4>Technologies (Planned)</h4>
      <div class="tech-tags">
        <span>Python</span>
        <span>TensorFlow</span>
        <span>Scikit-learn</span>
        <span>FastAPI</span>
        <span>PostgreSQL</span>
        <span>React</span>
        <span>Web Scraping</span>
        <span>GIS Integration</span>
      </div>

      <h4>Development Status</h4>
      <p>Project is in the planning and prototyping stage. Development will begin soon with modular ML model and Real time data integration.</p>

      <div class="project-links">
        <a href="https://docs.google.com/presentation/d/1jcoF05hb5tL1cyldlrkWJWWqwR90mc3c/edit?slide=id.p1#slide=id.p1" target="_blank" class="demo-link">View Presentation</a>
      </div>`
  };

  // Update content
  content.innerHTML = projects[name];

  // Show modal and add blur effect
  document.body.classList.add('modal-open');
  modalContainer.classList.add('active');
  dimBg.classList.add('active');
  modal.classList.add('active');

  // Add click outside listener
  dimBg.addEventListener('click', closeProject);
}

function closeProject(event) {
  if (event) event.stopPropagation();
  
  const modalContainer = document.getElementById('modalContainer');
  const modal = document.getElementById('projectModal');
  const dimBg = document.querySelector('.dim-background');

  // Remove modal and blur effect
  document.body.classList.remove('modal-open');
  modalContainer.classList.remove('active');
  dimBg.classList.remove('active');
  modal.classList.remove('active');

  // Remove click outside listener
  dimBg.removeEventListener('click', closeProject);
}

// Slider functionality
function slideProjects(direction) {
  const container = document.querySelector('#projects .scroll-container');
  const scrollAmount = container.clientWidth * 0.8;
  const targetScroll = container.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
  
  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
  
  updateSliderButtons(container);
}

function slideIdeas(direction) {
  const container = document.querySelector('#ideas .scroll-container');
  const scrollAmount = container.clientWidth * 0.8;
  const targetScroll = container.scrollLeft + (direction === 'next' ? scrollAmount : -scrollAmount);
  
  container.scrollTo({
    left: targetScroll,
    behavior: 'smooth'
  });
  
  updateSliderButtons(container);
}

function updateSliderButtons(container) {
  const section = container.closest('section');
  const prevBtn = section.querySelector('.slider-btn.prev');
  const nextBtn = section.querySelector('.slider-btn.next');
  
  // Update button states
  if (prevBtn) {
    prevBtn.disabled = container.scrollLeft <= 0;
  }
  if (nextBtn) {
    nextBtn.disabled = container.scrollLeft + container.clientWidth >= container.scrollWidth;
  }
}

// Initialize slider buttons state
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.scroll-container');
  containers.forEach(updateSliderButtons);
  
  // Add scroll event listeners
  containers.forEach(container => {
    container.addEventListener('scroll', () => updateSliderButtons(container));
  });
});

// Update slider buttons on window resize
window.addEventListener('resize', () => {
  const containers = document.querySelectorAll('.scroll-container');
  containers.forEach(updateSliderButtons);
});

// Remove all slider-related code
function updateSliderButtons(container) {
  // Empty function to prevent errors from existing event listeners
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', () => {
  const techBubbles = document.querySelectorAll('.tech-bubble');
  
  techBubbles.forEach(bubble => {
    // Add span for text content
    const text = bubble.textContent;
    bubble.textContent = '';
    bubble.innerHTML = `<span>${text}</span>`;
    
    // Add hover interaction
    bubble.addEventListener('mouseenter', () => {
      bubble.style.transform = 'translateY(-5px) scale(1.05)';
    });
    
    bubble.addEventListener('mouseleave', () => {
      bubble.style.transform = 'translateY(0) scale(1)';
    });
    
    // Add click effect
    bubble.addEventListener('click', () => {
      bubble.style.transform = 'translateY(0) scale(0.95)';
      setTimeout(() => {
        bubble.style.transform = 'translateY(-5px) scale(1.05)';
      }, 150);
    });
  });
});

// Neural Network Background Animation  w   
const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
}

// Initial resize
resizeCanvas();

// Resize on window change
window.addEventListener('resize', resizeCanvas);

// Particle class
class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.2 + 0.8;
        this.color = 'rgba(255, 46, 46, 0.075)'; // Red nodes with reduced opacity
    }

    update() {
        // Add slight random movement for more natural flow
        this.vx += (Math.random() - 0.5) * 0.02;
        this.vy += (Math.random() - 0.5) * 0.02;
        
        // Limit maximum speed
        this.vx = Math.max(Math.min(this.vx, 0.4), -0.4);
        this.vy = Math.max(Math.min(this.vy, 0.4), -0.4);
        
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges with dampening
        if (this.x < 0 || this.x > canvas.width) {
            this.vx *= -0.8;
            this.x = this.x < 0 ? 0 : canvas.width;
        }
        if (this.y < 0 || this.y > canvas.height) {
            this.vy *= -0.8;
            this.y = this.y < 0 ? 0 : canvas.height;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

// Create particles
const particles = [];
const particleCount = 100;
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

// Draw lines between nearby particles
function drawLines() {
    particles.forEach((particle, i) => {
        // Find closest particles to create stronger connections
        let connections = [];
        for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[j].x - particle.x;
            const dy = particles[j].y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 150) {
                connections.push({
                    particle: particles[j],
                    distance: distance
                });
            }
        }
        
        // Sort connections by distance and keep only the closest ones
        connections.sort((a, b) => a.distance - b.distance);
        connections = connections.slice(0, 5); // Keep 5 closest connections
        
        // Draw connections
        connections.forEach(connection => {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(connection.particle.x, connection.particle.y);
            
            // Create gradient based on particle colors
            const gradient = ctx.createLinearGradient(
                particle.x, particle.y,
                connection.particle.x, connection.particle.y
            );
            
            // Calculate opacity based on distance
            const opacity = 0.05 * (1 - connection.distance / 150);
            gradient.addColorStop(0, particle.color.replace('0.075', opacity.toString()));
            gradient.addColorStop(1, connection.particle.color.replace('0.075', opacity.toString()));
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = (1 - connection.distance / 150) * 0.5;
        ctx.stroke();
        });
    });
}

// Mouse interaction
let mouse = {
    x: null,
    y: null,
    radius: 120
};

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Update particle behavior to react to mouse
function updateParticles() {
    particles.forEach(particle => {
        if (mouse.x && mouse.y) {
            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const angle = Math.atan2(dy, dx);
                const force = (mouse.radius - distance) / mouse.radius;
                
                particle.vx -= Math.cos(angle) * force * 0.5;
                particle.vy -= Math.sin(angle) * force * 0.5;
            }
        }
        particle.update();
    });
}

// Animation loop
function animate() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.07)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    updateParticles();
    particles.forEach(particle => {
        particle.draw();
    });
    drawLines();

    requestAnimationFrame(animate);
}

// Start animation
animate();
