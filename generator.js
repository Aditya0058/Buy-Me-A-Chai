const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Buy me a Chai | Support {{USER_NAME}}</title>
        <link rel="icon" type="image/png" href="Assets/favicon.png">

        <!-- Font Awesome for Social Logos -->
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">

        <!-- Custom CSS -->
        <style>
        /* Google Fonts - Poppins for that clean, modern look */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
    /* Premium Palette - Warm & Deep */
    --bg-primary: #120f0d;
    --bg-gradient: radial-gradient(circle at top center, #231d1a 0%, #120f0d 100%);
    --bg-card: #1e1a17;
    --accent-gold: #d4af37;
    --accent-gold-glow: rgba(212, 175, 55, 0.3);
    --accent-gold-gradient: linear-gradient(135deg, #f9e4a0 0%, #d4af37 50%, #b8962e 100%);
    --text-primary: #fdfaf5;
    --text-secondary: #a39992;
    --border-color: rgba(255, 255, 255, 0.05);
    --border-highlight: rgba(212, 175, 55, 0.2);
    --transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
}

body {
    font-family: 'Poppins', sans-serif;
    background: var(--bg-gradient);
    background-attachment: fixed;
    color: var(--text-primary);
    line-height: 1.6;
    min-height: 100vh;
}

/* --- Header --- */
.site-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 8%;
    max-width: 1400px;
    margin: 0 auto;
}

.logo {
    font-weight: 700;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    gap: 12px;
    letter-spacing: -0.5px;
}

.btn-create {
    background-color: rgba(255, 255, 255, 0.03);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    padding: 0.7rem 1.4rem;
    border-radius: 30px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    transition: var(--transition);
    text-decoration: none;
    display: inline-block;
}

.btn-create:hover {
    background-color: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
}

/* --- Main Layout --- */
.main-container {
    display: grid;
    grid-template-columns: 1fr 450px;
    gap: 4rem;
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 8%;
}

/* --- Left Column: Profile --- */
.profile-col {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.user-profile {
    text-align: left;
}

.avatar {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1.5rem;
    border: 3px solid var(--bg-primary);
    box-shadow: 0 0 0 2px var(--accent-gold);
}

.user-name {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 0.3rem;
    letter-spacing: -1px;
}

.user-tagline {
    color: var(--text-secondary);
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-weight: 300;
}

.social-links {
    display: flex;
    gap: 20px;
    margin-bottom: 2rem;
}

.social-links a {
    color: var(--text-primary);
    font-size: 1.5rem;
    transition: var(--transition);
    opacity: 0.7;
}

.social-links a:hover {
    opacity: 1;
    color: var(--accent-gold);
    transform: scale(1.2);
}

.user-bio {
    color: var(--text-secondary);
    max-width: 600px;
    font-size: 1.05rem;
    font-weight: 300;
    line-height: 1.8;
}

.projects-section h2 {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    opacity: 0.6;
}

.projects-grid {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.project-link {
    text-decoration: none;
    color: inherit;
    display: block;
}

.project-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 24px;
    padding: 2rem;
    max-width: 550px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.project-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--border-highlight), transparent);
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: var(--border-highlight);
    box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.project-card h3 {
    font-size: 1.2rem;
    margin-bottom: 0.6rem;
    font-weight: 600;
}

.project-card p {
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 300;
}

/* --- Right Column: Payment --- */
.payment-col {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.payment-box {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 32px;
    padding: 2.5rem;
    text-align: center;
    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
    position: relative;
}

.payment-box h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    font-weight: 700;
}

.amount-chips {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 2rem;
}

.chip {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    color: var(--text-primary);
    padding: 1rem 0.5rem;
    border-radius: 16px;
    cursor: pointer;
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    transition: var(--transition);
}

.chip i {
    font-size: 1.2rem;
    margin-bottom: 4px;
}

.chip.active {
    background: var(--accent-gold-gradient);
    border-color: transparent;
    color: #120f0d;
    font-weight: 600;
    box-shadow: 0 10px 20px var(--accent-gold-glow);
}

.chip:hover:not(.active) {
    border-color: var(--border-highlight);
    transform: translateY(-3px);
}

.custom-amount, .message-box {
    text-align: left;
    margin-bottom: 1.5rem;
}

