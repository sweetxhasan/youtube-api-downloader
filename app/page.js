'use client'

import { useState, useEffect } from 'react'
import { RiYoutubeFill, RiWhatsappFill, RiMailFill, RiFacebookBoxFill, RiGlobalLine, RiCodeSSlashLine, RiFileCopyLine, RiCheckLine, RiShieldKeyholeFill, RiFlashlightFill, RiServerLine, RiDownloadCloud2Fill } from 'remixicon-react'

export default function Home() {
  const [apiCurl, setApiCurl] = useState('')
  const [apiJavascript, setApiJavascript] = useState('')
  const [apiResponse, setApiResponse] = useState('')
  const [copiedCurl, setCopiedCurl] = useState(false)
  const [copiedJs, setCopiedJs] = useState(false)
  const [copiedResponse, setCopiedResponse] = useState(false)
  const [visitorCount, setVisitorCount] = useState(0)

  useEffect(() => {
    // Set initial API examples
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : ''
    const exampleUrl = 'https://youtu.be/0NnSsgO8nEc'
    
    setApiCurl(`curl -X GET "${baseUrl}/api/youtube/download?url=${encodeURIComponent(exampleUrl)}"`)
    
    setApiJavascript(`// JavaScript Fetch API Example
fetch('${baseUrl}/api/youtube/download?url=${encodeURIComponent(exampleUrl)}')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

// Or using async/await
async function downloadVideoInfo(url) {
  try {
    const response = await fetch('${baseUrl}/api/youtube/download?url=' + encodeURIComponent(url));
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}`)

    // Set example response
    setApiResponse(`{
  "code": 0,
  "data": {
    "cover": "https://i.ytimg.com/vi/0NnSsgO8nEc/sddefault.jpg",
    "duration": 228,
    "title": "Setup Video Tutorial",
    "items": [
      {
        "ext": "mp4",
        "fps": 30,
        "height": 360,
        "label": "mp4 (360p)",
        "type": "video_with_audio",
        "url": "https://my-website.vercel.app/example.mp4",
        "width": 640
      },
      {
        "ext": "mp4",
        "fps": 60,
        "height": 720,
        "label": "mp4 (720p60)",
        "type": "video",
        "url": "https://my-website.vercel.app/example.mp4",
        "width": 1280
      },
      {
        "ext": "webm",
        "fps": 30,
        "height": 480,
        "label": "webm (480p)",
        "type": "video",
        "url": "https://my-website.vercel.app/example.webm",
        "width": 854
      },
      {
        "ext": "m4a",
        "fps": -1,
        "height": -1,
        "label": "m4a (131kb/s)",
        "type": "audio",
        "url": "https://my-website.vercel.app/example.m4a",
        "width": -1
      },
      {
        "ext": "opus",
        "fps": -1,
        "height": -1,
        "label": "opus (134kb/s)",
        "type": "audio",
        "url": "https://my-website.vercel.app/example.opus",
        "width": -1
      }
    ]
  }
}`)

    // Simulate visitor count (you can replace this with a real counter API)
    const randomCount = Math.floor(Math.random() * 10000) + 5000
    setVisitorCount(randomCount)
  }, [])

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text)
    if (type === 'curl') {
      setCopiedCurl(true)
      setTimeout(() => setCopiedCurl(false), 2000)
    } else if (type === 'js') {
      setCopiedJs(true)
      setTimeout(() => setCopiedJs(false), 2000)
    } else if (type === 'response') {
      setCopiedResponse(true)
      setTimeout(() => setCopiedResponse(false), 2000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <RiYoutubeFill className="w-8 h-8 text-red-600" />
            <h1 className="text-2xl font-bold text-gray-900">YT SVAE</h1>
          </div>
          <button 
            onClick={() => window.location.href = 'https://wa.me/8801744298642'}
            className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white hover:bg-green-600 transition-colors"
          >
            <RiWhatsappFill className="w-5 h-5" />
            <span>Contact Admin</span>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 mb-6">
            <RiDownloadCloud2Fill className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube Video Downloader API
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Super fast and reliable API for downloading YouTube videos in multiple formats and qualities.
            Simple GET requests, instant responses.
          </p>
        </div>

        {/* API Endpoint Card */}
        <div className="bg-white border border-gray-200 p-6 mb-12">
          <div className="flex items-center gap-2 mb-4">
            <RiServerLine className="w-5 h-5 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900">API Endpoint</h2>
          </div>
          <div className="bg-gray-900 text-green-400 p-4 font-mono text-sm overflow-x-auto">
            GET /api/youtube/download?url=YOUTUBE_URL
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-100 flex items-center justify-center">
                <RiFlashlightFill className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold">Super Fast</h3>
            </div>
            <p className="text-gray-600">Lightning-fast response times with optimized proxy servers.</p>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-100 flex items-center justify-center">
                <RiShieldKeyholeFill className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold">Secure Proxy</h3>
            </div>
            <p className="text-gray-600">Rotating user agents and secure proxy connections.</p>
          </div>

          <div className="bg-white border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-100 flex items-center justify-center">
                <RiCodeSSlashLine className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold">Easy Integration</h3>
            </div>
            <p className="text-gray-600">Simple REST API, works with any programming language.</p>
          </div>
        </div>

        {/* API Request Example */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <RiGlobalLine className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">API Request Example</h2>
            </div>
            <div className="text-sm text-gray-500">
              Works with cURL, JavaScript, Python, PHP, Java, etc.
            </div>
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">cURL</span>
              <button
                onClick={() => copyToClipboard(apiCurl, 'curl')}
                className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {copiedCurl ? <RiCheckLine className="w-4 h-4 text-green-600" /> : <RiFileCopyLine className="w-4 h-4" />}
                {copiedCurl ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <textarea
              value={apiCurl}
              readOnly
              className="w-full h-32 p-4 bg-gray-50 font-mono text-sm border border-gray-200"
              spellCheck="false"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">JavaScript</span>
              <button
                onClick={() => copyToClipboard(apiJavascript, 'js')}
                className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                {copiedJs ? <RiCheckLine className="w-4 h-4 text-green-600" /> : <RiFileCopyLine className="w-4 h-4" />}
                {copiedJs ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <textarea
              value={apiJavascript}
              readOnly
              className="w-full h-48 p-4 bg-gray-50 font-mono text-sm border border-gray-200"
              spellCheck="false"
            />
          </div>
        </div>

        {/* API Response Example */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <RiCodeSSlashLine className="w-5 h-5 text-green-600" />
              <h2 className="text-xl font-semibold text-gray-900">API Response Example</h2>
            </div>
            <button
              onClick={() => copyToClipboard(apiResponse, 'response')}
              className="flex items-center gap-2 px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              {copiedResponse ? <RiCheckLine className="w-4 h-4 text-green-600" /> : <RiFileCopyLine className="w-4 h-4" />}
              {copiedResponse ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <textarea
            value={apiResponse}
            readOnly
            className="w-full h-96 p-4 bg-gray-50 font-mono text-sm border border-gray-200"
            spellCheck="false"
          />
        </div>

        {/* Contact Section */}
        <div className="bg-white border border-gray-200 p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contact Admin</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://wa.me/8801744298642"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-50 border border-green-200 p-6 hover:bg-green-100 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 flex items-center justify-center">
                  <RiWhatsappFill className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">WhatsApp</h3>
              </div>
              <p className="text-gray-700">+8801744298642</p>
              <p className="text-sm text-gray-500 mt-2">Fast response on WhatsApp</p>
            </a>

            <a
              href="mailto:kinghasanbd1@gmail.com"
              className="bg-blue-50 border border-blue-200 p-6 hover:bg-blue-100 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center">
                  <RiMailFill className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-700">kinghasanbd1@gmail.com</p>
              <p className="text-sm text-gray-500 mt-2">For detailed queries</p>
            </a>

            <a
              href="https://facebook.com/SWEETxHASAN"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-50 border border-indigo-200 p-6 hover:bg-indigo-100 transition-colors"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-indigo-100 flex items-center justify-center">
                  <RiFacebookBoxFill className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Facebook</h3>
              </div>
              <p className="text-gray-700">@SWEETxHASAN</p>
              <p className="text-sm text-gray-500 mt-2">Connect on Facebook</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <RiYoutubeFill className="w-6 h-6 text-red-500" />
                <span className="text-xl font-bold">YT SVAE</span>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} YouTube Video Downloader API. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{visitorCount.toLocaleString()}</div>
                <div className="text-sm text-gray-400">Total Visitors</div>
              </div>
              <div className="h-8 w-px bg-gray-700"></div>
              <div className="text-sm text-gray-400">
                API Status: <span className="text-green-400 font-medium">● Operational</span>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              This service is for educational purposes only. Please respect YouTube's Terms of Service.
              We are not responsible for any misuse of this API.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
  }
