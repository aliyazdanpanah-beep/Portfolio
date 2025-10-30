import './navbar.css'

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div id="NavWrapper">
        <span 
          className="NavPart" 
          onClick={() => scrollToSection('home')}
        >
          Home
        </span>
        <span 
          className="NavPart" 
          onClick={() => scrollToSection('projects')}
        >
          Project
        </span>
        <span 
          className="NavPart" 
          onClick={() => scrollToSection('skills')}
        >
          Skills
        </span>
        <span 
          className="NavPart "
          onClick={() => scrollToSection('about')}
        >
          Get Resume
        </span>
      </div>
    </>
  );
}

export default Nav;