.custom-amount label, .message-box label {
    display: block;
    font-size: 0.8rem;
    color: var(--text-secondary);
    margin-bottom: 0.7rem;
    font-weight: 500;
}

.input-group {
    display: flex;
    align-items: center;
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: 0 1.2rem;
    transition: var(--transition);
}

.input-group:focus-within {
    border-color: var(--accent-gold);
    box-shadow: 0 0 0 3px var(--accent-gold-glow);
}

.input-group span {
    color: var(--text-secondary);
    margin-right: 10px;
    font-weight: 600;
}

.input-group input, .message-box textarea {
    background: transparent;
    border: none;
    color: var(--text-primary);
    padding: 1rem 0;
    width: 100%;
    font-family: inherit;
    outline: none;
    font-size: 1rem;
}

.message-box textarea {
    background-color: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 14px;
    padding: 1rem;
    resize: none;
    height: 100px;
    transition: var(--transition);
}

.message-box textarea:focus {
    border-color: var(--accent-gold);
    box-shadow: 0 0 0 3px var(--accent-gold-glow);
}

.result-card {
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 32px;
    padding: 2.5rem;
    text-align: center;
    box-shadow: 0 30px 60px rgba(0,0,0,0.4);
}

.amount-display {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    letter-spacing: -1px;
}

.amount-display span {
    background: var(--accent-gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.upi-section {
    margin-bottom: 2rem;
}

.upi-id-badge {
    background-color: var(--bg-primary);
    padding: 0.6rem 1.5rem;
    border-radius: 30px;
    font-size: 0.9rem;
    border: 1px solid var(--border-color);
    display: inline-block;
    font-weight: 500;
    color: var(--text-primary);
}

.qr-section img {
    width: 220px;
    height: 220px;
    background-color: white;
    padding: 15px;
    border-radius: 20px;
    margin-bottom: 1.5rem;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3);
}

.btn-action {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    transition: var(--transition);
    margin: 0 8px;
}

.btn-action:hover {
    border-color: var(--accent-gold);
    color: var(--accent-gold);
    transform: translateY(-2px);
}

/* --- Footer --- */
.site-footer {
    text-align: center;
    padding: 4rem 0;
    color: var(--text-secondary);
    font-size: 0.85rem;
}

.site-footer a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition);
}

.site-footer a:hover {
    color: var(--accent-gold);
}

