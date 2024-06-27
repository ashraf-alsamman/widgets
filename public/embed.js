(function () {
    const script = document.currentScript;
    const containerId = script.getAttribute('data-container-id');
    const container = document.getElementById(containerId);
  
    if (!container) {
      console.error('Container not found');
      return;
    }
  
    function loadWidget() {
      // Load React and ReactDOM
      const reactScript = document.createElement('script');
      reactScript.src = 'https://unpkg.com/react/umd/react.production.min.js';
      reactScript.onload = () => {
        const reactDOMScript = document.createElement('script');
        reactDOMScript.src = 'https://unpkg.com/react-dom/umd/react-dom.production.min.js';
        reactDOMScript.onload = () => {
          const widgetScript = document.createElement('script');
          widgetScript.src = '/widget.js';
          widgetScript.onload = () => {
            ReactDOM.render(React.createElement(Widget.default), container);
          };
          document.body.appendChild(widgetScript);
        };
        document.body.appendChild(reactDOMScript);
      };
      document.body.appendChild(reactScript);
    }
  
    loadWidget();
  })();
  