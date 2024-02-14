// function toggleSection(sectionId) {
//   var section = document.getElementById(sectionId);
//   if (section.style.display === 'none') {
//     section.style.display = 'block';
//   } else {
//     section.style.display = 'none';
//   }
// }

function toggleSection(section) {
    // Hide all content divs

    document.getElementById('home').style.display = 'none';
    document.getElementById('publications').style.display = 'none';
    document.getElementById('teaching').style.display = 'none';
    document.getElementById('service').style.display = 'none';
    document.getElementById('dropdown').style.display = 'none';

    // Show the selected content div
    document.getElementById(section).style.display = 'block';
}

function toggleDropdown() {
    var dropdown = document.getElementById('dropdown');
    // Toggle visibility of the dropdown
    dropdown.style.display = dropdown.style.display === 'none' || dropdown.style.display === '' ? 'block' : 'none';
}
