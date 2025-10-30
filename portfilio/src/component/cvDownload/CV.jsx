import './CV.css'

function DownloadButton() {
  const handleDownload = () => {

    const fileUrl = '/../.././resume.pdf'; 
    
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = "/resume.pdf"; 
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