// Lex Boot Agent
console.log("Lex Agent initialized.");

// Configuration and Memory Management
class LexAgent {
  constructor() {
    this.config = {
      appName: "Lex Shell App",
      version: "1.0",
      launchMode: "dev",
      autoInjectLex: true,
      entry: "index.html"
    };
    
    this.memory = {
      bootInstructions: "Auto-inject Lex commands and system hooks at startup.",
      defaultUser: "Lacy",
      mode: "dev"
    };
    
    this.initialized = false;
    this.init();
  }
  
  init() {
    console.log(`🚀 ${this.config.appName} v${this.config.version} starting...`);
    console.log(`👤 Default user: ${this.memory.defaultUser}`);
    console.log(`🔧 Mode: ${this.memory.mode}`);
    
    if (this.config.autoInjectLex) {
      this.injectSystemHooks();
    }
    
    this.initialized = true;
    console.log("✅ Lex Agent fully initialized");
  }
  
  injectSystemHooks() {
    // System-wide optimization hooks
    console.log("🔌 Injecting system hooks...");
    
    // Performance monitoring
    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        console.log("📊 Page load complete");
      });
    }
    
    // Error handling
    window.addEventListener('error', (e) => {
      console.error("❌ System error:", e.message);
    });
    
    console.log("✅ System hooks injected");
  }
  
  // Task mapping functionality
  mapTask(taskName, handler) {
    console.log(`📋 Mapping task: ${taskName}`);
    if (typeof handler === 'function') {
      this[taskName] = handler;
      console.log(`✅ Task '${taskName}' mapped successfully`);
    } else {
      console.error(`❌ Invalid handler for task: ${taskName}`);
    }
  }
  
  // Runtime tracking
  track(event, data = {}) {
    const timestamp = new Date().toISOString();
    console.log(`📈 [${timestamp}] ${event}:`, data);
  }
  
  // System status
  getStatus() {
    return {
      initialized: this.initialized,
      config: this.config,
      memory: this.memory,
      timestamp: new Date().toISOString()
    };
  }
}

// Initialize global Lex instance
const lex = new LexAgent();

// Make it available globally
if (typeof window !== 'undefined') {
  window.lex = lex;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = lex;
}

// Bootstrap complete
console.log("🎯 Lex bootstrap complete - ready for full-stack integration");