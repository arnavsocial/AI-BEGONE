// AI Begone - Content Script

// Specific CSS selectors for known AI search engine blocks
const aiSelectors = [
    // --- Google AI Overviews (formerly Gemini in Search) ---
    'div[data-attrid="AIOverview"]',
    'div[jsname="N760b"]',
    '.bzXtMb.M8OgIe.dRpWwb', // A common class combination Google uses
    
    // --- Bing Copilot ---
    '#b_sydConvCont',        // The main Copilot chat container
    '.cc_dialog',
    '.cib-serp-main',        // Copilot interface
    
    // --- Brave Search Summaries ---
    '#summarizer',
    '.summarizer-container',
    '[data-testid="summarizer"]'
];

function obliterateAISlop() {
    aiSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            el.style.display = 'none'; // Make it invisible
        });
    });
}

// Run immediately
obliterateAISlop();

// Watch for the page changing (search engines load stuff dynamically)
const observer = new MutationObserver(() => {
    obliterateAISlop();
});

// Start watching the page
observer.observe(document.body, { childList: true, subtree: true });