let commonTableId = 'myTable';

  function updateContent(tableData) {
    // Clear existing content
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.innerHTML = '';

    // Create a new table element
    const table = document.createElement('table');

    table.id = commonTableId;
    // Loop through the tableData array to create rows and cells
    tableData.forEach(rowData => {
        const row = table.insertRow();
        rowData.forEach(cellData => {
            const cell = row.insertCell();
            cell.textContent = cellData;
        });
    });

    // Append the table to the dynamic content container
    dynamicContent.appendChild(table);
}

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
  
StyczenW.addEventListener('click', () => {;
  updateContent
  ([['Gatunek', 'Okres'],
    ['Data 1', 'Data 2'],
    ['Data 4', 'Data 5']
  ])});

LutyW.addEventListener('click', () => {
  updateContent
  ([['Header 1', 'Header 2', 'Header 3'],
  ['Data 1', 'Data 2', 'Data 3'],
  ['Data 4', 'Data 5', 'Data 6']
])});

MarzecW.addEventListener('click', () => {
  updateContent('March content');
});

KwiecienW.addEventListener('click', () => {
  updateContent('April content');
});

MajW.addEventListener('click', () => {
  updateContent('May content');
});

CzerwiecW.addEventListener('click', () => {
  updateContent('June content');
});

LipiecW.addEventListener('click', () => {
  updateContent('July content');
});

SierpienW.addEventListener('click', () => {
  updateContent('August content');
});

WrzesienW.addEventListener('click', () => {
  updateContent('September content');
});

PazdziernikW.addEventListener('click', () => {
  updateContent('October content');
});

ListopadW.addEventListener('click', () => {
  updateContent('November content');
});

GrudzienW.addEventListener('click', () => {
  updateContent('December content');
});
