import './CV.css';
import resumeFile from '/resume.pdf';

function DownloadButton() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='btn' onClick={handleDownload}>
      Download Resume
    </button>
  );
}

export default DownloadButton;