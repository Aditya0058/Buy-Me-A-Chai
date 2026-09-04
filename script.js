/**
 * Buy Me a Chai - Interactivity Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // --- State ---
    let currentAmount = 20;
    const UPI_ID = "8446585968@fam"; // Your Actual UPI ID

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
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=upi://pay?pa=${UPI_ID}%26am=${amount}`;
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
        charCount.innerText = `${length}/60`;
    });

    /**
     * Copies UPI ID to clipboard
     */
    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(UPI_ID);

            // Visual feedback
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = `<i class="fa-solid fa-check"></i> Copied!`;
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
            link.download = `chai-payment-qr-${currentAmount}.jpg`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (err) {
            alert('Could not save QR code. Please right-click and save image.');
        }
    });
});
