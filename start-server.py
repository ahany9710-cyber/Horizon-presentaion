#!/usr/bin/env python3
"""Start HTTP server for the pitch deck - works without Node.js."""
import http.server
import socketserver
import webbrowser
import os

PORT = 3000
DIR = os.path.dirname(os.path.abspath(__file__))
os.chdir(DIR)

class Handler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate")
        super().end_headers()

if __name__ == "__main__":
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print(f"Pitch deck running at {url}")
            print("Press Ctrl+C to stop")
            webbrowser.open(url)
            httpd.serve_forever()
    except OSError as e:
        if "10048" in str(e) or "address already in use" in str(e).lower():
            print(f"Port {PORT} in use. Edit PORT in this file to use 3001.")
        raise
    except KeyboardInterrupt:
        print("\nStopped.")