/* --- Responsive --- */
@media (max-width: 992px) {
    .main-container {
        grid-template-columns: 1fr;
        gap: 5rem;
        padding: 0 5%;
    }

    .payment-col {
        order: -1;
    }

    .user-name {
        font-size: 2rem;
    }
}

        </style>
    </head>
    <body>

        <header class="site-header">
            <div class="logo">
                <i class="fa-solid fa-mug-hot" style="color: var(--accent-gold);"></i>
                Buy Me a Chai
            </div>
            <a href="https://github.com/Aditya0058/Buy-Me-A-Chai" target="_blank" class="btn-create">Create your support page</a>
        </header>

        <main class="main-container">
            <!-- Left Column: Profile & Projects -->
            <section class="profile-col">
                <div class="user-profile">
                    <img src="{{USER_AVATAR}}" alt="{{USER_NAME}}" class="avatar" onerror="this.src='https://ui-avatars.com/api/?name={{USER_NAME}}&background=D4AF37&color=1A1614'">
                    <h1 class="user-name">{{USER_NAME}}</h1>
                    <p class="user-tagline">{{USER_TAGLINE}}</p>

                    <div class="social-links">
                        <a href="{{LINK_GITHUB}}" target="_blank" title="GitHub"><i class="fa-brands fa-github"></i></a>
                        <a href="{{LINK_X}}" target="_blank" title="X (Twitter)"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="{{LINK_LINKEDIN}}" target="_blank" title="LinkedIn"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://wa.me/{{WHATSAPP_NUMBER}}" target="_blank" title="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                    </div>

                    <div class="user-bio">
                        <p>{{USER_BIO}}</p>
                    </div>
                </div>

            </section>

            <!-- Right Column: Payment Interface -->
            <section class="payment-col">
                <div class="payment-box">
                    <p style="font-size: 0.7rem; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 1px; margin-bottom: 0.5rem;">0% Commission — Straight to UPI</p>
                    <h3>Buy me a chai</h3>

                    <div class="amount-chips">
                        <button class="chip active" data-amount="20">
                            <i class="fa-solid fa-mug-hot"></i>
                            <span>Cutting chai<br><strong>₹20</strong></span>
                        </button>
                        <button class="chip" data-amount="50">
                            <i class="fa-solid fa-mug-saucer"></i>
                            <span>Chai for me<br>and you <strong>₹50</strong></span>
                        </button>
                        <button class="chip" data-amount="100">
                            <i class="fa-solid fa-cookie-bite"></i>
                            <span>2 chai + chips<br><strong>₹100</strong></span>
                        </button>
                    </div>

                    <div class="custom-amount">
                        <label>Or enter your own amount</label>
                        <div class="input-group">
                            <span>₹</span>
                            <input type="number" id="custom-amount-input" placeholder="Amount in ₹">
                        </div>
                    </div>

                    <div class="message-box">
                        <label>Message (optional) <span style="float: right; font-size: 0.7rem;" id="char-count">0/60</span></label>
                        <textarea id="user-message" placeholder="Chai for your work" maxlength="60"></textarea>
                    </div>
                </div>

                <div class="result-card">
                    <div class="amount-display">
                        ₹<span id="res-amount">20</span>
                    </div>

                    <div class="upi-section">
                        <div class="upi-id-badge" id="res-upi">{{UPI_ID}}</div>
                    </div>

                    <div class="qr-section">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa={{UPI_ID}}%26am=20" alt="Payment QR Code">
                        <div style="color: var(--text-secondary); font-size: 0.75rem; margin-bottom: 1.5rem;">
                            Scan with any UPI app — GPay, PhonePe, Paytm, BHIM.
                        </div>
                        <div class="actions">
                            <button class="btn-action" id="copy-upi">
                                <i class="fa-regular fa-copy"></i> Copy UPI ID
                            </button>
                            <button class="btn-action" id="save-qr">
                                <i class="fa-solid fa-download"></i> Save QR
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer">
            <p>
                Powered by <a href="#">buy-me-a-chai</a> |
                Support <a href="https://aditya0058.github.io/Buy-Me-A-Chai/">Aditya Rajput</a>
            </p>
            <p style="margin-top: 0.5rem; opacity: 0.6; font-size: 0.7rem;">
                Self-hosted • 0% commission. Payments go directly to the creator's UPI. No middleman, no fees.
            </p>
        </footer>

        <!-- Custom JS -->
        <script>
            document.addEventListener('DOMContentLoaded', () => {
                // --- State ---
                let currentAmount = 20;
                const UPI_ID = "{{UPI_ID}}"; // Your Actual UPI ID

                // --- Elements ---
                const chips = document.querySelectorAll('.chip');
                const customInput = document.getElementById('custom-amount-input');
                const resAmount = document.getElementById('res-amount');
                const resUpi = document.getElementById('res-upi');
                const messageInput = document.getElementById('user-message');
                const charCount = document.getElementById('char-count');
                const copyBtn = document.getElementById('copy-upi');
                const saveBtn = document.getElementById('save-qr');
                const qrImage = document.querySelector('.qr-section img');

                // Initialize
                resUpi.innerText = UPI_ID;

                /**
                 * Updates the payment result section
                 * @param {number|string} amount
                 */
                function updatePaymentDisplay(amount) {
                    resAmount.innerText = amount;

                    // Update QR Code dynamically if using an external API
                    // For this project, we simulate it by updating the src of the image
                    const qrUrl = \`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=\${UPI_ID}%26am=\${amount}\`;
                    qrImage.src = qrUrl;
                }

                /**
                 * Handles Chip Selection
                 */
                chips.forEach(chip => {
                    chip.addEventListener('click', () => {
                        // UI: Update active state
                        chips.forEach(c => c.classList.remove('active'));
                        chip.classList.add('active');

                        // State: Update amount and clear custom input
                        currentAmount = chip.dataset.amount;
                        customInput.value = '';

                        updatePaymentDisplay(currentAmount);
                    });
                });

                /**
                 * Handles Custom Amount Input
                 */
                customInput.addEventListener('input', (e) => {
                    const val = e.target.value;

                    if (val && val > 0) {
                        // UI: Deactivate all chips
                        chips.forEach(c => c.classList.remove('active'));

                        // State: Update amount
                        currentAmount = val;
                        updatePaymentDisplay(currentAmount);
                    } else if (!val) {
                        // If cleared, revert to default ₹20 chip
                        chips[0].click();
                    }
                });

                /**
                 * Handles Message Character Count
                 */
                messageInput.addEventListener('input', (e) => {
                    const length = e.target.value.length;
                    charCount.innerText = \`\${length}/60\`;
                });

                /**
                 * Copies UPI ID to clipboard
                 */
                copyBtn.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText(UPI_ID);

                        // Visual feedback
                        const originalText = copyBtn.innerHTML;
                        copyBtn.innerHTML = \`<i class="fa-solid fa-check"></i> Copied!\`;
                        copyBtn.style.color = 'var(--accent-gold)';

                        setTimeout(() => {
                            copyBtn.innerHTML = originalText;
                            copyBtn.style.color = '';
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy: ', err);
                    }
                });

                /**
                 * Saves QR Code as Image
                 */
                saveBtn.addEventListener('click', async () => {
                    try {
                        const response = await fetch(qrImage.src);
                        const blob = await response.blob();
                        const url = window.URL.createObjectURL(blob);

                        const link = document.createElement('a');
                        link.href = url;
                        link.download = \`chai-payment-qr-\${currentAmount}.jpg\`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                    } catch (err) {
                        alert('Could not save QR code. Please right-click and save image.');
                    }
                });
            });

        </script>
    </body>
    </html>
`


// generating code
const generate = document.getElementById('generate-btn');
generate.addEventListener('click', () => {
    // collecting data
    const userName = document.getElementById('user-name').value;
    const userTagline = document.getElementById('user-tagline').value;
    const userBio = document.getElementById('user-bio').value;
    const userAvatar = document.getElementById('user-avatar').value;
    const tagLine = document.getElementById('user-tagline').value;
    const linkGithub = document.getElementById('link-github').value;
    const linkX = document.getElementById('link-x').value;
    const linkLinkedin = document.getElementById('link-linkedin').value;
    const linkWhatsapp = document.getElementById('link-whatsapp').value;
    const upiId = document.getElementById('pay-upi').value;

    // putting data in html code
    let finalHtml = htmlTemplate
    .replaceAll('{{USER_NAME}}', userName)
    .replaceAll('{{USER_TAGLINE}}', userTagline)
    .replaceAll('{{USER_BIO}}', userBio)
    .replaceAll('{{UPI_ID}}', upiId)
    .replaceAll('{{USER_AVATAR}}', userAvatar)
    .replaceAll('{{LINK_GITHUB}}', linkGithub)
    .replaceAll('{{LINK_LINKEDIN}}', linkLinkedin)
    .replaceAll('{{WHATSAPP_NUMBER}}', linkWhatsapp)
    .replaceAll('{{LINK_X}}', linkX)
    .replaceAll('{{USER_NAME}}', userName)

    // put it to preview
    document.getElementById('preview-window').srcdoc = finalHtml;
    document.getElementById('final-code-output').value = finalHtml;
})

// Get the button and the textarea
const copyBtn = document.getElementById('copy-btn');
const codeOutput = document.getElementById('final-code-output');

// Add the click event listener
copyBtn.addEventListener('click', async () => {
    const code = codeOutput.value;

    if (!code) {
        alert("Please generate your code first!");
        return;
    }

    try {
        // The magic line that copies text to the clipboard
        await navigator.clipboard.writeText(code);

        // 3. Visual Feedback: Change the button text so the user knows it worked
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "Copied! ✅";
        copyBtn.style.backgroundColor = "#4CAF50"; // Optional: turn it green

        // Change it back after 2 seconds
        setTimeout(() => {
            copyBtn.innerText = originalText;
            copyBtn.style.backgroundColor = ""; 
        }, 2000);

    } catch (err) {
        console.error('Failed to copy: ', err);
        alert("Oops! Something went wrong while copying.");
    }
});
