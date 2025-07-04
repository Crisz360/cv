function downloadPDF() {
    const element = document.getElementById('cv');
    const opt = {
    margin:       0,
    filename:     'CV_Crisz360.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2 },
    jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(element).save();
}