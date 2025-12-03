export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <a 
          href="https://discord.com/users/192790568479358977" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Add me on Discord"
        >
          {/* Ensure this path matches where you put the image in /public */}
          <img src="icon/Discord.png" alt="Discord" className="footer-icon" />
        </a>
        
        <span className="separator">•</span>
        
        <a 
          href="https://ko-fi.com/K3K51JN9Z2" 
          target="_blank" 
          rel="noopener noreferrer" 
          title="Support me on Ko-fi"
        >
          <img src="icon/Kofi.png" alt="Ko-fi" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}