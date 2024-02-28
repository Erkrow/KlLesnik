// script.js

// Function to update the content based on user selection
function updateContent(content) {
    // Clear existing content
    document.getElementById('dynamicContent').innerHTML = '';
    // Create a new paragraph element with the content
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    // Append the paragraph to the dynamic content container
    document.getElementById('dynamicContent').appendChild(paragraph);
  }
  
  // Get references to the table rows
  const StyczenW = document.getElementById('Styczeń');
  const LutyW = document.getElementById('Luty');
  const MarzecW = document.getElementById('Marzec');
  const KwiecienW = document.getElementById('Kwiecień');
  const MajW = document.getElementById('Maj');
  const CzerwiecW = document.getElementById('Czerwiec');
  const LipiecW = document.getElementById('Lipiec');
  const SierpienW = document.getElementById('Sierpień');
  const WrzesienW = document.getElementById('Wrzesień');
  const PazdziernikW = document.getElementById('Październik');
  const ListopadW = document.getElementById('Listopad');
  const GrudzienW = document.getElementById('Grudzień');
  
  // Add click event listeners to the rows
  StyczenW.addEventListener('click', () => {
    updateContent('January content');
  });
  
  LutyW.addEventListener('click', () => {
    updateContent('June content');
  });

  MarzecW.addEventListener('click', () => {
    updateContent('January content');
  });
  
  KwiecienW.addEventListener('click', () => {
    updateContent('June content');
  });

  MajW.addEventListener('click', () => {
    updateContent('January content');
  });
  
  CzerwiecW.addEventListener('click', () => {
    updateContent('June content');
  });

  LipiecW.addEventListener('click', () => {
    updateContent('January content');
  });
  
  SierpienW.addEventListener('click', () => {
    updateContent('June content');
  });

  WrzesienW.addEventListener('click', () => {
    updateContent('January content');
  });
  
  PazdziernikW.addEventListener('click', () => {
    updateContent('June content');
  });

  ListopadW.addEventListener('click', () => {
    updateContent('January content');
  });
  
  GrudzienW.addEventListener('click', () => {
    updateContent('June content');
  });
  