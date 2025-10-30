import './CV.css'

function DownloadButton() {
  return (
    <a 
      href='/Ali Yazdanpanah Resume.pdf' 
      download="resume.pdf"
      style={{textDecoration: 'none'}}
    >
      <button>
        Download Resume
      </button>
    </a>
  );
}

export default DownloadButton;