const puppeteer = require('puppeteer');
const path = require('path');

async function generatePDF() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Load the local HTML file
    const filePath = path.join(__dirname, 'dist', 'index.html');
    await page.goto(`file://${filePath}`);
    
    // Add CSS to make contact items appear on separate lines for PDF
    await page.addStyleTag({
        content: `
            .contact-info {
                display: flex !important;
                flex-direction: column !important;
                align-items: center !important;
            }
            .contact-item {
                display: block !important;
                margin: 3px 0 !important;
            }
            .contact-separator {
                display: none !important;
            }
        `
    });
    
    // Generate PDF
    await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        printBackground: true,
        margin: {
            top: '0.5in',
            right: '0.5in',
            bottom: '0.5in',
            left: '0.5in'
        }
    });
    
    await browser.close();
    console.log('PDF generated successfully as resume.pdf');
}

generatePDF().catch(console.error);