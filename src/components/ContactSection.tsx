const ContactSection = () => (
    <section id="contact" className="py-24 px-4 max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-white mb-6 font-mono">
        <span className="text-green-400 mr-2">03.</span> Contact
      </h2>
      <p className="text-xl text-white mb-6">
        I’m always open to learning about new things, and I love to build. Reach out to me if you’d like to chat!
      </p>
      <a href="mailto:aliismail@email.com" className="text-green-400 font-mono text-lg hover:underline">
        aliismail@email.com
      </a>
      <div className="flex justify-center gap-4 mt-6">
        <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer" className="border border-green-400 p-2 rounded hover:bg-green-50/10">
          {/* GitHub SVG icon */}
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-green-400"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48 0-.24-.01-.87-.01-1.7-2.78.6-3.37-1.34-3.37-1.34-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.51.32 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.33-.01 2.4-.01 2.73 0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z"/></svg>
        </a>
        <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className="border border-green-400 p-2 rounded hover:bg-green-50/10">
          {/* LinkedIn SVG icon */}
          <svg width="24" height="24" fill="none" stroke="currentColor" className="text-green-400"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
      </div>
    </section>
  );
  
  export default ContactSection;