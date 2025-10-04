<template>
  <span></span>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue'

let popover = null

const createPopover = () => {
  popover = document.createElement('div')
  popover.className = 'link-popover'
  popover.style.cssText = `
    position: fixed;
    background: white;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    z-index: 9999;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 14px;
    line-height: 1.6;
  `
  document.body.appendChild(popover)
}

const getContentById = async (href) => {
  let [path, id] = href.split('#')

  // Resolve the correct path to the HTML file
  if (path) {
    // Ensure we are fetching the HTML file, not the Markdown source
    path = path.replace(/\.md$/, '.html');
    // Make sure the path is absolute
    if (!path.startsWith('/')) {
      const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'));
      path = `${basePath}/${path}`;
    }
  }
  
  let doc
  if (path && !window.location.pathname.endsWith(path)) {
    // Fetch and parse the remote page if it's different from the current one
    try {
      const response = await fetch(path)
      if (!response.ok) return null
      const text = await response.text()
      const parser = new DOMParser()
      doc = parser.parseFromString(text, 'text/html')
    } catch (error) {
      console.error("Failed to fetch popover content:", error)
      return null
    }
  } else {
    // Use the current document if path is empty or the same
    doc = document
  }

  const element = doc.getElementById(id)
  if (!element) return null
  
  // Get the heading and the content after it
  let content = element.textContent
  let nextElement = element.nextElementSibling
  
  // Collect content until we hit another heading of the same or higher level
  const headingLevel = parseInt(element.tagName.substring(1))
  let fullContent = `<strong>${content}</strong><br><br>`
  
  while (nextElement) {
    const nextTag = nextElement.tagName
    
    // Stop if we hit another heading of same or higher level
    if (nextTag && nextTag.match(/^H[1-6]$/)) {
      const nextLevel = parseInt(nextTag.substring(1))
      if (nextLevel <= headingLevel) break
    }
    
    // Add paragraph or list content
    if (nextTag === 'P' || nextTag === 'UL' || nextTag === 'OL') {
      fullContent += nextElement.innerHTML + '<br>'
      
      // Limit content length
      if (fullContent.length > 500) {
        fullContent = fullContent.substring(0, 500) + '...'
        break
      }
    }
    
    // Stop after table (don't include full table in popover)
    if (nextTag === 'TABLE') {
      fullContent += '<em>(See full section for table)</em>'
      break
    }
    
    nextElement = nextElement.nextElementSibling
  }
  
  return fullContent
}

const handleMouseOver = async (e) => {
  const link = e.target.closest('a[href]')
  if (!link || !popover) return

  // Ignore links in the sidebar (TOC)
  if (link.closest('.custom-sidebar')) {
    return
  }
  
  const href = link.getAttribute('href')
  
  // Only show popover for links with a hash
  if (!href || !href.includes('#')) return

  // Don't show popover if the link is inside a heading (h1-h6)
  const parentHeading = link.closest('h1, h2, h3, h4, h5, h6')
  if (parentHeading) return
  
  const content = await getContentById(href)
  
  if (content) {
    popover.innerHTML = content
    
    // Position the popover
    const rect = link.getBoundingClientRect()
    const popoverRect = popover.getBoundingClientRect()
    
    let left = rect.left
    let top = rect.bottom + 10
    
    // Adjust if popover goes off right edge
    if (left + 400 > window.innerWidth) {
      left = window.innerWidth - 420
    }
    
    // Adjust if popover goes off bottom edge
    if (top + popoverRect.height > window.innerHeight) {
      top = rect.top - popoverRect.height - 10
    }
    
    popover.style.left = `${left}px`
    popover.style.top = `${top}px`
    popover.style.opacity = '1'
  }
}

const handleMouseOut = (e) => {
  const link = e.target.closest('a[href]')
  if (!link || !popover) return
  
  popover.style.opacity = '0'
}

onMounted(() => {
  // Don't initialize on mobile devices
  if (window.innerWidth <= 768) {
    return
  }
  createPopover()
  document.addEventListener('mouseover', handleMouseOver)
  document.addEventListener('mouseout', handleMouseOut)
})

onUnmounted(() => {
  // Don't try to remove listeners if they were never added
  if (window.innerWidth <= 768) {
    return
  }
  document.removeEventListener('mouseover', handleMouseOver)
  document.removeEventListener('mouseout', handleMouseOut)
  if (popover && popover.parentNode) {
    popover.parentNode.removeChild(popover)
  }
})
</script>

<style scoped>
/* Component styles are handled inline for the popover */
</style>